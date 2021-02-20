import { Styling } from "@/components";
import { useEffect } from "react";

const StylingPage = () => {
  useEffect(() => {
    document.title = "Styling";
  });
  return <Styling />;
};

export default StylingPage;
