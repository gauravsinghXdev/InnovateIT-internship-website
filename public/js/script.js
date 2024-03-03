const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const sidebar = document.querySelector(".sidebar");

toggleBtn.onclick = () => {
    sidebar.classList.toggle("open");
    const isOpen = sidebar.classList.contains(open);

    toggleBtnIcon.classList = isOpen
    ? "fa fa-times"
    : "fa-solid fa-bars"
}