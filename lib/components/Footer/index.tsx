import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

const Footer = async () => {
  const tGlobal = await getScopedI18n("global");
  const tFooter = await getScopedI18n("global.footer");

  return (
    <footer className="footer bg-base-200 p-10 text-base-content">
      <aside>
        <h2 className="font-messiri text-2xl font-semibold">{tGlobal("title")}</h2>
        <p>{tGlobal("motto")}</p>
        <p>{tFooter("allRightsReserved")} &copy; 2024</p>
      </aside>

      <nav>
        <h6 className="footer-title">{tFooter("services")}</h6>
        <Link href="/coming-soon" className="link-hover link capitalize">
          {tFooter("beAMentor")}
        </Link>
        <Link href="/coming-soon" className="link-hover link capitalize">
          {tFooter("startACircle")}
        </Link>
        <Link href="/coming-soon" className="link-hover link capitalize">
          {tFooter("findInternships")}
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title">{tFooter("forCompanies")}</h6>
        <Link href="/coming-soon" className="link-hover link">
          {tFooter("hostMeetup")}
        </Link>
        <Link href="/coming-soon" className="link-hover link">
          {tFooter("hostHackathon")}
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title">{tGlobal("title")}</h6>
        <Link href="/" className="link-hover link capitalize">
          {tFooter("aboutUs")}
        </Link>
        <Link href="/contact-us" className="link-hover link capitalize">
          {tFooter("contactUs")}
        </Link>
        {/* <Link href="/coming-soon" className="link-hover link capitalize">
          Jobs
        </Link> */}
      </nav>
      <nav>
        <h6 className="footer-title">{tFooter("guides")}</h6>
        <Link href="/guides/mentees" className="link-hover link capitalize">
          {tFooter("menteesGuide")}
        </Link>
        <Link href="/guides/mentors" className="link-hover link capitalize">
          {tFooter("mentorsGuide")}
        </Link>
        <Link href="/guides/circles" className="link-hover link capitalize">
          {tFooter("circlesGuide")}
        </Link>
      </nav>
      {/* <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/coming-soon" className="link-hover link">
          Terms of use
        </Link>
        <Link href="/coming-soon" className="link-hover link">
          Privacy policy
        </Link>
        <Link href="/coming-soon" className="link-hover link">
          Cookie policy
        </Link>
      </nav> */}
    </footer>
  );
};

export default Footer;
