"use client";

import { useEffect, useRef, useState } from "react";

type TextSize = "standard" | "large" | "xlarge";

const AccessibilityControls = () => {
  const [open, setOpen] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>("standard");
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let storedSize: TextSize | null = null;
    let storedContrast = false;
    let storedMotion = false;

    try {
      const storage = window.localStorage;
      if (storage && typeof storage.getItem === "function") {
        storedSize = storage.getItem("soe-text-size") as TextSize | null;
        storedContrast = storage.getItem("soe-high-contrast") === "true";
        storedMotion = storage.getItem("soe-reduce-motion") === "true";
      }
    } catch {
      // Reading preferences are optional when storage is unavailable.
    }

    if (storedSize === "large" || storedSize === "xlarge")
      setTextSize(storedSize);
    setHighContrast(storedContrast);
    setReduceMotion(storedMotion);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.textSize = textSize;
    document.documentElement.dataset.contrast = highContrast
      ? "high"
      : "standard";
    document.documentElement.dataset.motion = reduceMotion
      ? "reduce"
      : "standard";
    try {
      const storage = window.localStorage;
      if (storage && typeof storage.setItem === "function") {
        storage.setItem("soe-text-size", textSize);
        storage.setItem("soe-high-contrast", String(highContrast));
        storage.setItem("soe-reduce-motion", String(reduceMotion));
      }
    } catch {
      // The controls still work for the current visit without persistence.
    }
  }, [textSize, highContrast, reduceMotion]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      )
        setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="reading-options">
      <button
        type="button"
        className="reading-options__trigger"
        aria-expanded={open}
        aria-controls="reading-options-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" className="text-xl font-black">
          Aa
        </span>
        <span>Reading options</span>
      </button>

      {open && (
        <div
          id="reading-options-panel"
          className="reading-options__panel"
          role="region"
          aria-label="Reading options"
        >
          <div>
            <p className="reading-options__label">Text size</p>
            <div className="mt-3 flex gap-2 [&>*]:flex-1">
              {(["standard", "large", "xlarge"] as TextSize[]).map((size) => (
                <button
                  key={size}
                  type="button"
                  className="reading-options__choice"
                  aria-pressed={textSize === size}
                  onClick={() => setTextSize(size)}
                >
                  {size === "standard" ? "A" : size === "large" ? "A+" : "A++"}
                </button>
              ))}
            </div>
          </div>

          <label className="reading-options__toggle">
            <span>
              <strong>Higher contrast</strong>
              <small>Darken text and borders</small>
            </span>
            <input
              type="checkbox"
              checked={highContrast}
              onChange={(event) => setHighContrast(event.target.checked)}
            />
          </label>

          <label className="reading-options__toggle">
            <span>
              <strong>Reduce motion</strong>
              <small>Turn off site animation</small>
            </span>
            <input
              type="checkbox"
              checked={reduceMotion}
              onChange={(event) => setReduceMotion(event.target.checked)}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default AccessibilityControls;
