import { createContext, useContext } from "react";

/** Navigates to a page by its id (see src/data/pages.ts). */
export const PageNavContext = createContext<(id: string) => void>(() => {});

export const usePageNav = () => useContext(PageNavContext);
