import {
  createContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";

export const ModeContext = createContext();
export function ModeContextProvider(props) {
  const [mode, setMode] = useState([]);

  const changeMode = () => {
    setMode(!mode);

    if (mode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";

    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
    console.log(mode);
  };

  return (
    <ModeContext.Provider
      value={{
        mode,
        changeMode,
      }}
    >
      {props.children}
    </ModeContext.Provider>
  );
}
