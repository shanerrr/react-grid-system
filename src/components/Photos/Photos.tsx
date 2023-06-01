import { useState } from "react";
import Image from "next/image";

export default function Photos() {
  const [pictures] = useState([
    "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg",
    "https://www.gardendesign.com/pictures/images/675x529Max/site_3/zinnia-orange-flower-pixabay_11868.jpg",
    "https://www.gardendesign.com/pictures/images/675x529Max/site_3/marigold-light-orange-flower-pixabay_11875.jpg",
  ]);
  const [picIndex, setPicIndex] = useState(0);

  const clickHandler = (type: "NEXT" | "PREV") => {
    switch (type) {
      case "NEXT":
        if (pictures.length - 1 === picIndex) return setPicIndex(0);
        return setPicIndex(picIndex + 1);
      case "PREV":
        if (!picIndex) return setPicIndex(pictures.length - 1);
        return setPicIndex(picIndex - 1);
    }
  };

  return (
    <div className="relative group h-full w-full flex flex-col">
      <button
        onClick={() => clickHandler("PREV")}
        className="absolute z-50 top-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 left-3 bg-white text-black px-2 py-1 rounded-lg flex items-center"
      >
        prev
      </button>
      <Image
        className="object-cover"
        alt="flower pic"
        src={pictures[picIndex]}
        loader={() => pictures[picIndex]}
        fill={true}
      />
      <button
        onClick={() => clickHandler("NEXT")}
        className="absolute z-50 top-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 right-3 bg-white text-black px-2 py-1 rounded-lg flex items-center"
      >
        next
      </button>
    </div>
  );
}
