ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.758443869725475,37.60108313558187],
        zoom: 15,
    });

    myMap.controls.remove("mapTools")
    .remove("typeSelector")
    .remove("searchControl")
    .remove("trafficControl")
    .remove("miniMap")
    .remove("scaleLine")
    .remove("routeEditor")
    .remove("smallZoomControl");

    var myPlacemark = new ymaps.Placemark([55.758443869725475,37.60108313558187], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });

     myMap.geoObjects.add(myPlacemark);
}