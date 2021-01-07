import dynamic from 'next/dynamic';

export const MapDiv = dynamic(
  () => {
    return import('react-leaflet').then((obj) => {
      return obj.Map;
    });
  },
  { ssr: false }
);

export const TileLayer = dynamic(
  () => {
    return import('react-leaflet').then((obj) => {
      return obj.TileLayer;
    });
  },
  { ssr: false }
);

export const Popup = dynamic(
  () => {
    return import('react-leaflet').then((obj) => {
      return obj.Popup;
    });
  },
  { ssr: false }
);

export const Marker = dynamic(
  () => {
    return import('react-leaflet').then((obj) => {
      return obj.Marker;
    });
  },
  { ssr: false }
);
