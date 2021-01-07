import dynamic from 'next/dynamic';

const MapDiv = dynamic(
  () => {
    return import('react-leaflet').then((obj) => {
      return obj.Map;
    });
  },
  { ssr: false }
);

const TileLayer = dynamic(
  () => {
    return import('react-leaflet').then((obj) => {
      return obj.TileLayer;
    });
  },
  { ssr: false }
);

const Popup = dynamic(
  () => {
    return import('react-leaflet').then((obj) => {
      return obj.Popup;
    });
  },
  { ssr: false }
);

const Marker = dynamic(
  () => {
    return import('react-leaflet').then((obj) => {
      return obj.Marker;
    });
  },
  { ssr: false }
);

export { MapDiv, TileLayer, Marker, Popup };
