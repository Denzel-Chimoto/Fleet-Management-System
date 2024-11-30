import React, { useState, useEffect } from 'react';
import '../components/styles/FleetTracking.css'; // Optional styling file
import MapComponent from './Map';

const FleetTracking = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  useEffect(() => {
    // Fetch vehicle data from the backend API
    fetch('/vehicles.json')
      .then((response) => response.json())
      .then((data) => setVehicles(data))
      .catch((error) => console.error('Error fetching vehicle data:', error));
  }, []);

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <div className="fleet-tracking">
      {/* Header */}
      <header className="header">
        <h1>Fleet Tracking System</h1>
      </header>

      <div className="tracking-content">
        {/* Map Section */}
        <div className="map-section">
          <h2>Map</h2>
          <MapComponent vehicles={vehicles} />
          
        </div>

        {/* Vehicle List */}
        <div className="vehicle-list">
          <h2>Vehicles</h2>
          <ul>
            {vehicles.map((vehicle) => (
              <li key={vehicle.id} onClick={() => handleVehicleSelect(vehicle)}>
                {vehicle.name} ({vehicle.status})
              </li>
            ))}
          </ul>
        </div>

        {/* Details Panel */}
        <div className="details-panel">
          {selectedVehicle ? (
            <div>
              <h2>Details for {selectedVehicle.name}</h2>
              <p>Speed: {selectedVehicle.speed}</p>
              <p>Status: {selectedVehicle.status}</p>
              <p>Driver: {selectedVehicle.driver}</p>
            </div>
          ) : (
            <p>Select a vehicle to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FleetTracking;
