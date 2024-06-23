import Link from "next/link";

const Footer = () => {
	return (
		<footer className="footer p-10 bg-base-200 text-base-content">
			<aside>
				<h2 className="text-xl font-semibold">Mentorizer</h2>
				<p>
					Skill up. Level up. Together.
					<br />
					All rights reserved Mentorizer &copy; 2024
				</p>
			</aside>
			<nav>
				<h6 className="footer-title">Services</h6>
				<Link href="/coming-soon" className="link link-hover">
					Find internships
				</Link>
				<Link href="/coming-soon" className="link link-hover">
					Be a mentor
				</Link>
				<Link href="/coming-soon" className="link link-hover">
					For companies
				</Link>
				<Link href="/coming-soon" className="link link-hover">
					Host a hackathon
				</Link>
				<Link href="/coming-soon" className="link link-hover">
					Host a Meetup
				</Link>
			</nav>
			<nav>
				<h6 className="footer-title">Company</h6>
				<Link href="/about" className="link link-hover">
					About us
				</Link>
				<Link href="/contact" className="link link-hover">
					Contact
				</Link>
				<Link href="/coming-soon" className="link link-hover">
					Jobs
				</Link>
			</nav>
			<nav>
				<h6 className="footer-title">Legal</h6>
				<Link href="/coming-soon" className="link link-hover">
					Terms of use
				</Link>
				<Link href="/coming-soon" className="link link-hover">
					Privacy policy
				</Link>
				<Link href="/coming-soon" className="link link-hover">
					Cookie policy
				</Link>
			</nav>
		</footer>
	);
};

export default Footer;
