const cursos = [
  // Nivel 1
  { nivel: 1, nombre: "Globalización y Realidad Nacional", creditos: 3 },
  { nivel: 1, nombre: "Lenguaje y Comunicación I", creditos: 5 },
  { nivel: 1, nombre: "Metodologías de Investigación", creditos: 3 },
  { nivel: 1, nombre: "Desarrollo Personal y Social", creditos: 3 },
  { nivel: 1, nombre: "Fundamentos de Matemática", creditos: 5 },
  { nivel: 1, nombre: "Ética Cívica", creditos: 1 },

  // Nivel 2
  { nivel: 2, nombre: "Economía y Empresa", creditos: 3 },
  { nivel: 2, nombre: "Lenguaje y Comunicación II", creditos: 3, requisitos: ["Lenguaje y Comunicación I"] },
  { nivel: 2, nombre: "Procesos Sociales y Políticos", creditos: 3 },
  { nivel: 2, nombre: "Temas de Filosofía", creditos: 3 },
  { nivel: 2, nombre: "Literatura y Sociedad", creditos: 3, requisitos: ["Lenguaje y Comunicación I"] },
  { nivel: 2, nombre: "Arte y Cultura", creditos: 5 },

  // Nivel 3
  { nivel: 3, nombre: "Problemática Nacional", creditos: 3, requisitos: ["Procesos Sociales y Políticos"] },
  { nivel: 3, nombre: "Expresión Escrita", creditos: 3, requisitos: ["Lenguaje y Comunicación II"] },
  { nivel: 3, nombre: "Conducta Social", creditos: 4 },
  { nivel: 3, nombre: "Procesos Cognitivos Básicos", creditos: 4 },
  { nivel: 3, nombre: "Filosofía de la Ciencia", creditos: 3, requisitos: ["Temas de Filosofía"] },
  { nivel: 3, nombre: "Psicobiología Humana I", creditos: 4 },
  // Nivel 4
  { nivel: 4, nombre: "Procesos Cognitivos Superiores", creditos: 4, requisitos: ["Procesos Cognitivos Básicos"] },
  { nivel: 4, nombre: "Desarrollo Humano I", creditos: 3, requisitos: ["Procesos Cognitivos Básicos"] },
  { nivel: 4, nombre: "Psicología de la Personalidad", creditos: 4, requisitos: ["Psicobiología Humana I"] },
  { nivel: 4, nombre: "Psicobiología Humana II", creditos: 4, requisitos: ["Psicobiología Humana I"] },
  { nivel: 4, nombre: "Sexualidad Humana", creditos: 3, requisitos: ["Psicobiología Humana I"] },
  { nivel: 4, nombre: "Historia y Sistemas Psicológicos", creditos: 4, requisitos: ["Filosofía de la Ciencia"] },

  // Nivel 5
  { nivel: 5, nombre: "Psicología del Aprendizaje", creditos: 4, requisitos: ["Procesos Cognitivos Superiores"] },
  { nivel: 5, nombre: "Desarrollo Humano II", creditos: 3, requisitos: ["Desarrollo Humano I"] },
  { nivel: 5, nombre: "Estadística Aplicada a la Psicología", creditos: 4 },
  { nivel: 5, nombre: "Técnicas de Entrevista y Observación", creditos: 4, requisitos: ["Psicología de la Personalidad"] },
  { nivel: 5, nombre: "Psicología de la Salud", creditos: 3, requisitos: ["Conducta Social"] },
  { nivel: 5, nombre: "Técnicas de Grupos", creditos: 4, requisitos: ["Conducta Social"] },

  // Nivel 6
  { nivel: 6, nombre: "Evaluación Psicométrica de Procesos Cognitivos", creditos: 4, requisitos: ["Técnicas de Entrevista y Observación"] },
  { nivel: 6, nombre: "Metodología de la Investigación Cuantitativa", creditos: 4, requisitos: ["Estadística Aplicada a la Psicología"] },
  { nivel: 6, nombre: "Psicopatología", creditos: 4, requisitos: ["Psicología de la Salud", "Psicología de la Personalidad", "Sexualidad Humana"] },
  { nivel: 6, nombre: "Comportamiento Organizacional I", creditos: 3, requisitos: ["Técnicas de Grupos"] },
  { nivel: 6, nombre: "Epistemología de la Psicología", creditos: 3, requisitos: ["Historia y Sistemas Psicológicos"] },

  // Nivel 7
  { nivel: 7, nombre: "Psicología Educativa", creditos: 4, requisitos: ["Psicología del Aprendizaje", "Desarrollo Humano II"] },
  { nivel: 7, nombre: "Evaluación Psicométrica de la Personalidad", creditos: 4, requisitos: ["Evaluación Psicométrica de Procesos Cognitivos"] },
  { nivel: 7, nombre: "Metodología de la Investigación Cualitativa", creditos: 4, requisitos: ["Metodología de la Investigación Cuantitativa"] },
  { nivel: 7, nombre: "Evaluación Proyectiva de la Personalidad", creditos: 4, requisitos: ["Psicopatología"] },
  { nivel: 7, nombre: "Comportamiento Organizacional II", creditos: 3, requisitos: ["Comportamiento Organizacional I"] },

  // Nivel 8
  { nivel: 8, nombre: "Evaluación Psicopedagógica", creditos: 4, requisitos: ["Psicología Educativa"] },
  { nivel: 8, nombre: "Diseño y Construcción de Instrumentos Psicológicos", creditos: 4, requisitos: ["Evaluación Psicométrica de la Personalidad"] },
  { nivel: 8, nombre: "Introducción a la Psicoterapia I", creditos: 4, requisitos: ["Evaluación Proyectiva de la Personalidad"] },
  { nivel: 8, nombre: "Psicología Comunitaria", creditos: 3, requisitos: ["Técnicas de Grupos"] },
  { nivel: 8, nombre: "Procesos de Recursos Humanos y Ciclo de Vida del Colaborador", creditos: 3, requisitos: ["Comportamiento Organizacional II"] },

  // Nivel 9
  { nivel: 9, nombre: "Psicología Instruccional", creditos: 4, requisitos: ["Evaluación Psicopedagógica"] },
  { nivel: 9, nombre: "Diagnóstico e Informe Psicológico", creditos: 4, requisitos: ["Evaluación Proyectiva de la Personalidad", "Evaluación Psicométrica de la Personalidad"] },
  { nivel: 9, nombre: "Introducción a la Psicoterapia II", creditos: 4, requisitos: ["Introducción a la Psicoterapia I"] },
  { nivel: 9, nombre: "Estrategias y Programas de Intervención en Problemas Psicosociales", creditos: 3, requisitos: ["Psicología Comunitaria"] },
  { nivel: 9, nombre: "Capacitación y Desarrollo del Talento", creditos: 3, requisitos: ["Procesos de Recursos Humanos y Ciclo de Vida del Colaborador"] },

  // Nivel 10
  { nivel: 10, nombre: "Orientación Vocacional y Ocupacional", creditos: 4, requisitos: ["Psicología Instruccional"] },
  { nivel: 10, nombre: "Psicología de la Excepcionalidad", creditos: 4, requisitos: ["Diagnóstico e Informe Psicológico"] },
  { nivel: 10, nombre: "Ética Profesional", creditos: 3, requisitos: ["Epistemología de la Psicología"] },
  { nivel: 10, nombre: "Diseño y Evaluación de Proyectos", creditos: 3, requisitos: ["Diseño y Construcción de Instrumentos Psicológicos"] },
  { nivel: 10, nombre: "Consejería Psicológica", creditos: 3, requisitos: ["Diagnóstico e Informe Psicológico"] },
  { nivel: 10, nombre: "Diagnóstico de Cultura y Clima Organizacional", creditos: 3, requisitos: ["Capacitación y Desarrollo del Talento"] },

  // Nivel 11
  { nivel: 11, nombre: "Seminario de Investigación I", creditos: 4, requisitos: ["Diseño y Evaluación de Proyectos"] },
  { nivel: 11, nombre: "Internado I", creditos: 4 },
  { nivel: 11, nombre: "Temas Actuales en Psicología I", creditos: 4 },

  // Nivel 12
  { nivel: 12, nombre: "Seminario de Investigación II", creditos: 4, requisitos: ["Seminario de Investigación I"] },
  { nivel: 12, nombre: "Internado II", creditos: 4, requisitos: ["Internado I"] },
  { nivel: 12, nombre: "Temas Actuales en Psicología II", creditos: 4, requisitos: ["Temas Actuales en Psicología I"] }
];

