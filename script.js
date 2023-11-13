// JavaScript

const map = L.map('map').setView([33.59302558656718, 130.39398000000006], 15);

// タイルレイヤーを作成し、地図にセットする
// Open Street Map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([33.67345752177457, 130.44140661378802]).addTo(map)
  .bindPopup('A pretty CSS popup.<br> <img src="images/img01.png" alt="img">Easily customizable.');
  //アイコン
const whiteIcon = L.icon({
    iconUrl: 'images/img01.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });
  L.marker([33.59302558656718, 130.39398000000006], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');