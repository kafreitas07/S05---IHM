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
  });
  