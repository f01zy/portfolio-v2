"use client";

import { store } from "@/store/store";
import { Provider as Redux } from "react-redux";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <Redux store={store}>{children}</Redux>;
}