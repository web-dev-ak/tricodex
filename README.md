# TricodeX: Three-Digit Character Encoding Algorithm

## Introduction
TricodeX is a custom character encoding algorithm that converts text into a structured three-digit numeric code. Each letter, number, space, and common symbol is mapped to a unique three-digit code, ensuring a consistent and reversible transformation. The primary purpose of TricodeX is to provide a simple yet effective way to encrypt and decrypt messages using JavaScript.

## Features
- **Custom Encoding**: Assigns unique three-digit codes to characters.
- **Efficient Encryption & Decryption**: Implements both iterative and functional approaches.
- **Reversible Transformation**: Allows seamless decoding of encrypted text.
- **JavaScript Implementation**: Simple and easy to integrate.

## How It Works
- Each **letter (A-Z, a-z)** is assigned a three-digit code.
- **Lowercase and uppercase letters** have distinct codes.
- **Numbers (0-9)** are mapped using a unique range.
- **Common symbols and whitespace** are also assigned specific codes.

Example Encoding:
```
Input:  "Hello!"
Output: "081.050.120.120.150.280"
```

## Installation
To use TricodeX in your project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/tricodex.git
   ```
2. Navigate to the project folder:
   ```sh
   cd tricodex
   ```
3. Open the project in your preferred code editor.

## Usage
### Encoding Function
#### Iterative Approach:
```js
function encrypt(msgDecrypted, charToCode) {
  let msgEncrypted = [];
  for (let char of msgDecrypted) {
    if (charToCode[char]) {
      msgEncrypted.push(charToCode[char]);
    }
  }
  return msgEncrypted.join('.');
}
```

#### Functional Approach:
```js
function encrypt(text, charToCode) {
  return text.split("").map(char => charToCode[char] || "").join(".");
}
```

### Decoding Function
#### Iterative Approach:
```js
function decrypt(msgEncrypted, codeToChar) {
  let msgDecrypted = "";
  let codeOfChar = msgEncrypted.split(".");
  for (let code of codeOfChar) {
    if (codeToChar[code]) {
      msgDecrypted += codeToChar[code];
    }
  }
  return msgDecrypted;
}
```

#### Functional Approach:
```js
function decrypt(encryptedText, codeToChar) {
  return encryptedText.split(".").map(code => codeToChar[code] || "").join("");
}
```

## Encoding Table
| Character | Code | Character | Code |
|-----------|------|-----------|------|
| `A` | 011 | `N` | 141 |
| `B` | 021 | `O` | 151 |
| `C` | 031 | `P` | 161 |
| `D` | 041 | `Q` | 171 |
| `E` | 051 | `R` | 181 |
| `F` | 061 | `S` | 191 |
| `G` | 071 | `T` | 201 |
| `H` | 081 | `U` | 211 |
| `I` | 091 | `V` | 221 |
| `J` | 101 | `W` | 231 |
| `K` | 111 | `X` | 241 |
| `L` | 121 | `Y` | 251 |
| `M` | 131 | `Z` | 261 |
| ` ` | 000 | `!` | 280 |
| `0` | 270 | `@` | 281 |
| `1` | 271 | `#` | 282 |
| `2` | 272 | `$` | 283 |
| `3` | 273 | `%` | 284 |
| `4` | 274 | `^` | 285 |
| `5` | 275 | `&` | 286 |
| `6` | 276 | `*` | 287 |
| `7` | 277 | `(` | 288 |
| `8` | 278 | `)` | 289 |
| `9` | 279 | `.` | 304 |

## Contributing
If you’d like to contribute to TricodeX, feel free to open a pull request or submit issues for improvements.

## License
This project is licensed under the MIT License.

## Acknowledgments
Developed for fun and learning purposes! 🚀

## About Me

### Hey Visitors!

I'm Adarsh, a BCA graduate, and here's the story of how I created this project. During my 5th semester in college, I studied the RSA algorithm in my syllabus. That got me curious about the world of cryptography!  

One day, after my exams, I was just lying on my bed, thinking about making something fun. That's when the idea of TricodeX popped into my mind, and I started working on it. The first version of the code was ready in just an hour! After some improvements and optimizations, I decided to turn it into a web tool so I could share it with you all.  

I know this code isn't super efficient or ready for complex projects, but hey-who cares? It's just a fun project that I built while learning.
