import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

export default function IconCloud({ iconSlugs = [], imageArray = [] }) {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme)
    );
  }, [data, theme]);

  return (
    <section className="relative w-full min-h-[400px] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex flex-col items-center justify-center overflow-hidden">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="absolute top-4 right-4 px-3 py-1.5 rounded-lg border border-gray-500 text-sm text-gray-300 hover:bg-gray-700 transition"
      >
        Toggle Theme ({theme})
      </button>

      <div className="w-full">
        <Cloud {...cloudProps}>
          <>
            {renderedIcons}
            {imageArray.map((image, index) => (
              <a key={index} href="#" onClick={(e) => e.preventDefault()}>
                <img height="42" width="42" alt="icon" src={image} />
              </a>
            ))}
          </>
        </Cloud>
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px] pointer-events-none" />
    </section>
  );
}
