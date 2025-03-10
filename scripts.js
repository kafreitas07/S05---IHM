document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle"); // Botão de menu
  const themeMenu = document.getElementById("theme-menu"); // Menu de seleção de tema
  const themeSelector = document.getElementById("theme-selector"); // Caixa de seleção
  const body = document.body;

  // Verifica se há um tema salvo no localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
      body.classList.add(savedTheme);
      themeSelector.value = savedTheme;  // Atualiza o valor do select conforme o tema salvo
  }

  // Alterna a visibilidade do menu ao clicar no botão de menu
  menuToggle.addEventListener("click", () => {
      // Alterna a visibilidade do menu
      themeMenu.style.display = themeMenu.style.display === "block" ? "none" : "block";
  });

  // Altera o tema conforme a escolha do usuário
  themeSelector.addEventListener("change", () => {
      const selectedTheme = themeSelector.value;
      
      // Remove todas as classes de tema
      body.classList.remove("default-theme", "dark-theme", "blue-theme");
      
      // Adiciona a classe do tema selecionado
      body.classList.add(selectedTheme);
      
      // Salva a escolha do tema no localStorage para persistência
      localStorage.setItem("theme", selectedTheme);
      
      // Fecha o menu de seleção de tema após a escolha
      themeMenu.style.display = "none";
  });
});
