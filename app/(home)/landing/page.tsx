import Button from "@/components/Button";
import TextInput from "@/components/Inputs/TextInput";
import Textarea from "@/components/Inputs/Textarea";
import Image from "next/image";

const Landing = () => {
	return (
		<main>
			<h1>This is landing page</h1>
			<Button>asdasd</Button>
			<TextInput
				placeholder="Search"
				label="search"
				icon={<Image src="/search.svg" alt="Search" width={24} height={24} />}
			/>

			<Textarea placeholder="kkkkkk" rows={4} />
		</main>
	);
};

export default Landing;
