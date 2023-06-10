function slider(anything){
 document.querySelector('.pepsi').src=anything;
}
function change(color){
    const sec=document.querySelector('.sec');
    sec.style.background=color;
}

var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
     loop:true,
    });