$(document).ready(function(){
  var mainSwiper = new Swiper('.mainSlider-swiper-container', {
    slidesPerView: 1,
    loop:true,
    autoplay: true,
    navigation: {
      nextEl: '.mainSlider-swiper-container .swiper-button-next',
      prevEl: '.mainSlider-swiper-container .swiper-button-prev',
    },
  });
  var catalogSwiper = new Swiper('.catalog-swiper-container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.catalog-swiper-container .swiper-button-next',
      prevEl: '.catalog-swiper-container .swiper-button-prev',
    },
  });
  var partnersSwiper = new Swiper('.partners-swiper-container', {
    slidesPerView: 5,
    navigation: {
      nextEl: '.partners-swiper-container .swiper-button-next',
      prevEl: '.partners-swiper-container .swiper-button-prev',
    },
  });

  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 7
    });
    var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
      hintContent: 'Содержимое всплывающей подсказки',
      balloonContent: 'Содержимое балуна'
    });
    myMap.geoObjects.add(myPlacemark);
  }

  $('.selectSection ul li a').click(function(){
    console.log('here');
    $(this).toggleClass('activeTab');
  })
});
