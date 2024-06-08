import TextInput from "@/components/Inputs/TextInput";

const CTA = () => {
	return (
		<section className="bg-primary py-8">
			<div className="container mx-auto">
				<div className="flex flex-col items-center">
					<h1 className="text-5xl text-white font-bold">Hello there</h1>
					<p className="py-6 text-white max-w-lg">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>

					<div className="flex gap-4 items-center">
						<TextInput placeholder="Email" />
						<button className="btn btn-accent">Get Started</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
