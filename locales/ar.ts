import about from "./about/ar";
import global from "./global/ar";
import comingSoon from "./coming-soon/ar";
import mentorsGuide from "./guides/mentors/ar";
import menteesGuide from "./guides/mentees/ar";
import circlesGuide from "./guides/circles/ar";
import organizationsGuide from "./guides/organizations/ar";
import joinUs from "./joinus/ar";
import contactUs from "./contact-us/ar";
import thankYou from "./thank-you/ar";

const ar = {
  global,
  about,
  comingSoon,
  menteesGuide,
  mentorsGuide,
  circlesGuide,
  organizationsGuide,
  joinUs,
  contactUs,
  thankYou,
} as const;

export default ar;
