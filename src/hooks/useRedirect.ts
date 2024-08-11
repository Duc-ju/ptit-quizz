import { useCallback } from "react";

export default function useRedirect() {
  return useCallback(
    (redirectLink: string, message?: string, type?: "info" | "error") => {
      if (message) {
        window.location.href = `${redirectLink}?type=${
          type || "info"
        }&message=${encodeURI(message)}`;
        return;
      }
      window.location.href = redirectLink;
    },
    []
  );
}
