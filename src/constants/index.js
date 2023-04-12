import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    typescript,
    html,
    css,
    reactjs,    
    nodejs,
    mongodb,
    mysql,
    postgres,
    python,
    git,
    figma,   
    consultant,
    webd,
    backd,
    headad,
    estpx,
    sisbibl,
    sisemp,  
    //carrent,
    //jobit,
    //tripguide,  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre Mi",
    },
    {
      id: "work",
      title: "Experiencia Laboral",
    },
    {
      id: "contact",
      title: "Contacto",
    },  
  ];
  
  const services = [
    {
      title: "Financial Consultant",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "head of finance administration",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "My Sql",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "Financial Consultant/Fullstack Developer",
      company_name: "Freelancer",
      icon: consultant,
      iconBg: "#383E56",
      date: "Enero 2023 - Actual ",
      points: [
        "Desarrollar estrategias financieras/Control de Gestión Administrativa (PowerBI, Python, Excel).",
        "Gestionar riesgo de inversión financieras (desarrollando app con maching learning).",
        "Planificar optimización de recursos/financiamientos con productos de mercado de capitales para PYMEs.",
        "Combinar herramientas informáticas y administrativa para para reposicionar a la empresa.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Freelance",
      icon: backd,
      iconBg: "#E6DEDD",
      date: "Febrero 2021 - Actual",
      points: [
        "Diseñar y desarrollar la arquitectura de un sistema de backend para garantizar la escalabilidad y el rendimiento.",
        "Crear, mantener y optimizar códigos de app, bases de datos y su almacenamiento para garantizar la integridad de los información y su fácil recuperación.",
        "Realizar pruebas y depuración para identificar y corregir errores en el código y en el sistema.",
        "Colaborar con otros desarrolladores, o equipos multidisiplinarios, para optimizar el rendimiento del sistema y lograr una fluida experiencia del usuario.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: webd,
      iconBg: "#383E56",
      date: "Jan 2020 - Actual",
      points: [
        "Diseñar e implementar soluciones tecnológicas eficientes y escalables para satisfacer las necesidades de los usuarios y de la empresa.",
        "Trabajar en estrecha colaboración con otros miembros del equipo, incluyendo diseñadores, gerentes de productos y otros desarrolladores, para garantizar la cohesión y la eficiencia del trabajo del equipo..",
        "Asegurar la compatibilidad de la aplicación con diferentes navegadores y dispositivos, para garantizar una experiencia de usuario consistente y de alta calidad.",
        "Realizar revisiones exhaustivas del código para garantizar la calidad, la eficiencia y la legibilidad del código.",
      ],
    },
    {
      title: "Head of finance administration",
      company_name: "Altos de Vistalba S.A.",
      icon: headad,
      iconBg: "#E6DEDD",
      date: "Diciembre 2008- Diciembre 2022",
      points: [
        "Analizar datos financieros y tomar decisiones para financiar proyectos inmobiliarios.",
        "Gestionar riesgos sobre proyecto y presupuesto, optimizando ganancias y mitigando pérdidas.",
        "Planificar y gestionar los presupuestos de desarrollo inmobiliarios.",
        "Liderar y coordinar equipos de trabajo, en ambiente administrativo/financiero complejos y dinámicos.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Soft-Skills:   comunicación efectiva, habilidad de liderazgo, compromiso, resolución de problemas, trabajo en equipo, pensamiento crítico, flexibilidad, adaptación, orientación al detalle, resiliencia, empatía y Actitud positiva frente a objetivos y desafíos .",
   
    },
    {
      testimonial:
        "Financial-Skills:    analizar/interpetar datos financieros-económicos para la toma de decisiones, evaluar de manera crítica la información en escenarios complejos, gestionar riesgos para maximizar rendimientos, diseño de estrategias financieras adaptables a un contexto dinámico, orientación a resultado.",

    },
    {
      testimonial:
        "Hard Skills:  Full-stack (java)-Alura Latam-Oracle(2022), Full-stack (java)-EGG Cooperation (2021), JavaScript, Python, Java (Spring-React-Flask) Udemy (2022-2023), Experto Universitario en PHP-UTN-FRBA (2019), Idoneo de Mercados de Capitales-UTN-FRBA (2016),  ",
  
    },
  ];
  
  const projects = [
    {
      name: "Estimador Precios",
      description:
        "APP basada en Python, Maching Learning, Redes Neuronales, Modelo LSTM, buscan predecir los precios de commodities, monedas,cryptos. Para ayudar a desarrollar estrategias financieras y presupuestos.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Maching Learning",
          color: "green-text-gradient",
        },
        {
          name: "Redes Neuronales",
          color: "pink-text-gradient",
        },
      ],
      image: estpx,
      source_code_link: "https://github.com/wgekko/Python-RedesNeuronales-Predicciones",
    },
    {
      name: "Sistema Biblioteca",
      description:
        "APP que administra un sistema de biblioteca (alta, baja, editar y leer registros), debiendo accedeer mediante un login, y el almacenamiento de los registro es en una base de datos MySQL relacional.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Boot, Spring Security",
          color: "green-text-gradient",
        },
        {
          name: "base de datos, mysql",
          color: "pink-text-gradient",
        },
      ],
      image: sisbibl,
      source_code_link: "https://github.com/wgekko/Proyecto.Java.Spring.Loguin",
    },
    {
      name: "Sistema Empleado",
      description:
        "APP orientada a PYMEs, para llevar el legajo o resgistros de sus empleados o o datos de clientes, con el uso de claves de acceso y otorgando niveles de acceso (alta, baja, editar y leer registros), con Python, la base de datos PostgreSQL y framework Flask.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "html5 CSS",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: sisemp,
      source_code_link: "https://github.com/wgekko/De-Cero-a-Experto-Python-71hs-Creacion-Usuarios",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };