type Props = {
	title: string;
	content: string;
};

const Collapse = ({ title, content }: Props) => {
	return (
		<div className="collapse collapse-arrow bg-white shadow-lg">
			<input type="radio" name="my-accordion-2" defaultChecked />
			<div className="collapse-title text-xl font-medium">{title}</div>
			<div className="collapse-content">
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Collapse;
