import React from "react";

type Props = {};

export default function Notepad({}: Props) {
  return (
    <div className="h-full w-full flex flex-col p-4 gap-2">
      <h6 className="font-bold text-3xl text-center">Notes</h6>
      <textarea className="flex-grow w-full"/>
    </div>
  );
}
