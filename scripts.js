document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const themeMenu = document.getElementById("theme-menu");
    const themeSelector = document.getElementById("theme-selector");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeSelector.value = savedTheme;
    }

    menuToggle.addEventListener("click", () => {
        themeMenu.style.display = themeMenu.style.display === "block" ? "none" : "block";
    });

    themeSelector.addEventListener("change", () => {
        const selectedTheme = themeSelector.value;
        body.classList.remove("default-theme", "dark-theme", "blue-theme");
        body.classList.add(selectedTheme);
        localStorage.setItem("theme", selectedTheme);
        themeMenu.style.display = "none";
    });

    const eventos = [
        {
            id: 1,
            title: 'Semana do Software 2025',
            date: '12/05',
            time: '10:00',
            location: 'Salão de Eventos',
            type: 'tech',
            description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400',
            nota: 9
        },
        {
            id: 2,
            title: 'Workshop de IoT',
            date: '12/01',
            time: '08:00',
            location: 'Laboratório CS&I',
            type: 'tech',
            description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400',
            nota: 5
        },
        {
            id: 3,
            title: 'Festa dos Alunos 2025',
            date: '18/05',
            time: '19:00',
            location: 'Área Esportiva do Inatel',
            type: 'cultural',
            description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
            image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400',
            nota: 7
        },
        {
            id: 4,
            title: 'Feira de Oportunidades',
            date: '04/05',
            time: '10:00',
            location: 'Salão de Eventos',
            type: 'academic',
            description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400',
            nota: 8
        }
    ];

    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    eventos.forEach(evento => {
        const card = document.createElement('div');
        card.classList.add('card');
    
        let notaCor = '';
        if (evento.nota < 6) {
            notaCor = 'red';
        } else if (evento.nota >= 6 && evento.nota < 8) {
            notaCor = 'orange';
        } else {
            notaCor = 'green';
        }
    
        card.innerHTML = `
    <img src="${evento.image}" alt="${evento.title}">
    <div class="info">
        <div class="titulo-nota">
            <h3 class="titulo-evento">${evento.title}</h3>
        </div>
        <p>${evento.description}</p>
        <small>${evento.date} - ${evento.time} - ${evento.location}</small>
    </div>
`;

        carousel.appendChild(card);
    });
    
    

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + eventos.length) % eventos.length;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % eventos.length;
        updateCarousel();
    });

    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % eventos.length;
        updateCarousel();
    }, 5000);

    carousel.addEventListener('mouseover', () => {
        clearInterval(autoSlide);
    });

    carousel.addEventListener('mouseout', () => {
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % eventos.length;
            updateCarousel();
        }, 5000);
    });
});
const aulas = [
    {
        id: 1,
        disciplina: "S05 - Interface Homem-máquina",
        data: "ter",
        horario: "10:00",
        local: "P1-S17",
        prova_alert: false,
        prova: "12/05",
        frequencia: "10/25",
        nota: "9"
    },
    {
        id: 2,
        disciplina: "E01 - Circuitos Elétricos em Corrente Contínua",
        data: "ter",
        horario: "10:00",
        local: "P1-S17",
        prova_alert: true,
        prova: "12/05",
        frequencia: "10/25",
        nota: "5"
    },
    {
        id: 3,
        disciplina: "M02 - Álgebra e Geometria Analítica",
        data: "ter",
        horario: "10:00",
        local: "P1-S17",
        prova_alert: true,
        prova: "12/05",
        frequencia: "10/25",
        nota: "7"
    }
];

const aulasContainer = document.getElementById("aulas-container");

aulas.forEach((aula) => {
    const aulaDiv = document.createElement("div");
    aulaDiv.classList.add("aulas");

    let notaCor = '';
    const nota = parseFloat(aula.nota);
    if (nota < 6) notaCor = 'red';
    else if (nota >= 6 && nota < 8) notaCor = 'orange';
    else notaCor = 'green';

    aulaDiv.innerHTML = `
        <div class="titulo-nota">
            <h3 class="titulo-evento">${aula.disciplina}</h3>
            <div class="lable-nota" style="background-color: ${notaCor};">
                Nota: <b>${aula.nota}</b>
            </div>
        </div>
        <p><span class="icon">schedule</span> ${aula.data} - ${aula.horario} (${aula.local})</p>
        <p><span class="icon">assignment</span> Frequência: ${aula.frequencia}</p>
        ${aula.prova_alert ? `<p><span class="icon">warning</span> Prova em ${aula.prova}</p>` : ""}
    `;

    aulasContainer.appendChild(aulaDiv);
});