const cursosCompletados = JSON.parse(localStorage.getItem("cursosCompletados") || "[]");

function crearCurso(curso) {
  const div = document.createElement("div");
  div.classList.add("curso");

  const completado = cursosCompletados.includes(curso.nombre);
  const desbloqueado = !curso.requisitos || curso.requisitos.every(r => cursosCompletados.includes(r));

  if (completado) {
    div.classList.add("completado");
  } else if (desbloqueado) {
    div.classList.add("desbloqueado");
  } else {
    div.classList.add("bloqueado");
  }

  div.textContent = `${curso.nombre} (${curso.creditos} créditos)`;

  if (desbloqueado) {
    div.addEventListener("click", () => {
      if (!completado) {
        cursosCompletados.push(curso.nombre);
      } else {
        const index = cursosCompletados.indexOf(curso.nombre);
        cursosCompletados.splice(index, 1);
      }
      localStorage.setItem("cursosCompletados", JSON.stringify(cursosCompletados));
      location.reload();
    });
  }

  return div;
}

function mostrarCursos() {
  const contenedor = document.getElementById("contenedor-malla");
  contenedor.innerHTML = "";

  const niveles = [...new Set(cursos.map(c => c.nivel))];

  niveles.forEach(nivel => {
    const nivelCursos = cursos.filter(c => c.nivel === nivel);
    const divNivel = document.createElement("div");
    divNivel.classList.add("nivel");

    const titulo = document.createElement("h2");
    titulo.textContent = `Nivel ${nivel}`;
    divNivel.appendChild(titulo);

    nivelCursos.forEach(curso => {
      divNivel.appendChild(crearCurso(curso));
    });

    contenedor.appendChild(divNivel);
  });

  const porcentaje = Math.round((cursosCompletados.length / cursos.length) * 100);
  document.getElementById("porcentaje").textContent = `${porcentaje}%`;
}

mostrarCursos();
