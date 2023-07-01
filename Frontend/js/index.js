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

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

function mascaraMoeda(campo, evento) {
    var tecla = (!evento) ? window.event.keyCode : evento.which;
    var valor = campo.value.replace(/[^\d]+/gi, '').reverse();
    var resultado = "";
    var mascara = "##.###.###,##".reverse();
    for (var x = 0, y = 0; x < mascara.length && y < valor.length;) {
        if (mascara.charAt(x) != '#') {
            resultado += mascara.charAt(x);
            x++;
        } else {
            resultado += valor.charAt(y);
            y++;
            x++;
        }
    }
    campo.value = resultado.reverse();
}



/*Slider dos produtos da tela inicial*/ 

const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");
const sliderContainer = document.querySelector(".slider-container");

prevButton.addEventListener("click", () => {
    sliderContainer.style.transform = "translateX(-100%)";
});

nextButton.addEventListener("click", () => {
    sliderContainer.style.transform = "translateX(100%)";
});