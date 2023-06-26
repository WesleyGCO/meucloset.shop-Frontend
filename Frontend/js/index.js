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

