import dynamic from 'next/dynamic';

/* eslint-disable sonarjs/no-duplicate-string */
export const Container = dynamic(
  async () => {
    const obj = await import('react-leaflet');
    return obj.MapContainer;
  },
  { ssr: false },
);

export const Layer = dynamic(
  async () => {
    const obj = await import('react-leaflet');
    return obj.TileLayer;
  },
  { ssr: false },
);

export const Popup = dynamic(
  async () => {
    const obj = await import('react-leaflet');
    return obj.Popup;
  },
  { ssr: false },
);

export const Marker = dynamic(
  async () => {
    const obj = await import('react-leaflet');
    return obj.Marker;
  },
  { ssr: false },
);

/* eslint-enable */
