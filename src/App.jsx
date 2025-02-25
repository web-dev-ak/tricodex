import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./scripts/ThemeContext";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import EncryptTool from "./components/EncryptTool";
import Footer from "./components/Footer";
import Documentation from "./components/Documentation";

function App() {
  return (
    <>
      <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 max-w-[90rem] mx-auto w-full">
          <Hero />
          <Divider />
          <EncryptTool />
          <Divider />
          <Documentation />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
