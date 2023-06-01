import React from "react";

type Props = {};

export default function Notepad({}: Props) {
  return (
    <div className="h-full w-full flex flex-col p-2 gap-2 bg-purple-800">
      <textarea
        placeholder="write your deepest darkest secrets here"
        className="flex-grow w-full focus:outline-none p-2"
      />
    </div>
  );
}
