import "./modules/example";

ymaps.ready(init)

function init () {
  var myMap = new ymaps.Map('map', {
    center: [57.99442617227664, 56.283732030938616],
    zoom: 16,
    controls: []
  })

  myMap.controls.add('zoomControl')
  myMap.behaviors.disable('scrollZoom')

  var myPlacemark = new ymaps.Placemark(
    [57.99480628049517, 56.29240662924609],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: '../images/icons/map_n.svg',
      iconImageSize: [61, 58],
      iconImageOffset: [-45, -72]
    }
  )

  myMap.geoObjects.add(myPlacemark)
}

