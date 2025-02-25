import React from "react";
import * as TypeSystem from "./TypeSystem";
import { ButtonPrimary } from "./IconButton";
import { useTheme } from "../scripts/ThemeContext"; // Import theme context

function Hero() {
  const { isDark } = useTheme(); // Get dark mode state

  return (
    <main className="flex flex-col md:flex-row gap-[32px] justify-between items-center w-full px-4 sm:px-8 md:px-16 py-[6rem]">
      <div className="flex flex-col max-w-[39rem] gap-[2.5rem]">
        <TypeSystem.Hero
          heading="Tri-CodeX"
          subHeading="Learn & Play with Encryption"
          paragraph="Explore the basics of encoding and decoding, or challenge your friends with secret encrypted messages! Simple and fun."
        />
        <ButtonPrimary buttonText="Start Encrypting Your Message" />
      </div>
      {/* Apply filter dynamically using inline styles */}
      <div
        className="flex max-w-[39rem] min-w-[20rem]"
        style={{ filter: isDark ? "invert(1)" : "invert(0)" }}
      >
        <lottie-player
          src="../../public/tricodex-animation.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", maxWidth: "624px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </main>
  );
}

export default Hero;
