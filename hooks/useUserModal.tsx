import { useEffect, useState } from "react";

export const useUserModal = () => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.style.overflow = isShowing ? "hidden" : "unset";
  }, [isShowing]);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return [isShowing, toggle] as const;
};
