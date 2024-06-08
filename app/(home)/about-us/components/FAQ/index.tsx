import Collapse from "@/components/Collapse";

const FAQ = () => {
	return (
		<section className="container mx-auto py-8">
			<h2 className="font-bold text-5xl mb-8 text-center">FAQs</h2>
			<div className="flex justify-center mt-12">
				<div className="w-1/2 flex flex-col gap-4 justify-center">
					<Collapse
						title="What are circles?"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt voluptates optio. Distinctio aut possimus quibusdam quas velit, laudantium non maiores? Ex fugiat maiores itaque molestias nobis inventore, quas repellat sapiente ut unde in sunt ipsam. Accusantium adipisci ut explicabo ipsam sunt, consequuntur vitae illo repudiandae provident quis qui temporibus."
					/>
					<Collapse
						title="How to start mentoring?"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt voluptates optio. Distinctio aut possimus quibusdam quas velit, laudantium non maiores? Ex fugiat maiores itaque molestias nobis inventore, quas repellat sapiente ut unde in sunt ipsam. Accusantium adipisci ut explicabo ipsam sunt, consequuntur vitae illo repudiandae provident quis qui temporibus."
					/>
					<Collapse
						title="What are the fees of posting internships?"
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt voluptates optio. Distinctio aut possimus quibusdam quas velit, laudantium non maiores? Ex fugiat maiores itaque molestias nobis inventore, quas repellat sapiente ut unde in sunt ipsam. Accusantium adipisci ut explicabo ipsam sunt, consequuntur vitae illo repudiandae provident quis qui temporibus."
					/>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
