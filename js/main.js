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
    on:{
      slideChange: function(){
        var menuID = catalogSwiper.activeIndex;
        console.log(menuID);
        $('.catalogSection nav ul li a[data-slide="' + menuID + '"]').addClass('activeCatalog');
        $('.catalogSection nav ul li a[data-slide="' + menuID + '"]').parent().siblings().find('a').removeClass('activeCatalog');
      }
    },
  });
  $('.catalogSection nav ul li a').click(function(){
    var slideNumber = $(this).attr('data-slide');
    $(this).addClass('activeCatalog');
    $(this).parent().siblings().find('a').removeClass('activeCatalog');
    catalogSwiper.slideTo(slideNumber);
  });


  var menuSwiper = new Swiper('.menu-swiper', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  onSlideChangeEnd: function(menuSwiper){
    var cntList = $('.aboutBlock__menu ul li').length;
    var menuID = menuSwiper.activeIndex%(cntList);
    if (menuID == 0) menuID = cntList;
    $('#menuID' + menuID).addClass('aboutBlock__menu-active');
    $('#menuID' + menuID).siblings('li').removeClass('aboutBlock__menu-active');
  }
});
$('.aboutBlock__menu ul li').click(function(){
  var menuID = $(this).attr('data-menuID');
  menuSwiper.slideTo(menuID);
});




  var partnersSwiper = new Swiper('.partners-swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop:true,
    navigation: {
      nextEl: '.partnersColumn .swiper-button-next',
      prevEl: '.partnersColumn .swiper-button-prev',
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
    var foodAttr = $(this).attr('data-food');
    if(!$(this).is('.activeTab')){
      $(this).toggleClass('activeTab');
      $('.selectForm__header').append('<span data-attr="' + foodAttr + '">' + foodAttr + '</span> ');
    }else{
      $(this).toggleClass('activeTab');
      $('span[data-attr="' + foodAttr + '"]').remove();
    }
  });
});
