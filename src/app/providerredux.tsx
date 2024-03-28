"use client";

import { Provider } from "react-redux";
import { store } from "../app/redux/store";

export function Providersredux({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}