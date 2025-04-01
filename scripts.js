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
        
        // Lógica para mudar a cor da nota
        let notaCor = '';
        if (evento.nota < 6) {
            notaCor = 'red'; // vermelho para nota menor que 6
        } else if (evento.nota >= 6 && evento.nota < 8) {
            notaCor = 'orange'; // laranja para nota entre 6 e 8
        } else {
            notaCor = 'green'; // verde para nota 8 ou maior
        }

        card.innerHTML = `
            <img src="${evento.image}" alt="${evento.title}">
            <div class="info">
                <h3>${evento.title}</h3>
                <p>${evento.description}</p>
                <small>${evento.date} - ${evento.time} - ${evento.location}</small>
                <div class="lable-nota" style="background-color: ${notaCor};">
                    Nota: <b>${evento.nota}</b>
                </div>
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
