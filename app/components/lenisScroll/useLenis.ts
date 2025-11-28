// "use client";

// import { useEffect, useState } from "react";
// import Lenis from "lenis";

// declare global {
//   interface Window {
//     lenis?: Lenis;
//   }
// }

// export function useLenis() {
//   const [lenis, setLenis] = useState<Lenis | null>(null);

//   useEffect(() => {

//     const lenisInstance = window.lenis;
//     if (lenisInstance) {
//       setLenis(lenisInstance);
//     }

//     const checkLenis = setInterval(() => {
//       if (window.lenis && !lenis) {
//         setLenis(window.lenis);
//         clearInterval(checkLenis);
//       }
//     }, 100);

//     return () => clearInterval(checkLenis);
//   }, [lenis]);

//   return lenis;
// }

"use client";

import Lenis from "lenis";

// Extend Window interface
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export function useLenis(): Lenis | undefined {
  // Simply return the global Lenis instance
  if (typeof window !== "undefined") {
    return window.lenis;
  }
  return undefined;
}
