import Cards from "./components/Cards";
import CTA from "./components/Cards/CTA";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";

const AboutUs = () => {
	return (
		<main>
			<Hero />
			<Cards />
			<FAQ />
			<CTA />
		</main>
	);
};

export default AboutUs;
