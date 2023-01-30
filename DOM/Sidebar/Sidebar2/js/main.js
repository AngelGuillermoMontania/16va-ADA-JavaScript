window.addEventListener('load', () => {
    const $btnToggleSidebar = document.querySelector(".toggle-btn")
    const $sidebar = document.querySelector(".sidebar")
    const $btnBurguerSidebar = document.querySelector(".burguer-toggle")

    $btnToggleSidebar.addEventListener("click", () => {
        $sidebar.classList.toggle("show-sidebar")
        if($sidebar.classList.contains("show-sidebar")) {
            $btnBurguerSidebar.innerHTML = "X"
        } else {
            $btnBurguerSidebar.innerText = "☰"
        }
    })
})