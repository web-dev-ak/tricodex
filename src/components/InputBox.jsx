import React from "react";

function InputBox({ placeholder, type = "text", value, onChange, readOnly }) {
  return (
    <div className="w-full h-auto">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly} 
        className="border p-2 w-full h-[300px] text-left placeholder:text-gray-500 resize-none"
      ></textarea>
    </div>
  );
}

export default InputBox;
