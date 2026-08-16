import hero from "../../assets/hero.svg?url";
import about from "../../assets/about.svg?url";
import slider1 from "../../assets/slider-1.svg?url";
import slider2 from "../../assets/slider-2.svg?url";
import slider3 from "../../assets/slider-3.svg?url";
import gallery1 from "../../assets/gallery-1.svg?url";
import gallery2 from "../../assets/gallery-2.svg?url";
import gallery3 from "../../assets/gallery-3.svg?url";
import gallery4 from "../../assets/gallery-4.svg?url";
import team1 from "../../assets/team-1.svg?url";
import team2 from "../../assets/team-2.svg?url";
import team3 from "../../assets/team-3.svg?url";

export const images = {
  hero,
  about,
  slider: [
    { src: slider1, altKey: "slider-1" },
    { src: slider2, altKey: "slider-2" },
    { src: slider3, altKey: "slider-3" },
  ],
  gallery: [
    { src: gallery1, alt: "Galeria 1" },
    { src: gallery2, alt: "Galeria 2" },
    { src: gallery3, alt: "Galeria 3" },
    { src: gallery4, alt: "Galeria 4" },
  ],
  team: [team1, team2, team3],
} as const;
