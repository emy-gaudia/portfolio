const menuBtn = document.querySelector(".menu-btn");

menuBtn.onclick = function() {
  const navList = document.querySelector(".nav-list");
  menuBtn.classList.toggle("open");
  navList.classList.toggle("open");
}
const darkmodeBtn = document.getElementById("dark-mode-btn");
  darkmodeBtn.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      darkmodeBtn.className = "fa-solid fa-sun fa-sm";
    }else {
      darkmodeBtn.className = "fa-solid fa-moon fa-sm";
    }
  }

const navbar = document.querySelector('.mynav');
window.onscroll = () => {
  if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
};