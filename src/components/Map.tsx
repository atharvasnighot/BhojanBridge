import { useState, MouseEvent } from 'react';
import { MapContainer, TileLayer, Marker, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

export default () => {

  const defaultPosition: [number, number] = [21.1458, 79.0882]; // Nagpur, India
  const redMarkerIcon = new L.Icon.Default();

  const [markerPosition, setMarkerPosition] = useState(defaultPosition);

  const handleMapClick = (e: L.LeafletMouseEvent) => {
    setMarkerPosition([e.latlng.lat, e.latlng.lng]);
  };

  const handleDivClick = (e: MouseEvent<HTMLDivElement>) => {
    // Check if the event target is an instance of HTMLDivElement
    if (e.target instanceof HTMLDivElement) {
      const leafletMouseEvent = e as unknown as L.LeafletMouseEvent;
      handleMapClick(leafletMouseEvent);
    }
  };
  return (
    <div style={{ width: '90%', margin: '10px auto', padding: '10px' }}>
      <MapContainer
        center={defaultPosition}
        zoom={8}
        style={{ height: '800px', width: '100%', borderRadius: '15px', border: '2px solid #000' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Circle to represent the cloudburst detection area */}
        <Circle
          center={defaultPosition}
          pathOptions={{ color: '', fillColor: '' }}
          radius={1000} // Adjust the radius as needed
        >
          <Popup position={[defaultPosition[0] + 0.9, defaultPosition[1]]}>
            <div>First Popup</div>
          </Popup>
          <Popup position={[defaultPosition[0] + 10.2, defaultPosition[1]]}>
            <div>Second Popup</div>
          </Popup>
          <Popup position={[defaultPosition[0] + 5.5, defaultPosition[1] + 5.5]}>
            <div>Third Popup</div>
          </Popup>

        </Circle>

        {/* Red marker for the specified location */}
        <Marker position={markerPosition} icon={redMarkerIcon}>
          <Popup position={[markerPosition[0], markerPosition[1] + 0.02]}>
            <div className='text-xl'>
              10Kg Food Delivery
            </div>
          </Popup>
        </Marker>

        {/* Handle map click by clicking on a hidden div */}
        <div onClick={handleDivClick} style={{ display: 'none' }}></div>

        <div style={{ position: 'absolute', top: '10px', left: '40px', zIndex: 900 }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              padding: '8px',
              border: '1px solid #000',
              borderRadius: '15px',
              fontSize: '14px',
              outline: 'none',
            }}
          />
        </div>
      </MapContainer>
    </div>
  )
}
