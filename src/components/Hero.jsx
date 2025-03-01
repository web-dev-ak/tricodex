import * as TypeSystem from "./TypeSystem";
import { ButtonPrimary } from "./IconButton";
import { useTheme } from "../scripts/ThemeContext"; // Import theme context
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { scrollToSection } from "../scripts/scrollAnimation";

function Hero({ encryptToolRef }) {
  const { isDark } = useTheme(); // Get dark mode state

  return (
    <main className="flex flex-col md:flex-row gap-[32px] justify-between items-center w-full px-4 sm:px-8 md:px-16 py-[6rem]">
      <div className="flex flex-col max-w-[39rem] gap-[2.5rem]">
        <TypeSystem.Hero
          heading="Tri-CodeX"
          subHeading="Learn & Play with Encryption"
          paragraph="Explore the basics of encoding and decoding, or challenge your friends with secret encrypted messages! Simple and fun."
        />
        
        <ButtonPrimary onClick={() => scrollToSection(encryptToolRef)} buttonText="Start Encrypting Your Message" />
      </div>
      {/* Apply filter dynamically using inline styles */}
      <div
        className="grid content-center"
        style={{ filter: isDark ? "invert(1)" : "invert(0)" }}
      >
        {/* <lottie-player
          // src={`${process.env.PUBLIC_URL}/tricodex-animation.json`}
          src="https://lottie.host/4db0e8e3-5fcf-4c22-b4d4-9bef79fc6b01/ImGlB9dnKB.lottie"
          background="transparent"
          speed="1"
          style={{ width: "100%", maxWidth: "624px" }}
          loop
          autoplay
        ></lottie-player> */}

        <DotLottieReact
          className="
          w-[25rem] h-[25rem] lg:w-[39rem] lg:h-[39rem] 
          max-[400px]:w-full max-[400px]:h-full 
          max-[425px]:w-[400px] max-[425px]:h-[400px]
        "
          src="https://lottie.host/717d57ad-bc27-4dc2-86be-0fbbc6738c6f/BnnvAWck6s.lottie"
          background="transparent"
          speed="1"
          // style={{ width: "100%", height: "100%", aspectRatio: "square"}}
          loop
          autoplay
        />
      </div>
    </main>
  );
}

export default Hero;
