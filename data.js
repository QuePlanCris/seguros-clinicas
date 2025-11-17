// Configuración de aseguradoras
const aseguradoras = {
  propia: {
    nombre: "Producto Propio",
    logo: ""
  },
  sura: {
    nombre: "Sura",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Seguros_SURA_Logo.svg/2560px-Seguros_SURA_Logo.svg.png"
  },
  help: {
    nombre: "Help",
    logo: "https://lh3.googleusercontent.com/yAa_K15JYvaNWpgAfTzjFpDJiFZ4u4TuPvkOkjGktgXw3ce7XqRJbQpkb0O6YIYZgg6jgvI47rfSXG77SiaANJUZ5sAXEO3hEBQ=s0"
  },
  consorcio: {
    nombre: "Consorcio",
    logo: "https://seguro.consorcio.cl/seguro-rci/pub/media/logo/default/CONSORCIO_LOGO.png"
  }
};

// Configuración de clientes
const clientes = {
  cliente1: {
    nombre: "Clínica MEDS",
    logo: "https://www.meds.cl/wp-content/uploads/Logo-MEDS-2023.svg",
    hero: {
      imagen: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=800&fit=crop",
      titulo: "Clínica MEDS",
      subtitulo: "Protección integral para tu salud y la de tu familia",
      mostrarPrecio: true
    },
    colores: {
      primary: "#486db7",
      secondary: "#2C3E50",
      accent: "#E74C3C",
      background: "#F8F9FA",
      text: "#2C3E50",
      textLight: "#7F8C8D"
    },
    beneficiosUnicos: {
      mostrar: true,
      titulo: "Beneficios que no encontrarás en otros seguros",
      beneficios: [
        {
          icono: "far fa-heart-circle-check",
          texto: "Cobertura en prestaciones de salud mental"
        },
        {
          icono: "far fa-handshake",
          texto: "Sin término de vigencia por edad"
        },
        {
          icono: "far fa-users",
          texto: "Edad de contratación hasta los 79 años y 364 días"
        }
      ]
    },
    categorias: [
      {
        id: "oncologicos",
        nombre: "Oncológicos",
        icono: "fas fa-stethoscope",
        imagen: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop",
        descripcion: "Cobertura completa para tratamientos oncológicos con los mejores especialistas",
        beneficios: [
          "Cobertura completa para tratamientos oncológicos",
          "Acceso a los mejores centros médicos especializados",
          "Segunda opinión médica incluida",
          "Apoyo psicológico durante el tratamiento",
          "Sin períodos de espera para diagnósticos"
        ],
        preguntasFrecuentes: [
          {
            pregunta: "¿Qué tratamientos están cubiertos?",
            respuesta: "Cubrimos quimioterapia, radioterapia, cirugías oncológicas, medicamentos especializados y terapias de apoyo."
          },
          {
            pregunta: "¿Hay límite de edad para contratar?",
            respuesta: "El seguro puede contratarse hasta los 65 años, con renovación garantizada."
          },
          {
            pregunta: "¿Cubre enfermedades preexistentes?",
            respuesta: "Sí, después de un período de carencia de 12 meses, cubrimos condiciones preexistentes."
          }
        ]
      },
      {
        id: "dentales",
        nombre: "Dentales",
        icono: "fas fa-tooth",
        imagen: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=600&fit=crop",
        descripcion: "Cuidado dental integral para toda la familia",
        beneficios: [
          "Limpiezas dentales gratuitas cada 6 meses",
          "Descuentos en tratamientos especializados",
          "Ortodoncia y prótesis incluidas",
          "Emergencias dentales 24/7",
          "Red de dentistas certificados"
        ],
        preguntasFrecuentes: [
          {
            pregunta: "¿Cuántas consultas incluye al año?",
            respuesta: "Incluye 2 limpiezas anuales y consultas ilimitadas para emergencias."
          },
          {
            pregunta: "¿Cubre ortodoncia?",
            respuesta: "Sí, cubre hasta el 70% del costo de ortodoncia con un tope anual."
          },
          {
            pregunta: "¿Hay copagos?",
            respuesta: "Las limpiezas son gratuitas. Otros tratamientos tienen copagos del 20-30% según el plan."
          }
        ]
      },
      {
        id: "complementarios",
        nombre: "Complementarios",
        icono: "fas fa-plus-circle",
        imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop",
        descripcion: "Complementa tu seguro principal con cobertura adicional",
        beneficios: [
          "Complementa tu seguro de salud principal",
          "Cobertura de medicamentos ambulatorios",
          "Exámenes preventivos anuales",
          "Telemedicina incluida",
          "Descuentos en farmacias afiliadas"
        ],
        preguntasFrecuentes: [
          {
            pregunta: "¿Puedo tenerlo junto con otro seguro?",
            respuesta: "Sí, está diseñado para complementar tu seguro principal y cubrir gastos adicionales."
          },
          {
            pregunta: "¿Qué medicamentos cubre?",
            respuesta: "Cubre medicamentos ambulatorios con un copago del 30%, hasta un tope mensual."
          },
          {
            pregunta: "¿Incluye hospitalización?",
            respuesta: "No, este seguro complementa la cobertura ambulatoria. La hospitalización debe estar en tu seguro principal."
          }
        ]
      }
    ],
    productos: [
      {
        id: "onco-basico",
        categoria: "oncologicos",
        nombre: "Plan Oncológico Básico",
        precio: "$45.000",
        descripcion: "Cobertura esencial para tratamientos oncológicos",
        caracteristicas: ["Quimioterapia", "Radioterapia", "Cirugías", "Medicamentos básicos"],
        aseguradora: "sura"
      },
      {
        id: "onco-premium",
        categoria: "oncologicos",
        nombre: "Plan Oncológico Premium",
        precio: "$85.000",
        descripcion: "Cobertura completa con beneficios adicionales",
        caracteristicas: ["Todo lo del plan básico", "Segunda opinión médica", "Apoyo psicológico", "Medicamentos premium", "Centros internacionales"],
        aseguradora: "help"
      },
      {
        id: "onco-meds",
        categoria: "oncologicos",
        nombre: "Plan Oncológico MEDS",
        precio: "$55.000",
        descripcion: "Cobertura oncológica integral con la red MEDS",
        caracteristicas: ["Quimioterapia y radioterapia", "Cirugías oncológicas", "Medicamentos especializados", "Red de especialistas MEDS", "Segunda opinión médica"],
        aseguradora: "propia"
      },
      {
        id: "dental-basico",
        categoria: "dentales",
        nombre: "Plan Dental Básico",
        precio: "$25.000",
        descripcion: "Cuidado dental esencial para toda la familia",
        caracteristicas: ["Limpiezas semestrales", "Consultas ilimitadas", "Emergencias 24/7", "Descuentos en tratamientos"],
        aseguradora: "consorcio"
      },
      {
        id: "dental-premium",
        categoria: "dentales",
        nombre: "Plan Dental Premium",
        precio: "$45.000",
        descripcion: "Cobertura dental completa con ortodoncia",
        caracteristicas: ["Todo lo del plan básico", "Ortodoncia incluida", "Prótesis dentales", "Blanqueamiento", "Implantes con descuento"],
        aseguradora: "sura"
      },
      {
        id: "dental-meds",
        categoria: "dentales",
        nombre: "Plan Dental MEDS",
        precio: "$30.000",
        descripcion: "Cuidado dental completo con la red MEDS",
        caracteristicas: ["Limpiezas semestrales gratuitas", "Consultas ilimitadas", "Emergencias 24/7", "Ortodoncia con descuento", "Red de dentistas MEDS"],
        aseguradora: "propia"
      },
      {
        id: "complementario-basico",
        categoria: "complementarios",
        nombre: "Plan Complementario Básico",
        precio: "$15.000",
        descripcion: "Complemento ideal para tu seguro principal",
        caracteristicas: ["Medicamentos ambulatorios", "Exámenes preventivos", "Telemedicina", "Descuentos farmacias"],
        aseguradora: "help"
      },
      {
        id: "complementario-premium",
        categoria: "complementarios",
        nombre: "Plan Complementario Premium",
        precio: "$30.000",
        descripcion: "Cobertura complementaria ampliada",
        caracteristicas: ["Todo lo del plan básico", "Mayor cobertura medicamentos", "Exámenes avanzados", "Consultas especialistas", "Reembolsos rápidos"],
        aseguradora: "consorcio"
      },
      {
        id: "complementario-meds",
        categoria: "complementarios",
        nombre: "Plan Complementario MEDS",
        precio: "$20.000",
        descripcion: "Complemento ideal con beneficios MEDS",
        caracteristicas: ["Medicamentos ambulatorios", "Exámenes preventivos anuales", "Telemedicina incluida", "Descuentos en farmacias MEDS", "Red de atención MEDS"],
        aseguradora: "propia"
      }
    ],
    contacto: {
      telefono: "+56 2 2345 6789",
      email: "contacto@meds.cl",
      direccion: "Av. Providencia 1234, Oficina 501, Santiago, Chile",
      redesSociales: {
        facebook: "https://facebook.com/meds",
        instagram: "https://instagram.com/meds",
        linkedin: "https://linkedin.com/company/meds",
        twitter: "https://twitter.com/meds"
      }
    },
    portal: {
      texto: "Administra tus seguros y convenios en línea en tu portal de asegurado/beneficiario.",
      url: "https://portal.meds.cl/",
      textoEnlace: "PORTAL ASEGURADO",
      mostrar: true
    },
    formularioApoyo: {
      titulo: "Ya tengo un seguro, necesito apoyo",
      mostrar: true,
      companias: ["SURA", "Help", "Consorcio", "Producto Propio"]
    },
    soportePresencial: {
      mostrar: true,
      titulo: "Soporte presencial en MEDS",
      aseguradoras: [
        {
          id: "propia",
          nombre: "Convenios propio",
          oficina: "Oficina Central, Piso 3",
          horario: "lunes a viernes, de 9:00 a 18:00 horas"
        },
        {
          id: "sura",
          nombre: "Sura",
          oficina: "Oficina Central, Piso 3",
          horario: "lunes a viernes, de 9:00 a 18:00 horas"
        },
        {
          id: "help",
          nombre: "Help",
          oficina: "Oficina Central, Piso 3",
          horario: "lunes a viernes, de 9:00 a 18:00 horas"
        },
        {
          id: "consorcio",
          nombre: "Consorcio",
          oficina: "Oficina Central, Piso 3",
          horario: "lunes a viernes, de 9:00 a 18:00 horas"
        }
      ]
    }
  },
  cliente2: {
    nombre: "Clínica U Andes",
    logo: "https://www.clinicauandes.cl/assets-new-home/images/logo-header.svg",
    hero: {
      imagen: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=800&fit=crop",
      titulo: "Clínica Universidad de los Andes.",
      subtitulo: "Convenios y Seguros Clínicas U Andes",
      mostrarPrecio: true,
      precioPersonalizado: "$3.500"
    },
    colores: {
      primary: "#7faf21",
      secondary: "#2C3E50",
      accent: "#E67E22",
      background: "#F8F9FA",
      text: "#2C3E50",
      textLight: "#6C757D"
    },
    beneficiosUnicos: {
      mostrar: true,
      titulo: "Beneficios que no encontrarás en otros seguros",
      beneficios: [
        {
          icono: "far fa-heart-circle-check",
          texto: "Cobertura en prestaciones de salud mental"
        },
        {
          icono: "far fa-handshake",
          texto: "Sin término de vigencia por edad"
        },
        {
          icono: "far fa-users",
          texto: "Edad de contratación hasta los 79 años y 364 días"
        }
      ]
    },
    categorias: [
      {
        id: "hospitalizacion",
        nombre: "Hospitalización",
        icono: "fas fa-hospital",
        imagen: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop",
        descripcion: "Cobertura completa para hospitalizaciones y procedimientos quirúrgicos",
        beneficios: [
          "Cobertura de hospitalización sin límite de días",
          "Cirugías ambulatorias y de mayor complejidad",
          "UCI y cuidados intensivos incluidos",
          "Médicos especialistas durante la hospitalización",
          "Sin períodos de espera para cirugías programadas"
        ],
        preguntasFrecuentes: [
          {
            pregunta: "¿Qué incluye la cobertura de hospitalización?",
            respuesta: "Incluye habitación, alimentación, medicamentos intrahospitalarios, honorarios médicos y procedimientos realizados durante la estadía."
          },
          {
            pregunta: "¿Hay límite de días de hospitalización?",
            respuesta: "No, no hay límite de días. Cubrimos toda la estadía necesaria según indicación médica."
          },
          {
            pregunta: "¿Cubre cirugías ambulatorias?",
            respuesta: "Sí, cubrimos cirugías ambulatorias y de mayor complejidad, incluyendo pre y post operatorio."
          }
        ]
      },
      {
        id: "especialidades",
        nombre: "Especialidades",
        icono: "fas fa-user-md",
        imagen: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop",
        descripcion: "Acceso a especialistas médicos y tratamientos avanzados",
        beneficios: [
          "Consultas con más de 20 especialidades médicas",
          "Exámenes de diagnóstico avanzados",
          "Tratamientos especializados incluidos",
          "Segunda opinión médica sin costo",
          "Telemedicina con especialistas"
        ],
        preguntasFrecuentes: [
          {
            pregunta: "¿Qué especialidades están cubiertas?",
            respuesta: "Cardiología, neurología, dermatología, oftalmología, traumatología, ginecología, pediatría y más de 20 especialidades."
          },
          {
            pregunta: "¿Necesito autorización para ver especialistas?",
            respuesta: "No, puedes agendar directamente con cualquier especialista de nuestra red sin autorización previa."
          },
          {
            pregunta: "¿Incluye exámenes de diagnóstico?",
            respuesta: "Sí, incluye resonancias, tomografías, ecografías y otros exámenes de diagnóstico avanzado con copago reducido."
          }
        ]
      },
      {
        id: "complementarios",
        nombre: "Complementarios",
        icono: "fas fa-plus-circle",
        imagen: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop",
        descripcion: "Complementa tu seguro principal con cobertura adicional",
        beneficios: [
          "Complementa tu seguro de salud principal",
          "Cobertura de medicamentos ambulatorios",
          "Exámenes preventivos anuales",
          "Telemedicina incluida",
          "Descuentos en farmacias afiliadas"
        ],
        preguntasFrecuentes: [
          {
            pregunta: "¿Puedo tenerlo junto con otro seguro?",
            respuesta: "Sí, está diseñado para complementar tu seguro principal y cubrir gastos adicionales."
          },
          {
            pregunta: "¿Qué medicamentos cubre?",
            respuesta: "Cubre medicamentos ambulatorios con un copago del 30%, hasta un tope mensual."
          },
          {
            pregunta: "¿Incluye hospitalización?",
            respuesta: "No, este seguro complementa la cobertura ambulatoria. La hospitalización debe estar en tu seguro principal."
          }
        ]
      }
    ],
    productos: [
      {
        id: "hospital-basico",
        categoria: "hospitalizacion",
        nombre: "Plan Hospitalización Básico",
        precio: "$65.000",
        descripcion: "Cobertura esencial para hospitalizaciones y cirugías",
        caracteristicas: ["Hospitalización sin límite de días", "Cirugías ambulatorias", "UCI básica", "Médicos especialistas"],
        aseguradora: "propia"
      },
      {
        id: "hospital-premium",
        categoria: "hospitalizacion",
        nombre: "Plan Hospitalización Premium",
        precio: "$120.000",
        descripcion: "Cobertura completa para hospitalizaciones y cirugías de alta complejidad",
        caracteristicas: ["Todo el plan básico", "Cirugías de alta complejidad", "UCI avanzada", "Segunda opinión quirúrgica", "Centros internacionales"],
        aseguradora: "sura"
      },
      {
        id: "especialidades-basico",
        categoria: "especialidades",
        nombre: "Plan Especialidades Básico",
        precio: "$35.000",
        descripcion: "Acceso a especialistas médicos y tratamientos",
        caracteristicas: ["20+ especialidades médicas", "Consultas especializadas", "Exámenes básicos", "Telemedicina"],
        aseguradora: "propia"
      },
      {
        id: "especialidades-premium",
        categoria: "especialidades",
        nombre: "Plan Especialidades Premium",
        precio: "$70.000",
        descripcion: "Acceso completo a especialistas y diagnóstico avanzado",
        caracteristicas: ["Todo el plan básico", "Exámenes avanzados incluidos", "Segunda opinión médica", "Tratamientos especializados", "Sin límite de consultas"],
        aseguradora: "sura"
      },
      {
        id: "complementario-consorcio",
        categoria: "complementarios",
        nombre: "Seguros Complementario",
        precio: "$25.000",
        descripcion: "Cobertura complementaria para medicamentos y exámenes preventivos",
        caracteristicas: ["Medicamentos ambulatorios", "Exámenes preventivos anuales", "Telemedicina incluida", "Descuentos en farmacias"],
        aseguradora: "consorcio"
      }
    ],
    contacto: {
      telefono: "+56 2 2618 1000",
      email: "contacto@clinica.uandes.cl",
      direccion: "Av. San Carlos de Apoquindo 2200, Las Condes, Santiago, Chile",
      redesSociales: {
        facebook: "https://facebook.com/clinicauandes",
        instagram: "https://instagram.com/clinicauandes",
        linkedin: "https://linkedin.com/company/clinica-u-andes",
        twitter: "https://twitter.com/clinicauandes"
      }
    },
    portal: {
      texto: "Administra tus seguros y convenios en línea en tu portal de asegurado/beneficiario.",
      url: "https://clinicauandes.portalclientes.cl/",
      textoEnlace: "PORTAL ASEGURADO",
      mostrar: true
    },
    formularioApoyo: {
      titulo: "Ya tengo un seguro, necesito apoyo",
      mostrar: true,
      companias: ["SURA", "Help", "Propio"]
    },
    soportePresencial: {
      mostrar: true,
      titulo: "Soporte presencial en la clínica U Andes",
      aseguradoras: [
        {
          id: "propia",
          nombre: "Convenios propio",
          oficina: "Piso -1, Edificio C",
          horario: "lunes a viernes, de 8:30 a 17:30 horas"
        },
        {
          id: "sura",
          nombre: "Sura",
          oficina: "Piso -1, Edificio C",
          horario: "lunes a viernes, de 8:30 a 17:30 horas"
        },
        {
          id: "help",
          nombre: "Help",
          oficina: "Piso -1, Edificio C",
          horario: "lunes a viernes, de 8:30 a 17:30 horas"
        },
        {
          id: "consorcio",
          nombre: "Consorcio",
          oficina: "Piso -1, Edificio C",
          horario: "lunes a viernes, de 8:30 a 17:30 horas"
        }
      ]
    }
  }
};

// Cliente actual (se puede cambiar dinámicamente)
let clienteActual = 'cliente2';

