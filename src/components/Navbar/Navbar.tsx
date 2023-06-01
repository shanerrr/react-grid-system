"use client";
import Link from "next/link";

type Props = {
  onSaveLayout: () => void;
  onLoadLayout: () => void;
};

export default function Navbar({ onSaveLayout, onLoadLayout }: Props) {
  const isLogged = localStorage.getItem("account");
  return (
    <nav className="h-8 flex items-center w-full px-4 bg-slate-900">
      {isLogged ? (
        <div className="flex justify-between w-full">
          <div>
            <button
              onClick={onSaveLayout}
              className="bg-slate-600 text-white font-bold px-4"
            >
              SAVE
            </button>
            <button
              onClick={onLoadLayout}
              className="bg-slate-700 text-white font-bold px-4"
            >
              LOAD
            </button>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-white">
              {localStorage.getItem("account")}
            </span>
            <button
              onClick={() => {
                localStorage.removeItem("account");
                window.location.reload();
              }}
              className="bg-slate-500 text-white font-bold px-4"
            >
              LOGOUT
            </button>
          </div>
        </div>
      ) : (
        <Link href="/login" className="bg-slate-600 text-white font-bold px-4">
          LOGIN
        </Link>
      )}
    </nav>
  );
}
