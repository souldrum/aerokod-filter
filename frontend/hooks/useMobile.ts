import React from "react";
import { UAParser } from "ua-parser-js";

const isMobile = () => {
  const uaMobile = UAParser(navigator.userAgent).ua.includes("Mobile");
  const maxWidth = window.matchMedia("(max-width: 768px)").matches;
  const pointerCoarse = window.matchMedia("(pointer:coarse)").matches;

  return uaMobile && maxWidth && pointerCoarse;
};

export const useMobile = () => {
  const [isMobileDevice, setIsMobileDevice] = React.useState(false);

  React.useEffect(() => {
    if (isMobile()) setIsMobileDevice(true);
  }, [isMobileDevice]);

  return isMobileDevice;
};
