import { UAParser } from "ua-parser-js";

export const isMobile = () => {
  const uaMobile = UAParser(navigator.userAgent).ua.includes("Mobile");
  const maxWidth = window.matchMedia("(max-width: 768px)").matches;
  const pointerCoarse = window.matchMedia("(pointer:coarse)").matches;

  return uaMobile && maxWidth && pointerCoarse;
};
