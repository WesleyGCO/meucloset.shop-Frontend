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




document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.getElementById('tamanho-dropdown');
    var button = document.getElementById('tamanho-btn');
    var tamanhoSelecionado = 'P'; // Valor padrão

    function updateButtonValue(newValue) {
        tamanhoSelecionado = newValue;
        button.querySelector('span').textContent = tamanhoSelecionado;
    }

    var links = dropdown.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();
            var newValue = this.getAttribute('data-value');
            updateButtonValue(newValue);
            dropdown.style.display = 'none';
        });
    }

    updateButtonValue(tamanhoSelecionado);  
});


document.addEventListener('DOMContentLoaded', function () {
    var decrementButton = document.getElementById('decrement');
    var incrementButton = document.getElementById('increment');
    var quantityElement = document.querySelector('.quantity');
    var totalPriceElement = document.getElementById('total-price');

    var quantity = 1;
    var pricePerUnit = 119.90;

    function updateQuantityAndPrice() {
        quantityElement.textContent = quantity;
        var totalPrice = (quantity * pricePerUnit).toFixed(2); // Duas casas decimais
        totalPriceElement.textContent = totalPrice;
    }

    // Evento de clique no botão de decremento
    decrementButton.addEventListener('click', function () {
        if (quantity > 1) {
            quantity--;
            updateQuantityAndPrice();
        }
    });

    // Evento de clique no botão de incremento
    incrementButton.addEventListener('click', function () {
        quantity++;
        updateQuantityAndPrice();
    });

    // Atualize o valor inicial
    updateQuantityAndPrice();
});

