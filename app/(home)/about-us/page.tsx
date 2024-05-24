import Button from "@/components/Button";
import TextInput from "@/components/Inputs/TextInput";
import Textarea from "@/components/Inputs/Textarea";
import Modal from "@/components/Modal";
import Image from "next/image";

const AboutUs = () => {
	return (
		<main>
			<h1>This is About Us page</h1>
			{/* <Button>asdasd</Button>
			<TextInput
				placeholder="Search"
				label="search"
				icon={<Image src="/search.svg" alt="Search" width={24} height={24} />}
			/>

			<Textarea placeholder="kkkkkk" rows={4} />
			 */}
			<Modal />
		</main>
	);
};

export default AboutUs;
