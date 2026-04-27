import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function AutoFocus({ incidents }) {
  const map = useMap();

  useEffect(() => {
    if (incidents.length > 0 && incidents[0].coords) {
      map.setView(
        [incidents[0].coords.lat, incidents[0].coords.lng],
        15
      );
    }
  }, [incidents, map]);

  return null;
}

function MapView({ incidents }) {
  return (
    <MapContainer
      center={[28.8386, 78.7733]}
      zoom={12}
      style={{ height: "450px", width: "100%", borderRadius: "10px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <AutoFocus incidents={incidents} />

      {incidents.map((i) =>
        i.coords ? (
          <Marker key={i.id} position={[i.coords.lat, i.coords.lng]}>
            <Popup>
              <b>{i.type}</b><br />
              {i.message}<br />
              Severity: {i.severity}<br />
              📞 {i.contact}
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
}

export default MapView;
