document.addEventListener("DOMContentLoaded", function () {
    var sidebar = document.getElementById("sidebar");
    var pageContainer = document.getElementById("pageContainer");
    var pageOverlay = document.getElementById("pageOverlay");

    function toggleSidebar() {
        sidebar.classList.toggle("open");
        pageContainer.classList.toggle("blur");
    }

    function closeSidebar() {
        sidebar.classList.remove("open");
        pageContainer.classList.remove("blur");
    }

    document.getElementById("menuIcon").addEventListener("click", toggleSidebar);
    pageOverlay.addEventListener("click", closeSidebar);
});


document.addEventListener("DOMContentLoaded", function(){
    var tela_login = document.getElementById("tela_login");
    var pageContainer = document.getElementById("pageContainer");
    var pageOverlay = document.getElementById("pageOverlay");
    
    function toggleTelaLogin(){
        tela_login.classList.toggle("open");
        pageContainer.classList.toggle("blur");
    }
    
    function closeTelaLogin() {
        tela_login.classList.remove("open");
        pageContainer.classList.remove("blur");
    }

    document.getElementById("botao_login").addEventListener("click", toggleTelaLogin);
    pageOverlay.addEventListener("click", closeTelaLogin);
});