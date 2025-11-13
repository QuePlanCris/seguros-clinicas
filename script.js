// Variables globales
let categoriaSeleccionada = null;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    inicializarLanding();
    configurarEventListeners();
});

// Inicializar la landing con el cliente actual
function inicializarLanding() {
    aplicarEstilosCliente();
    cargarHero();
    cargarBeneficiosUnicos();
    cargarCategorias();
    cargarProductos();
    actualizarInfoCategoria();
    cargarFooter();
    cargarPortalYFormulario();
    cargarSoportePresencial();
    configurarSectionTitles();
}

// Configurar títulos de sección con data-text
function configurarSectionTitles() {
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        if (!title.getAttribute('data-text')) {
            // Para productosTitle, siempre usar "Productos" como texto de fondo
            if (title.id === 'productosTitle') {
                title.setAttribute('data-text', 'Productos');
            } else {
                // Para títulos con icono, usar solo el texto sin el icono
                const titleText = title.querySelector('.section-title-text');
                if (titleText) {
                    title.setAttribute('data-text', titleText.textContent);
                } else {
                    title.setAttribute('data-text', title.textContent);
                }
            }
        }
    });
}

// Configurar event listeners
function configurarEventListeners() {
    const selectCliente = document.getElementById('selectCliente');
    const reservadosLink = document.getElementById('reservadosLink');
    const clienteModal = document.getElementById('clienteModal');
    const clienteModalOverlay = document.getElementById('clienteModalOverlay');
    const clienteModalClose = document.getElementById('clienteModalClose');
    
    // Abrir modal al hacer clic en "reservados"
    if (reservadosLink) {
        reservadosLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (clienteModal && selectCliente) {
                // Establecer el valor actual del cliente en el select
                selectCliente.value = clienteActual;
                clienteModal.classList.add('active');
            }
        });
    }
    
    // Cerrar modal al hacer clic en overlay
    if (clienteModalOverlay) {
        clienteModalOverlay.addEventListener('click', () => {
            if (clienteModal) {
                clienteModal.classList.remove('active');
            }
        });
    }
    
    // Cerrar modal al hacer clic en botón cerrar
    if (clienteModalClose) {
        clienteModalClose.addEventListener('click', () => {
            if (clienteModal) {
                clienteModal.classList.remove('active');
            }
        });
    }
    
    // Cambiar cliente
    if (selectCliente) {
        selectCliente.addEventListener('change', (e) => {
            clienteActual = e.target.value;
            categoriaSeleccionada = null; // Se reseteará y se seleccionará la primera en cargarCategorias
            inicializarLanding();
            // Cerrar modal después de seleccionar
            if (clienteModal) {
                clienteModal.classList.remove('active');
            }
        });
    }
    
    // Toggle del menú móvil
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const nav = document.querySelector('.header-nav');
            if (nav) {
                nav.classList.toggle('nav-open');
            }
        });
    }
    
    // Manejar envío del formulario de apoyo
    const apoyoForm = document.getElementById('apoyoForm');
    if (apoyoForm) {
        apoyoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(apoyoForm);
            const datos = {
                nombre: formData.get('nombre'),
                rut: formData.get('rut'),
                compania: formData.get('compania')
            };
            console.log('Datos del formulario:', datos);
            // Aquí puedes agregar la lógica para enviar los datos
            alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
            apoyoForm.reset();
        });
    }
}

// Aplicar estilos personalizados según el cliente
function aplicarEstilosCliente() {
    const cliente = clientes[clienteActual];
    const root = document.documentElement;
    
    // Aplicar colores CSS variables
    root.style.setProperty('--primary', cliente.colores.primary);
    root.style.setProperty('--secondary', cliente.colores.secondary);
    root.style.setProperty('--accent', cliente.colores.accent);
    root.style.setProperty('--background', cliente.colores.background);
    root.style.setProperty('--text', cliente.colores.text);
    root.style.setProperty('--text-light', cliente.colores.textLight);
    
    // Actualizar logo
    const logo = document.getElementById('logo');
    logo.src = cliente.logo;
    logo.alt = cliente.nombre;
    
    // Actualizar logo del footer
    const footerLogo = document.getElementById('footerLogo');
    footerLogo.src = cliente.logo;
    footerLogo.alt = cliente.nombre;
}

