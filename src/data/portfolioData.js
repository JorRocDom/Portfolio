export const portfolioData = {
    hero: {
      // ¡CAMBIA ESTO!
      name: "Jordi Rocha", 
      title: "Desarrollador Full Stack",
      subtitle: "Combinando DAM (Multiplataforma) y DAW (Desarrollo Web) para construir soluciones tecnológicas completas y robustas.",
      // ¡CAMBIA ESTO!
      linkedin: "https://www.linkedin.com/in/tu-usuario-linkedin/",
      github: "https://github.com/tu-usuario-github/",
    },
    about: {
      paragraphs: [
        "Soy un desarrollador en formación apasionado por la tecnología, actualmente inmerso en los ciclos de Desarrollo de Aplicaciones Multiplataforma (DAM) y Desarrollo de Aplicaciones Web (DAW) de forma simultánea. Esta doble titulación me permite adquirir una visión 360º del desarrollo de software, comprendiendo la interacción desde el backend y las bases de datos hasta el frontend web y las aplicaciones nativas.",
        "Mi enfoque se centra en la resolución de problemas de forma eficiente y creativa. Disfruto tanto diseñando una API REST robusta con Spring Boot o Laravel como construyendo una interfaz de usuario intuitiva con Vue.js o desarrollando una aplicación Android nativa. La combinación de ambas titulaciones me proporciona una base sólida para adaptarme a cualquier desafío tecnológico.",
        "Además de mis habilidades técnicas, me considero una persona curiosa, autodidacta y con gran capacidad de trabajo en equipo. Siempre busco aprender nuevas tecnologías y mejorar mis conocimientos para entregar soluciones de alta calidad."
      ]
    },
    skills: {
      // ¡AJUSTA ESTAS HABILIDADES A LAS TUYAS!
      frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "Vue.js", "Vuetify", "React (Básico)"],
      backend: ["Java (Spring Boot)", "PHP (Laravel)", "Node.js (Express)", "RESTful APIs"],
      databases: ["MySQL", "PostgreSQL", "MongoDB", "Oracle SQL"],
      multiplatform: ["Java (JavaFX, Swing)", "Android (Java/Kotlin)", "C# (.NET)"],
      tools: ["Git", "GitHub", "Docker", "Postman", "IntelliJ IDEA", "Visual Studio Code"],
    },
    projects: [
      // ¡CAMBIA ESTOS PROYECTOS POR LOS TUYOS!
      {
        id: 1,
        title: "Sistema de Gestión Integrado (Proyecto Estrella)",
        description: "Desarrollo de un sistema completo de gestión de [Ej. tareas/inventario] con una API REST central y dos clientes. La API fue construida con Spring Boot, el cliente web con Vue.js y la aplicación de escritorio con JavaFX, consumiendo la misma API para demostrar interoperabilidad y un enfoque Full Stack.",
        technologies: ["Java", "Spring Boot", "MySQL", "Vue.js", "JavaFX", "REST API", "Maven"],
        github: "https://github.com/tu-usuario-github/proyecto-estrella",
        demo: "https://demo.tuproyecto.com", // Pon null si no tienes demo
        image: "https://picsum.photos/seed/proyecto1/600/400" // URL de una imagen (usa picsum para probar)
      },
      {
        id: 2,
        title: "Aplicación Web de Recetas",
        description: "Una aplicación web interactiva para buscar, guardar y organizar recetas. Desarrollada con Laravel para el backend y Vue.js para el frontend, incluyendo autenticación de usuarios y una base de datos MySQL.",
        technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "SASS", "API REST"],
        github: "https://github.com/tu-usuario-github/app-recetas",
        demo: "https://recetas.tuproyecto.com",
        image: "https://picsum.photos/seed/proyecto2/600/400"
      },
      {
        id: 3,
        title: "Gestor de Biblioteca de Escritorio",
        description: "Aplicación de escritorio para la gestión de libros, usuarios y préstamos de una biblioteca. Desarrollada en Java con JavaFX para la interfaz gráfica y persistencia de datos con una base de datos Oracle.",
        technologies: ["Java", "JavaFX", "Oracle SQL", "JDBC", "POO"],
        github: "https://github.com/tu-usuario-github/gestor-biblioteca-javafx",
        demo: null, // Si no hay demo online, déjalo como null
        image: "https://picsum.photos/seed/proyecto3/600/400"
      },
    ],
    contact: {
      // ¡CAMBIA ESTO!
      email: "jordirochadomingo2006@gmail.com",
      message: "¡No dudes en contactarme para cualquier consulta o colaboración!",
    },
  };