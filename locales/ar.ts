import about from "./about/ar";
import global from "./global/ar";
import comingSoon from "./coming-soon/ar";
import mentorsGuide from "./guides/mentors/ar";
import menteesGuide from "./guides/mentees/ar";
import circlesGuide from "./guides/circles/ar";

const ar = {
  global,
  about,
  comingSoon,
  menteesGuide,
  mentorsGuide,
  circlesGuide,
} as const;

export default ar;
