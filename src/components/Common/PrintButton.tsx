"use client";

const PrintButton = () => (
  <button
    type="button"
    onClick={() => window.print()}
    className="doodle-button inline-flex min-h-14 items-center bg-white px-7 font-bold text-[#183b36]"
  >
    Print this guide
  </button>
);

export default PrintButton;
