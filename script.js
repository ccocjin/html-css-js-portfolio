function toggleMenu(){
    //targeting the two elements and when clicked it will
    //add or remove the open class
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}