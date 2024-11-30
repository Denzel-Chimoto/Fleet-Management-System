import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ vehicles }) => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {vehicles.map((vehicle) => (
        <Marker key={vehicle.id} position={[vehicle.lat, vehicle.lng]}>
          <Popup>
            <strong>{vehicle.name}</strong>
            <p>Status: {vehicle.status}</p> {/*WE going to fetch this data from an api or locally provided files */}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
