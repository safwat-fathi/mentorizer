import Cards from "./components/Cards";
import Circles from "./components/Circles";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Internships from "./components/Internships";
import Mentors from "./components/Mentors";

const AboutUs = () => {
	return (
		<main>
			<Hero />
			<Circles />
			<Internships />
			<Mentors />
			<FAQ />
			<CTA />
		</main>
	);
};

export default AboutUs;
