ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.000469, 36.547192],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),
        position =  [54.997213, 36.547284],
        myPlacemark = new ymaps.Placemark(position, {
            hintContent: 'Голубико-Во!',
            balloonContent: 'Адрес ЛПХ "Голубико-Во!": улица Дачная, 1, Россия, Калужская область, Малоярославецкий район, деревня Веткино'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './media/google_marker.png',
            // Размеры метки.
            iconImageSize: [42, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-12, -38]
        });

    myMap.geoObjects.add(myPlacemark);
});

/*
$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.row-offcanvas').toggleClass('active')
  })
})
*/