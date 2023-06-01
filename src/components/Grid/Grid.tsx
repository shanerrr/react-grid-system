"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import GridLayout from "react-grid-layout";
import useWindowSize from "@/hooks/useWindowSize";
import Notepad from "../Notepad";
import Weather from "../Weather";
import Photos from "../Photos";

export default function Grid({
  layout,
  onLayoutChange,
}: {
  layout: any;
  onLayoutChange: (layout: GridLayout.Layout[]) => void;
}) {
  // resize hook so we can compute cols and rows
  const { width, height } = useWindowSize();

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={Math.floor(width / 300)}
      rowHeight={300}
      compactType={null}
      width={width}
      onLayoutChange={(layout) => onLayoutChange(layout)}
      maxRows={Math.floor((height - 32) / 300)}
    >
      <div key="widget1" data-grid={{ x: 0, y: 0, w: 1, h: 1 }}>
        <Notepad />
      </div>
      <div key="widget2" data-grid={{ x: 4, y: 0, w: 1, h: 1 }}>
        <Weather />
      </div>
      <div key="widget3" data-grid={{ x: 0, y: 4, w: 1, h: 1 }}>
        <Photos />
      </div>
    </GridLayout>
  );
}