// Cargar hero
function cargarHero() {
    const cliente = clientes[clienteActual];
    const heroSection = document.getElementById('heroSection');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const heroPrice = document.getElementById('heroPrice');
    
    if (!heroSection || !cliente.hero) return;
    
    // Aplicar imagen de fondo
    heroSection.style.backgroundImage = `url(${cliente.hero.imagen})`;
    
    // Cargar textos
    heroTitle.textContent = cliente.hero.titulo;
    heroSubtitle.textContent = cliente.hero.subtitulo;
    
    // Calcular y mostrar precio más barato si está habilitado
    if (cliente.hero.mostrarPrecio) {
        let precioMostrar = '';
        
        // Si hay precio personalizado, usarlo
        if (cliente.hero.precioPersonalizado) {
            precioMostrar = cliente.hero.precioPersonalizado;
        } else {
            // Calcular el precio más barato de los productos
            const precios = cliente.productos.map(producto => {
                // Extraer número del precio (ej: "$15.000" -> 15000)
                const precioNum = parseInt(producto.precio.replace(/[^0-9]/g, ''));
                return precioNum;
            });
            
            if (precios.length > 0) {
                const precioMinimo = Math.min(...precios);
                // Formatear precio (ej: 15000 -> "$15.000")
                precioMostrar = precioMinimo.toLocaleString('es-CL', {
                    style: 'currency',
                    currency: 'CLP',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                });
            }
        }
        
        if (precioMostrar) {
            heroPrice.textContent = `Opciones para cuidar de toda la familia desde ${precioMostrar}/mes.`;
        } else {
            heroPrice.textContent = '';
        }
    } else {
        heroPrice.textContent = '';
    }
}

// Cargar beneficios únicos
function cargarBeneficiosUnicos() {
    const cliente = clientes[clienteActual];
    const beneficiosSection = document.getElementById('beneficiosUnicosSection');
    const beneficiosTitle = document.getElementById('beneficiosUnicosTitle');
    const beneficiosGrid = document.getElementById('beneficiosUnicosGrid');
    
    if (!beneficiosSection || !cliente.beneficiosUnicos) return;
    
    if (cliente.beneficiosUnicos.mostrar && cliente.beneficiosUnicos.beneficios.length > 0) {
        // Mostrar la sección
        beneficiosSection.style.display = 'block';
        
        // Cargar título
        if (beneficiosTitle) {
            beneficiosTitle.textContent = cliente.beneficiosUnicos.titulo;
        }
        
        // Limpiar grid
        if (beneficiosGrid) beneficiosGrid.innerHTML = '';
        
        // Crear cards para cada beneficio
        cliente.beneficiosUnicos.beneficios.forEach(beneficio => {
            const card = document.createElement('div');
            card.className = 'beneficio-unico-card fade-in';
            
            card.innerHTML = `
                <div class="beneficio-unico-icon">
                    <i class="${beneficio.icono}"></i>
                </div>
                <p class="beneficio-unico-texto">${beneficio.texto}</p>
            `;
            
            if (beneficiosGrid) beneficiosGrid.appendChild(card);
        });
    } else {
        // Ocultar la sección
        if (beneficiosSection) beneficiosSection.style.display = 'none';
    }
}

// Cargar categorías
function cargarCategorias() {
    const cliente = clientes[clienteActual];
    const categoriasGrid = document.getElementById('categoriasGrid');
    const navMenu = document.getElementById('navMenu');
    
    // Limpiar grids
    categoriasGrid.innerHTML = '';
    if (navMenu) navMenu.innerHTML = '';
    
    cliente.categorias.forEach(categoria => {
        // Crear tarjeta de categoría
        const categoriaCard = document.createElement('div');
        categoriaCard.className = 'categoria-card';
        categoriaCard.dataset.categoriaId = categoria.id;
        
        categoriaCard.innerHTML = `
            <div class="categoria-icon"><i class="${categoria.icono}"></i></div>
            <div class="categoria-nombre">${categoria.nombre}</div>
        `;
        
        categoriaCard.addEventListener('click', () => {
            seleccionarCategoria(categoria.id);
        });
        
        categoriasGrid.appendChild(categoriaCard);
        
        // Crear item del menú
        if (navMenu) {
            const menuItem = document.createElement('li');
            const menuLink = document.createElement('a');
            menuLink.href = '#';
            menuLink.dataset.categoriaId = categoria.id;
            menuLink.innerHTML = `<i class="${categoria.icono}"></i> <span>${categoria.nombre}</span>`;
            
            menuLink.addEventListener('click', (e) => {
                e.preventDefault();
                seleccionarCategoria(categoria.id);
                // Cerrar menú móvil si está abierto
                const nav = document.querySelector('.header-nav');
                if (nav) nav.classList.remove('nav-open');
            });
            
            menuItem.appendChild(menuLink);
            navMenu.appendChild(menuItem);
        }
    });
    
    // Si no hay categoría seleccionada, seleccionar automáticamente la primera
    if (!categoriaSeleccionada && cliente.categorias.length > 0) {
        seleccionarCategoria(cliente.categorias[0].id, false); // false para no hacer scroll
    }
}

