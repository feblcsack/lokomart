// src/components/UI.js
import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "2",
  "3",
  "4",
  "5",
  // "DSC01011",
  // "DSC01040",
  // "DSC01064",
  // "DSC01071",
  // "DSC01103",
  // "DSC01145",
  // "DSC01420",
  // "DSC01461",
  // "DSC01489",
  // "DSC02031",
  // "DSC02064",
  // "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "1",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "6",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <main className="pointer-events-none select-none z-10 pt-[600px] inset-0 flex justify-center flex-col">
      <div className="w-full overflow-auto pointer-events-auto flex justify-center mb-10">
        <div className="hidden md:flex overflow-auto flex-wrap items-center gap-4 max-w-full px-4 py-2">
          {[...pages].map((_, index) => (
            <button
              key={index}
              className={`border-transparent sedow hover:border-white transition-all duration-300 px-4 py-2 rounded-full text-lg uppercase shrink-0 border ${
                index === page
                  ? "bg-primary/90 text-white"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(index)}
            >
              {index === 0 ? "Cover" : `Hal ${index}`}
            </button>
          ))}
          <button
            className={`border-transparent sedow hover:border-white transition-all duration-300 px-4 py-2 rounded-full text-lg uppercase shrink-0 border ${
              page === pages.length
                ? "bg-primary/90 text-white"
                : "bg-black/30 text-white"
            }`}
            onClick={() => setPage(pages.length)}
          >
            Back Cover
          </button>
        </div>
      </div>
    </main>
  );
};
