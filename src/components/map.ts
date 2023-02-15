import maplibregl from 'maplibre-gl';

const options = {
	container: 'map',
	style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
	center: {
		lng: 29,
		lat: 41,
	}, // starting position [lng, lat]
	zoom: 9, // starting zoom
};
export const loadMap = () => {
	new maplibregl.Map(options);
};
