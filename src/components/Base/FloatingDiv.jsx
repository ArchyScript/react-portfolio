import React from "react";

const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    <div className="bg-white shadow-boxShadow rounded-17 flex justify-between items-center pr-7 h-4.5rem">
      <img src={ img } alt="" className="transform scale-40" />
      <span className="font-sans text-xl text-black">
        { text1 }
        <br />
        { text2 }
      </span>
    </div>
  );
};

export default FloatinDiv;