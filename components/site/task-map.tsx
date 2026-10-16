"use client";

import { useEffect, useRef } from "react";
import { GeolocateControl, Map as MapLibreMap, Marker, NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export type MapMarker = {
  id: string;
  lng: number;
  lat: number;
  count: number;
};

export function TaskMap({ markers }: { markers: MapMarker[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;
    const map = new MapLibreMap({
      container: ref.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "© OpenStreetMap",
          },
        },
        layers: [{ id: "osm", type: "raster", source: "osm" }],
      },
      center: [-46.65, -23.56],
      zoom: 11,
    });
    map.addControl(new NavigationControl({ showCompass: false }), "bottom-right");
    map.addControl(
      new GeolocateControl({
        positionOptions: { enableHighAccuracy: false },
        trackUserLocation: false,
      }),
      "bottom-right",
    );
    mapRef.current = map;
    const observer = new ResizeObserver(() => map.resize());
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const ink = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim();
    const action = getComputedStyle(document.documentElement).getPropertyValue("--action").trim();
    const handles = markers.map((marker) => {
      const el = document.createElement("div");
      el.textContent = String(marker.count);
      el.style.width = "28px";
      el.style.height = "28px";
      el.style.borderRadius = "999px";
      el.style.background = ink || "currentColor";
      el.style.color = action;
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      el.style.font = "800 11px Manrope, sans-serif";
      return new Marker({ element: el }).setLngLat([marker.lng, marker.lat]).addTo(map);
    });
    map.resize();
    return () => handles.forEach((handle) => handle.remove());
  }, [markers]);

  return <div ref={ref} className="h-full min-h-0 w-full" />;
}
