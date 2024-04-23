"use client";

import { AppStore, makeStore } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = React.useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
