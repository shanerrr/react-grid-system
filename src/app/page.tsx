"use client";

import { useState } from "react";

// components
import Grid from "@/components/Grid/Grid";
import Navbar from "@/components/Navbar";

//types
import type { Layout } from "react-grid-layout";

export default function Home() {
  const [isLogged] = useState(localStorage.getItem("account"));

  const [layout, setLayout] = useState([
    { i: "widget1", x: 0, y: 0, w: 1, h: 1 },
    { i: "widget2", x: 1, y: 0, w: 1, h: 1 },
    { i: "widget3", x: 2, y: 0, w: 1, h: 1 },
  ]);

  //called when we move anything in the grid to track state of layout
  const onLayoutChange = (layout: Layout[]) => {
    setLayout(layout);
  };

  //store layouts to local storage
  const onSaveLayout = () => {
    localStorage.setItem("LAYOUT", JSON.stringify(layout));
  };

  //load any layouts set prior to be allowed to load
  const onLoadLayout = () => {
    const layout = localStorage.getItem("LAYOUT");
    setLayout(layout ? JSON.parse(localStorage.getItem("LAYOUT")!) : []);
  };

  return (
    <main>
      <Navbar
        isLogged={isLogged}
        onSaveLayout={onSaveLayout}
        onLoadLayout={onLoadLayout}
      />
      <Grid
        layout={layout}
        onLayoutChange={(layout) => onLayoutChange(layout)}
      />
    </main>
  );
}
