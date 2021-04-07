import './style.css';

var mymap = L.map('mapid',{
  center: L.latLng(43.7229, 10.3966), 
  zoom: 15,
  layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
      ]}
);
