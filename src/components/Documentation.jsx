import React from "react";
import Divider from "./Divider";
import CodeBlock from "./CodeBlock";

function Documentation() {
  return (
    <section className="flex overflow-y-hidden pl-4 pr-2 flex-col gap-[2rem] w-full sm:w-4/5 md:w-3/4 lg:w-1/2 py-[6.25rem]">
      <div>
        <h1 className="text-display-medium font-mono">Documentation</h1>
        <h2 className="text-headline-small font-mono mt-4">
          This is just a fun project created by me (Adarsh Singh)
        </h2>
        <h6 className="mt-[1.5rem]">
          <a href="https://github.com/web-dev-ak/tricodex/blob/main/TriCodeX%20Documentation.pdf" className="text-blue-500">
            Click here!
          </a>{" "}
          to download the PDF of documentation.
        </h6>
      </div>
      <Divider />
      <div>
        <h1 className="text-display-small font-mono">
          Introduction to Tri-CodeX
        </h1>
        <h2 className="text-headline-small font-mono mt-4">Hey Visitors!</h2>
        <h6 className="mt-[1.5rem]">
          TricodeX is a custom character encoding algorithm that converts text
          into a structured three-digit numeric code. Each letter, number,
          space, and common symbol is mapped to a unique three-digit code,
          ensuring a consistent and reversible transformation. <br />
          <br /> The primary purpose of TricodeX is to help users understand the
          basics of encoding and decoding while also serving as a fun tool for
          message encryption.
        </h6>
      </div>
      <Divider />
      <div>
        <h1 className="text-display-small font-mono">
          Encoding and Decoding Process
        </h1>
        <h2 className="text-headline-small font-mono mt-4">
          Encoding (Text → Code)
        </h2>
        <h6 className="mt-[1.5rem]">
          <ol className="list-decimal pl-6">
            <li>Take a string of text as input.</li>
            <li>
              For each character in the text:
              <ul className="list-disc pl-6">
                <li>
                  Find its corresponding three-digit code from the encoding
                  table.
                </li>
                <li>
                  Append the code to the encrypted message, separating each code
                  with a <code>.</code> (dot).
                </li>
              </ul>
            </li>
            <li>Return the encrypted message as a string of numeric codes.</li>
          </ol>
        </h6>
        <div className="flex flex-col gap-[8px]">
          <h6 className="mt-[1.5rem]">Example:</h6>
          <CodeBlock
            code={`Input:  "Hii Adarsh!"
Output: "081.090.090.000.011.040.010.180.190.080.280"`}
          />
        </div>

        <h2 className="text-headline-small font-mono mt-4">
          Decoding (Code → Text)
        </h2>
        <h6 className="mt-[1.5rem]">
          <ol className="list-decimal pl-6">
            <li>Take an encrypted numeric string as input.</li>
            <li>
              Split the string by the . separator to extract individual codes.
            </li>
            <li>
              Convert each three-digit code back into its corresponding
              character using the decoding table.
            </li>
            <li>Reconstruct and return the original text.</li>
          </ol>
        </h6>
        <div className="flex flex-col gap-[8px]">
          <h6 className="mt-[1.5rem]">Example:</h6>
          <CodeBlock
            code={`Input:  "081.090.090.000.011.040.010.180.190.080.280"
Output: "Hii Adarsh!"`}
          />
        </div>
      </div>
      <Divider />
      <div>
        <h1 className="text-display-small font-mono">
          Logic Behind Character Codes
        </h1>
        <h2 className="text-headline-small font-mono mt-4">
          Why we need three digits?
        </h2>
        <h6 className="mt-[1.5rem]">
          Each character (a-z,A-Z) can be represented by a two-digit number:
          <ul className="list-disc pl-6">
            <li>a = 01</li>
            <li>b = 02</li>
            <li>z = 26</li>
          </ul>
          <br />
          However, we need to differentiate between lowercase and uppercase
          letters. That’s where the third digit comes in. In our system:
          <ul className="list-disc pl-6">
            <li>0 represents lowercase letters</li>
            <li>1 represents uppercase letters</li>
          </ul>
          <br />
          So now, we have:
          <ul className="list-disc pl-6">
            <li>a = 010, A = 011</li>
            <li>b = 020, B = 021</li>
            <li>z = 260, Z = 261</li>
          </ul>
        </h6>

        <h2 className="text-headline-small font-mono mt-4">
          How Do We Separate Characters?
        </h2>
        <h6 className="mt-[1.5rem]">
          Now that each character has a unique numeric representation, we need a
          way to distinguish characters within an encrypted message. This is
          where the <code>.</code> (dot) separator is used.
        </h6>
        <div className="flex flex-col gap-[8px]">
          <h6 className="mt-[1.5rem]">Example:</h6>
          <CodeBlock
            code={`//       ‘H’ ‘i’ ‘i’ ‘ ‘ ‘A’ ‘d’ ‘a’ ‘r’ ‘s’ ‘h’ ‘!’
Input:  "081.090.090.000.011.040.010.180.190.080.280"
Output: "Hii Adarsh!"`}
          />
        </div>
        <h6 className="mt-[1.5rem]">
          The dot ensures that each encoded character remains separate and can
          be correctly decrypted back into text.
        </h6>
      </div>
      <Divider />
      <div>
        <h1 className="text-display-small font-mono">
          Encoding & Decoding Functions
        </h1>
        <h2 className="text-headline-small font-mono mt-4">
          Encoding function
        </h2>
        <div className="flex flex-col gap-[8px]">
          <h6 className="mt-[1.5rem]">
            Version 1: Using Loops (Iterative Approach)
          </h6>
          <CodeBlock
            code={`function encrypt(msgDecrypted, charToCode){
  let msgEncrypted = [];

  for (let char of msgDecrypted){
    if (charToCode[char]){
      msgEncrypted.push(charToCode[char])
    }
  }
  
  return msgEncrypted.join('.');
}`}
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <h6 className="mt-[1.5rem]">
            Version 2: Using String Methods (Efficient Approach)
          </h6>
          <CodeBlock
            code={`function encrypt(text, charToCode) {
  return text.split("").map(char => charToCode[char] || "").join(".");
}`}
          />
        </div>

        <h2 className="text-headline-small font-mono mt-4">
          Decoding function
        </h2>
        <div className="flex flex-col gap-[8px]">
          <h6 className="mt-[1.5rem]">
            Version 1: Using Loops (Iterative Approach)
          </h6>
          <CodeBlock
            code={`function decrypt(msgEncrypted, codeToChar){
  let msgDecrypted = "";
  let codeOfChar = msgEncrypted.split(".")

  for (let code of codeOfChar){
    if (codeToChar[code]){
      msgDecrypted += codeToChar[code];
    }
  }

  return msgDecrypted;
}`}
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <h6 className="mt-[1.5rem]">
            Version 2: Using String Methods (Efficient Approach)
          </h6>
          <CodeBlock
            code={`function decrypt(encryptedText, codeToChar) {
  return encryptedText.split(".").map(code => codeToChar[code] || "").join("");
}`}
          />
          <h6 className="mt-[1.5rem]">
            These functions efficiently convert text into its encoded form and
            back using a mapping system.
          </h6>
        </div>
      </div>
      <Divider />
      <div>
        <h1 className="text-display-small font-mono">Character Mapping</h1>
        <h2 className="text-headline-small font-mono mt-4">
          Character Mapping Object JavaScript
        </h2>
        <h6 className="mt-[1.5rem]">
          Below is the example javascript object mapping of characters to their
          respective three-digit codes:
        </h6>
      </div>
      <div className="flex flex-col gap-[8px]">
        <h6 className="">Example:</h6>
        <CodeBlock
          code={`const charCodes = {
  " " : "000",
  
  // Letters (Lowercase & Uppercase)
  "a": "010", "A": "011", 
  "b": "020", "B": "021", 
  "z": "260", "Z": "261",

  // Numbers (0-9)
  "0": "270", "1": "271", 
  "2": "272", "3": "273", 
  "9": "279",

  // Common Symbols
  "!": "280", "@": "281", 
  "?": "308", "\\": "309"
  
  // Example of the object
};`}
        />
        <h6 className="">
          This is just an example of the object. Checkout full JSON here.
        </h6>
      </div>
      <Divider />
      <div>
        <h1 className="text-display-small font-mono">About Me</h1>
        <h2 className="text-headline-small font-mono mt-4">Hey Visitors!</h2>
        <h6 className="mt-[1.5rem]">
          I’m Adarsh, a BCA graduate, and here’s the story of how I created this
          project. During my 5th semester in college, I studied the RSA
          algorithm in my syllabus. That got me curious about the world of
          cryptography!<br/><br/>One day, after my exams, I was just lying on my bed,
          thinking about making something fun. That’s when the idea of TricodeX
          popped into my mind, and I started working on it. The first version of
          the code was ready in just an hour! After some improvements and
          optimizations, I decided to turn it into a web tool so I could share
          it with you all.<br/><br/>I know this code isn’t super efficient or ready for
          complex projects, but hey—who cares? It’s just a fun project that I
          built while learning.
        </h6>
      </div>
    </section>
  );
}

export default Documentation;
