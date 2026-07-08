import { ReactNode } from "react";

// No animation — instant render, no black flash between pages
const PageTransition = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);

export default PageTransition;
