import React, { useState } from "react";
import InputBox from "./InputBox";
import { ButtonPrimary, IconButtonCopy, IconButtonPaste } from "./IconButton";
import { encrypt, decrypt, charToCode, codeToChar } from "../scripts/algorithm";

function EncryptTool() {
  const [mode, setMode] = useState("encrypt");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  // Copy text to clipboard
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {})
        .catch((err) => console.error("Failed to copy:", err));
    }
  };

  // Paste text from clipboard
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text);
    } catch (err) {
      console.error("Failed to paste:", err);
    }
  };

  // Convert input text
  const handleConvert = () => {
    if (mode === "encrypt") {
      setOutputText(encrypt(inputText, charToCode));
    } else {
      setOutputText(decrypt(inputText, codeToChar));
    }
  };

  return (
    <main className="px-4 sm:px-8 md:px-16 py-[6rem] flex flex-col gap-[3rem]">
      <div className="text-display-medium font-mono">Tri-CodeX Online Tool</div>

      {/* Mode Selection */}
      <div className="w-full flex gap-[3rem]">
        <button
          onClick={() => setMode("encrypt")}
          className={`${
            mode === "encrypt" ? "underline" : ""
          } text-headline-large font-mono decoration-2 underline-offset-16 decoration-wavy cursor-pointer`}
        >
          encrypt
        </button>
        <button
          onClick={() => setMode("decrypt")}
          className={`${
            mode === "decrypt" ? "underline" : ""
          } text-headline-large font-mono decoration-2 underline-offset-16 decoration-wavy cursor-pointer`}
        >
          decrypt
        </button>
      </div>

      {/* Input & Output Fields */}
      <div className="w-full flex flex-col md:flex-row gap-[16px] md:gap-[32px]">
        {/* Input Box */}
        <div className="w-full flex relative">
          <InputBox
            placeholder={
              mode === "encrypt"
                ? "Type or paste your message to encrypt..."
                : "Enter encrypted code to decrypt..."
            }
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {/* Copy & Paste Buttons */}
          <div className="absolute flex gap-2 bottom-4 right-2.5">
            <IconButtonPaste onClick={handlePaste} />
            <IconButtonCopy onClick={() => handleCopy(inputText)} />
          </div>
        </div>

        {/* Output Box */}
        <div className="w-full flex relative">
          <InputBox
            placeholder={
              mode === "encrypt"
                ? "Your encrypted code will appear here..."
                : "Your decrypted message will appear here..."
            }
            value={outputText}
            readOnly
          />
          {/* Copy Button */}
          <div className="absolute flex gap-2 bottom-4 right-2.5">
            <IconButtonCopy onClick={() => handleCopy(outputText)} />
          </div>
        </div>
      </div>

      {/* Convert Button */}
      <ButtonPrimary
        onClick={handleConvert}
        buttonText={`Convert to ${
          mode === "encrypt" ? "Encrypted Code" : "Decrypted Text"
        }`}
      />
    </main>
  );
}

export default EncryptTool;
