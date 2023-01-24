
window.addEventListener("load", () => {
    const $btnToggleSidebar = document.querySelector('.toggle-btn');
    const $sidebar = document.querySelector('.sidebar')
    /* const $btnBurguerToggle = document.querySelector('.burguer-toggle') */

    $btnToggleSidebar.addEventListener('click', function (e) {
      $sidebar.classList.toggle('show-sidebar');
      /* if($sidebar.classList.contains("show-sidebar")) {
        $btnBurguerToggle.style.borderRadius = "100%"
        $btnBurguerToggle.innerText = "X"
        $btnBurguerToggle.style.borderColor = "red"
        $btnBurguerToggle.style.color = "red"
        $btnBurguerToggle.style.boxShadow = "0 0 15px 0px black"
      } else {
        $btnBurguerToggle.style.borderRadius = "0"
        $btnBurguerToggle.innerText = "☰"
        $btnBurguerToggle.style.borderColor = "blue"
        $btnBurguerToggle.style.color = "black"
        $btnBurguerToggle.style.boxShadow = "inset 0 0 15px 0px black"
      } */
    });
})