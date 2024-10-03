document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.querySelector('.open-btn');
  const closeBtn = document.querySelector('.close-btn');
  const overlay = document.querySelector('.map-holder__overlay');

  function openOverlay() {
    gsap.to(overlay, {
      duration: 0.5,
      ease: 'power2.out',
      x: 0,
      opacity: 1,
      pointerEvents: 'auto'
    });
    openBtn.classList.add('d-none');
  }

  function closeOverlay() {
    gsap.to(overlay, {
      duration: 0.5,
      ease: 'power2.in',
      x: '-100%',
      opacity: 0,
      pointerEvents: 'none'
    });
    openBtn.classList.remove('d-none');
  }

  openBtn.addEventListener('click', openOverlay);
  closeBtn.addEventListener('click', closeOverlay);
  //////// MAP
  const mapElement = document.getElementById('map');


  // Инициализация карты
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.760061, 37.618547],

      zoom: 13,
      controls: []
    },

    );
    myMap.controls.remove('zoomControl');

    // Создание метки
    var myPlacemark = new ymaps.Placemark([55.769589, 37.638453], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/ellipse.svg',
      iconImageSize: [12, 12],
      iconImageOffset: [-16, -32]
    },

      {
        suppressMapOpenBlock: true
      }

    );

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);
  });

  map.layers.get(0).get(0).setOptions({
    style: function (object) {
      if (object.properties.get('iconContent')) {
        return {
          iconColor: '#000000'
        };
      }
      return {
        fillColor: '#000000',
        strokeColor: '#000000',
        opacity: 0.5
      };
    }
  });



});

