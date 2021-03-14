var map = L.map ('map',{
			center: [40.0, -2.29326171875],
			zoom: 6,
			zoomControl: false,
			minZoom:5,
			dragging: true
		});



var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);