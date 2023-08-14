const menuBtn = document.querySelector(".menu-btn");

menuBtn.onclick = function() {
  const navList = document.querySelector(".nav-list");
  menuBtn.classList.toggle("open");
  navList.classList.toggle("open");
}


const navbar = document.querySelector('.mynav');
window.onscroll = () => {
  if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
};