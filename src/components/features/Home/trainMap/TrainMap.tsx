'use client';

import { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { DivIcon, Marker as LeafletMarker } from 'leaflet';
import { useTrainData } from '@/context/TrainDataContext';
import { TrainInfo } from '@/data/trainData';
import 'leaflet/dist/leaflet.css';
// Need to import Leaflet CSS in the component since we're using Next.js
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';

// Create a custom marker with train number and city name
const createMarkerIcon = (train: TrainInfo) => {
  // Extract just the numeric part of the train number (e.g., "ICE 123" -> "123")
  const trainNumberOnly = train.trainNumber.split(' ')[1] || train.trainNumber;
  
  // Choose background color based on status
  let bgColor = 'blue';
  if (train.status === 'delayed') bgColor = '#f59e0b'; // amber-500
  if (train.status === 'cancelled') bgColor = '#ef4444'; // red-500

  // Create HTML for the marker
  const markerHtml = `
    <div class="marker-container" style="
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;
    ">
      <div class="marker-number" style="
        background-color: ${bgColor};
        color: white;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 11px;
        box-shadow: 0 1px 5px rgba(0,0,0,0.4);
        border: 2px solid white;
      ">${trainNumberOnly}</div>
      <div class="marker-city" style="
        background-color: rgba(255, 255, 255, 0.8);
        color: #333;
        font-size: 9px;
        font-weight: bold;
        padding: 1px 3px;
        border-radius: 3px;
        margin-top: 2px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        white-space: nowrap;
      ">${train.city}</div>
    </div>
  `;

  return new DivIcon({
    html: markerHtml,
    className: '', // Clear the default class
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -30]
  });
};

// Component to handle map focus changes
const MapController = ({ selectedTrainId }: { selectedTrainId: string | null }) => {
  const map = useMap();
  const { trainData } = useTrainData();
  
  useEffect(() => {
    if (selectedTrainId) {
      const train = trainData.find(t => t.id === selectedTrainId);
      if (train) {
        map.flyTo(train.coordinates, 10, {
          animate: true,
          duration: 1
        });
      }
    }
  }, [selectedTrainId, map, trainData]);
  
  return null;
};

interface TrainMapProps {
  selectedTrainId?: string | null;
}

const TrainMap = ({ selectedTrainId = null }: TrainMapProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const popupRefs = useRef<Record<string, LeafletMarker>>({});
  const { trainData } = useTrainData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);

  // This is necessary for Leaflet to work properly with Next.js
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Open popup for selected train
  useEffect(() => {
    if (selectedTrainId && popupRefs.current[selectedTrainId]) {
      popupRefs.current[selectedTrainId].openPopup();
    }
  }, [selectedTrainId]);

  if (!isMounted) {
    return <div className="h-screen w-full flex items-center justify-center bg-slate-100">Loading map...</div>;
  }

  return (
    <Box 
      sx={{ 
        position: 'relative',
        width: '100%',
        height: '100%' // Make sure this is explicitly set
      }}
    >
      
      <MapContainer 
        center={[51.1657, 10.4515]} // Center of Germany
        zoom={6} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {trainData.map((train) => (
          <Marker 
            key={train.id} 
            position={train.coordinates}
            icon={createMarkerIcon(train)}
            ref={(ref) => {
              if (ref) {
                popupRefs.current[train.id] = ref;
              }
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">{train.trainNumber}</h3>
                <p className="font-medium">{train.city}</p>
                <div className="my-2">
                  <p>Destination: {train.destination}</p>
                  <p>Departure: {train.departureTime}</p>
                  <p>Platform: {train.platform}</p>
                </div>
                <div className={`mt-2 p-1 text-white rounded text-sm text-center ${
                  train.status === 'on-time' 
                    ? 'bg-green-500' 
                    : train.status === 'delayed' 
                      ? 'bg-amber-500' 
                      : 'bg-red-500'
                }`}>
                  {train.status === 'on-time' 
                    ? 'On Time' 
                    : train.status === 'delayed' 
                      ? `Delayed by ${train.delayMinutes} min` 
                      : 'Cancelled'}
                </div>
                {train.updatedAt && (
                  <div className="mt-2 text-xs text-right text-gray-500">
                    Updated: {new Date(train.updatedAt).toLocaleTimeString()}
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        <MapController selectedTrainId={selectedTrainId} />
      </MapContainer>
    </Box>
  );
};

export default TrainMap; 