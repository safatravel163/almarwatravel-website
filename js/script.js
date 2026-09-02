
// Navbar scroll - account for top bar height
const nav=document.getElementById('navbar');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>60);});

// Hamburger
const ham=document.getElementById('hamburger');
const links=document.getElementById('navLinks');
ham.addEventListener('click',()=>{links.classList.toggle('open');});
links.querySelectorAll('a:not(.dropdown-toggle)').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

// Dropdown - click toggle for mobile, hover handled by CSS
document.querySelectorAll('.dropdown').forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  if(toggle) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('active');
    });
  }
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('active');
  });
});

// Package filter buttons (visual only)
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',function(){
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item=>{
  item.querySelector('.faq-q').addEventListener('click',()=>{
    const isOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!isOpen) item.classList.add('open');
  });
});

// Scroll animations
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');}});
},{threshold:0.12});
document.querySelectorAll('.fade-in,.fade-left,.fade-right').forEach(el=>observer.observe(el));

// Make all sections visible immediately on page load (no waiting for scroll)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in,.fade-left,.fade-right').forEach(el => {
    el.classList.add('visible');
  });
  
  // Initialize Features Slider (Mobile Only)
  if(window.innerWidth <= 768 && document.querySelector('.features-slider')) {
    new Swiper('.features-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.features-pagination',
        clickable: true,
      },
      speed: 600,
    });
  }
});

