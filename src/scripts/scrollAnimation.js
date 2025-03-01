export const scrollToSection = (ref) => {
  if (ref?.current) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error("Scroll target not found: ref is null");
  }
};
