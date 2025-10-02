import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./Portal.types";

export function Portal({ children }: PortalProps) {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalContainer = document.createElement("div");
    document.body.appendChild(portalContainer);
    setContainer(portalContainer);

    return () => {
      document.body.removeChild(portalContainer);
    };
  }, []);

  return container ? createPortal(children, container) : null;
}
