import './assets/style/style.scss';
import { loadMap } from './components/map';

const mapContainer = document.createElement('div');
mapContainer.id = 'map';
document.body.append(mapContainer);

loadMap();
