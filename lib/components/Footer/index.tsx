import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 p-10 text-base-content">
      <aside>
        <h2 className="font-messiri text-2xl font-semibold">Mentorizer</h2>
        <p>
          Skill up. Level up. Together.
          <br />
          All rights reserved Mentorizer &copy; 2024
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/coming-soon" className="link-hover link capitalize">
          Be a mentor
        </Link>
        <Link href="/coming-soon" className="link-hover link capitalize">
          start a circle
        </Link>
        <Link href="/coming-soon" className="link-hover link capitalize">
          Find internships
        </Link>
        {/* <Link href="/coming-soon" className="link link-hover">
          For companies
        </Link>
        <Link href="/coming-soon" className="link link-hover">
          Host a hackathon
        </Link>
        <Link href="/coming-soon" className="link link-hover">
          Host a Meetup
        </Link> */}
      </nav>
      <nav>
        <h6 className="footer-title">mentorizer</h6>
        <Link href="/about" className="link-hover link capitalize">
          About us
        </Link>
        <Link href="/contact" className="link-hover link capitalize">
          Contact us
        </Link>
        {/* <Link href="/coming-soon" className="link-hover link capitalize">
          Jobs
        </Link> */}
      </nav>
      <nav>
        <h6 className="footer-title">guides</h6>
        <Link href="/guides" className="link-hover link capitalize">
          Mentees guide
        </Link>
        <Link href="/coming-soon" className="link-hover link capitalize">
          Mentors guide
        </Link>
        <Link href="/coming-soon" className="link-hover link capitalize">
          Circles guide
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
