import { useState } from "react";

function useToggle(initialValue: boolean = true) {
  const [isToggled, setIsToggled] = useState(initialValue);

  function toggle() {
    setIsToggled((isToggled) => !isToggled);
  }

  return [isToggled, toggle];
}

export default useToggle;
