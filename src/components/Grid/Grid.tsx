"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import GridLayout from "react-grid-layout";
import useWindowSize from "@/hooks/useWindowSize";
import Notepad from "../Notepad";
import Weather from "../Weather";
import Photos from "../Photos";

export default function Grid({ items }: { items: any }) {
  // resize hook so we can compute cols and rows
  const { width, height } = useWindowSize();

  const layout = [
    { i: "widget1", x: 1, y: 0, w: 1, h: 1 },
    { i: "widget2", x: 2, y: 0, w: 1, h: 1 },
    { i: "widget3", x: 3, y: 0, w: 1, h: 1 },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={Math.floor(width / 300)}
      rowHeight={300}
      compactType={null}
      width={width}
      maxRows={Math.floor((height - 32) / 300)}
    >
      <div
        key="widget1"
        className="bg-slate-50"
        data-grid={{ x: 0, y: 0, w: 1, h: 1 }}
      >
        <Notepad />
      </div>
      <div
        key="widget2"
        className="bg-slate-50"
        data-grid={{ x: 4, y: 0, w: 1, h: 1 }}
      >
        <Weather />
      </div>
      <div
        key="widget3"
        className="bg-slate-50"
        data-grid={{ x: 0, y: 4, w: 1, h: 1 }}
      >
        <Photos />
      </div>
    </GridLayout>
  );
}
