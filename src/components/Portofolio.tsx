"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import PortfolioV2 from "./PortfolioV2";

export default function Portfolio() {
  return (
    <LanguageProvider>
      <PortfolioV2 />
    </LanguageProvider>
  );
}
