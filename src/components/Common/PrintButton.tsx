"use client";

const PrintButton = () => (
  <button type="button" onClick={() => window.print()} className="print-button doodle-button inline-flex min-h-14 items-center bg-white px-7 font-bold text-[#111815]">
    Print this guide
  </button>
);

export default PrintButton;
