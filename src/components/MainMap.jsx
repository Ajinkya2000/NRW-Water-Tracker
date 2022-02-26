import React from "react";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MainMap = () => {
  const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  });

  const lineLayout = { visibility: "visible" };
  const linePaint = {
    "line-color": "red",
    "line-width": 2,
  };

  const route = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [-122.414, 37.776],
            [-77.032, 38.913],
          ],
        },
        properties: {},
      },
    ],
  };

  return (
    <div>
      <Map
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
        zoom={[2]}
      >
        <GeoJSONLayer
          data={route}
          lineLayout={lineLayout}
          linePaint={linePaint}
        />
      </Map>
    </div>
  );
};

export default MainMap;