// Seleccionar categoría
function seleccionarCategoria(categoriaId, hacerScroll = true) {
    categoriaSeleccionada = categoriaId;
    
    // Actualizar estado visual de las categorías (tabs)
    const categoriaCards = document.querySelectorAll('.categoria-card');
    categoriaCards.forEach(card => {
        if (card.dataset.categoriaId === categoriaId) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    
    // Actualizar estado visual del menú
    const menuLinks = document.querySelectorAll('.nav-menu a');
    menuLinks.forEach(link => {
        if (link.dataset.categoriaId === categoriaId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Cargar productos de la categoría
    cargarProductos();
    
    // Actualizar beneficios y FAQs
    actualizarInfoCategoria();
    
    // Scroll suave a productos solo si se solicita
    if (hacerScroll) {
        document.querySelector('.productos-section').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Cargar productos
function cargarProductos() {
    const cliente = clientes[clienteActual];
    const productosGrid = document.getElementById('productosGrid');
    productosGrid.innerHTML = '';
    
    let productosFiltrados = cliente.productos;
    
    // Filtrar por categoría si hay una seleccionada
    if (categoriaSeleccionada) {
        productosFiltrados = cliente.productos.filter(
            producto => producto.categoria === categoriaSeleccionada
        );
    }
    
    // Actualizar título de productos
    const productosTitle = document.getElementById('productosTitle');
    const productosTitleText = productosTitle.querySelector('.section-title-text');
    const productosTitleIcon = document.getElementById('productosTitleIcon');
    const productosSubtitle = document.getElementById('productosSubtitle');
    
    if (categoriaSeleccionada) {
        const categoria = cliente.categorias.find(c => c.id === categoriaSeleccionada);
        productosTitleText.textContent = categoria.nombre;
        productosTitle.setAttribute('data-text', 'Nuestros Seguros');
        if (productosTitleIcon) {
            productosTitleIcon.innerHTML = `<i class="${categoria.icono}"></i>`;
            productosTitleIcon.style.display = 'inline-block';
        }
        if (productosSubtitle) {
            productosSubtitle.textContent = `Explora nuestros planes de ${categoria.nombre.toLowerCase()} y encuentra el que mejor se adapte a ti`;
        }
    } else {
        productosTitleText.textContent = 'Todos los Productos';
        productosTitle.setAttribute('data-text', 'Productos');
        if (productosTitleIcon) {
            productosTitleIcon.style.display = 'none';
        }
        if (productosSubtitle) {
            productosSubtitle.textContent = 'Descubre nuestros planes y elige el que mejor se adapte a ti';
        }
    }
    
    if (productosFiltrados.length === 0) {
        productosGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-light);">No hay productos disponibles en esta categoría.</p>';
        return;
    }
    
    productosFiltrados.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.className = 'producto-card fade-in';
        
        // Obtener información de la aseguradora
        const aseguradoraId = producto.aseguradora || 'propia';
        const aseguradora = aseguradoras[aseguradoraId];
        let logoAseguradora = '';
        
        if (aseguradoraId === 'propia') {
            // Si es producto propio, usar el logo del cliente
            logoAseguradora = `<img src="${cliente.logo}" alt="${cliente.nombre}" class="producto-aseguradora-logo">`;
        } else if (aseguradora && aseguradora.logo) {
            // Si tiene logo, mostrarlo
            logoAseguradora = `<img src="${aseguradora.logo}" alt="${aseguradora.nombre}" class="producto-aseguradora-logo">`;
        } else {
            // Si no tiene logo, mostrar el nombre
            logoAseguradora = `<span class="producto-aseguradora-nombre">${aseguradora ? aseguradora.nombre : cliente.nombre}</span>`;
        }
        
        productoCard.innerHTML = `
            <div>
                <div class="producto-header">
                    <h3 class="producto-nombre">${producto.nombre}</h3>
                    <div class="producto-aseguradora">
                        ${logoAseguradora}
                    </div>
                </div>
                <div class="producto-precio">${producto.precio} <span class="precio-mes">/mes</span></div>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <ul class="producto-caracteristicas">
                    ${producto.caracteristicas.map(caracteristica => 
                        `<li>${caracteristica}</li>`
                    ).join('')}
                </ul>
            </div>
            <div class="producto-buttons">
                <button class="btn-contratar" onclick="contratarProducto('${producto.id}')">
                    Contratar
                </button>
                <button class="btn-ver-detalle" onclick="verDetalleProducto('${producto.id}')">
                    Ver detalle
                </button>
            </div>
        `;
        
        productosGrid.appendChild(productoCard);
    });
}

// Actualizar información de la categoría (beneficios y FAQs)
function actualizarInfoCategoria() {
    const cliente = clientes[clienteActual];
    
    // Si no hay categoría seleccionada, mostrar la primera por defecto
    const categoriaId = categoriaSeleccionada || cliente.categorias[0].id;
    const categoria = cliente.categorias.find(c => c.id === categoriaId);
    
    if (!categoria) return;
    
    // Cargar beneficios
    const beneficiosList = document.getElementById('beneficiosList');
    beneficiosList.innerHTML = '';
    categoria.beneficios.forEach(beneficio => {
        const li = document.createElement('li');
        li.textContent = beneficio;
        beneficiosList.appendChild(li);
    });
    
    // Cargar FAQs
    const faqsList = document.getElementById('faqsList');
    faqsList.innerHTML = '';
    categoria.preguntasFrecuentes.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item fade-in';
        faqItem.innerHTML = `
            <div class="faq-pregunta">${faq.pregunta}</div>
            <div class="faq-respuesta">${faq.respuesta}</div>
        `;
        faqsList.appendChild(faqItem);
    });
    
    // Si no había categoría seleccionada, seleccionar la primera visualmente
    if (!categoriaSeleccionada) {
        const primeraCategoria = document.querySelector(`[data-categoria-id="${categoriaId}"]`);
        if (primeraCategoria) {
            primeraCategoria.classList.add('active');
        }
        categoriaSeleccionada = categoriaId;
    }
}

// Cargar portal y formulario de apoyo
function cargarPortalYFormulario() {
    const cliente = clientes[clienteActual];
    
    // Portal
    const portalInfo = document.getElementById('portalInfo');
    const portalText = document.getElementById('portalText');
    const portalLink = document.getElementById('portalLink');
    const portalLinkText = document.getElementById('portalLinkText');
    const portalLogo = document.getElementById('portalLogo');
    
    if (cliente.portal && cliente.portal.mostrar) {
        // Cargar logo del cliente
        if (portalLogo && cliente.logo) {
            portalLogo.src = cliente.logo;
            portalLogo.alt = cliente.nombre;
        }
        
        if (portalText) portalText.textContent = cliente.portal.texto;
        if (portalLink) {
            portalLink.href = cliente.portal.url;
        }
        if (portalLinkText) {
            portalLinkText.textContent = cliente.portal.textoEnlace;
        }
        if (portalInfo) portalInfo.style.display = 'flex';
    } else {
        if (portalInfo) portalInfo.style.display = 'none';
    }
    
    // Formulario de apoyo
    const formularioApoyo = document.getElementById('formularioApoyo');
    const formularioTitulo = document.getElementById('formularioTitulo');
    const companiaSelect = document.getElementById('companiaApoyo');
    const apoyoForm = document.getElementById('apoyoForm');
    
    if (cliente.formularioApoyo && cliente.formularioApoyo.mostrar) {
        if (formularioTitulo) formularioTitulo.textContent = cliente.formularioApoyo.titulo;
        
        // Limpiar y cargar opciones de compañías
        if (companiaSelect) {
            companiaSelect.innerHTML = '<option value="">Seleccione una compañía</option>';
            cliente.formularioApoyo.companias.forEach(compania => {
                const option = document.createElement('option');
                option.value = compania;
                option.textContent = compania;
                companiaSelect.appendChild(option);
            });
        }
        
        if (formularioApoyo) formularioApoyo.style.display = 'block';
    } else {
        if (formularioApoyo) formularioApoyo.style.display = 'none';
    }
}

// Cargar soporte presencial
function cargarSoportePresencial() {
    const cliente = clientes[clienteActual];
    const soporteSection = document.getElementById('soporteSection');
    const soporteTitle = document.getElementById('soporteTitle');
    const soporteGrid = document.getElementById('soporteGrid');
    
    if (!soporteSection || !cliente.soportePresencial) return;
    
    if (cliente.soportePresencial.mostrar && cliente.soportePresencial.aseguradoras.length > 0) {
        // Mostrar la sección
        soporteSection.style.display = 'block';
        
        // Cargar título
        if (soporteTitle) {
            soporteTitle.textContent = cliente.soportePresencial.titulo;
            soporteTitle.setAttribute('data-text', 'Soporte Presencial');
        }
        
        // Limpiar grid
        if (soporteGrid) soporteGrid.innerHTML = '';
        
        // Crear cards para cada aseguradora
        cliente.soportePresencial.aseguradoras.forEach(aseguradoraData => {
            const aseguradora = aseguradoras[aseguradoraData.id];
            if (!aseguradora) return;
            
            const card = document.createElement('div');
            card.className = 'soporte-card fade-in';
            
            // Obtener logo
            let logoHtml = '';
            if (aseguradoraData.id === 'propia') {
                // Si es producto propio, usar el logo del cliente
                logoHtml = `<img src="${cliente.logo}" alt="${cliente.nombre}" class="soporte-logo">`;
            } else if (aseguradora && aseguradora.logo) {
                logoHtml = `<img src="${aseguradora.logo}" alt="${aseguradora.nombre}" class="soporte-logo">`;
            } else {
                logoHtml = `<div class="soporte-logo-text">${aseguradora ? aseguradora.nombre : aseguradoraData.nombre}</div>`;
            }
            
            card.innerHTML = `
                <div class="soporte-card-header">
                    ${logoHtml}
         
                </div>
                <div class="soporte-card-content">
                    <div class="soporte-info-item">
                        <i class="fas fa-map-marker-alt soporte-icon"></i>
                        <div class="soporte-info-text">
                            <span class="soporte-info-label">Oficina de atención:</span>
                            <span class="soporte-info-value">${aseguradoraData.oficina}</span>
                        </div>
                    </div>
                    <div class="soporte-info-item">
                        <i class="fas fa-clock soporte-icon"></i>
                        <div class="soporte-info-text">
                            <span class="soporte-info-label">Horario de atención:</span>
                            <span class="soporte-info-value">${aseguradoraData.horario}</span>
                        </div>
                    </div>
                </div>
            `;
            
            if (soporteGrid) soporteGrid.appendChild(card);
        });
    } else {
        // Ocultar la sección
        if (soporteSection) soporteSection.style.display = 'none';
    }
}

// Cargar información del footer
function cargarFooter() {
    const cliente = clientes[clienteActual];
    const contacto = cliente.contacto;
    
    // Actualizar nombre en el footer
    const footerNombre = document.getElementById('footerNombre');
    footerNombre.textContent = cliente.nombre;
    
    // Actualizar teléfono
    const footerTelefono = document.getElementById('footerTelefono');
    footerTelefono.href = `tel:${contacto.telefono.replace(/\s/g, '')}`;
    footerTelefono.textContent = contacto.telefono;
    
    // Actualizar email
    const footerEmail = document.getElementById('footerEmail');
    footerEmail.href = `mailto:${contacto.email}`;
    footerEmail.textContent = contacto.email;
    
    // Actualizar dirección
    const footerDireccion = document.getElementById('footerDireccion');
    footerDireccion.textContent = contacto.direccion;
    
    // Cargar redes sociales
    const redesSociales = document.getElementById('redesSociales');
    redesSociales.innerHTML = '';
    
    const iconosRedes = {
        facebook: 'fab fa-facebook-f',
        instagram: 'fab fa-instagram',
        linkedin: 'fab fa-linkedin-in',
        twitter: 'fab fa-twitter',
        youtube: 'fab fa-youtube',
        tiktok: 'fab fa-tiktok'
    };
    
    Object.keys(contacto.redesSociales).forEach(red => {
        const url = contacto.redesSociales[red];
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.className = 'red-social-link';
            link.title = red.charAt(0).toUpperCase() + red.slice(1);
            const icono = iconosRedes[red] || 'fas fa-link';
            link.innerHTML = `<i class="${icono}"></i>`;
            redesSociales.appendChild(link);
        }
    });
}

// Función para contratar producto (por ahora no hace nada)
function contratarProducto(productoId) {
    console.log(`Contratar producto: ${productoId}`);
    // Aquí se puede agregar la lógica de contratación en el futuro
    alert(`Función de contratación para el producto ${productoId} - Próximamente disponible`);
}

// Función para ver detalle del producto (por ahora no hace nada)
function verDetalleProducto(productoId) {
    console.log(`Ver detalle producto: ${productoId}`);
    // Aquí se puede agregar la lógica para mostrar detalles del producto en el futuro
}

