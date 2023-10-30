import React, { useContext } from "react";
import { PiMoon } from "react-icons/pi"
import { HiSun } from "react-icons/hi"

import { themeContext } from "../../context/ContextProvider";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="relative">
      <input
        type="checkbox"
        className="hidden"
        id="toggleSwitch"
        checked={ darkMode }
        onChange={ handleClick }
      />
      <label
        className={ `w-[72px] border h-8 cursor-pointer bg-gray-400 rounded-full p-1 flex items-center transition-colors duration-300 ${darkMode
          ? "justify-end m r-2"
          : "justify-start"
          }` }
        htmlFor="toggleSwitch"
      >
        <div
          className={ `w-6 h-6 bg-white flex items-center justify-center rounded-full transform duration-300 translate-x-0 ${darkMode ? "translate-x-full  mr-1" : "text-orange"
            }` }
        >
          <HiSun className={ `text-lg  ${darkMode && 'text-transparent'}` } />
        </div>

        <div
          className={ `w-6 h-6 pl-1 flex items-center justify-center rounded-full  transform duration-300 translate-x-0 ${darkMode ? "text-black" : "translate-x-full text-transparent"
            }` }
        >
          <PiMoon className="text-lg " />
        </div>
      </label>
    </div>
  );
};

export default Toggle;