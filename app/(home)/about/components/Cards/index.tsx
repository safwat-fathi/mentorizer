const Cards = () => {
	return (
		<section className="container mx-auto pb-8">
			<h2 className="font-bold text-5xl mb-8 text-center">Are you ...</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4">
				<div className="card w-96 lg:w-full bg-base-100 shadow-xl">
					<div className="card-body items-center text-center">
						<h2 className="card-title text-3xl">What is Circles?</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
							sed delectus numquam minima ut cum explicabo officiis soluta,
							laborum reiciendis, est atque ratione! Doloribus optio esse
							placeat, vero sit inventore incidunt eum eius nemo ipsum quod
							magnam perspiciatis adipisci provident consequatur, dolorum dolore
						</p>
						<div className="card-actions">
							<button className="btn btn-primary">Join circles</button>
						</div>
					</div>
				</div>

				<div className="card w-96 lg:w-full bg-base-100 shadow-xl">
					<div className="card-body items-center text-center">
						<h2 className="card-title text-3xl">Mentor ?</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
							sed delectus numquam minima ut cum explicabo officiis soluta,
							laborum reiciendis, est atque ratione! Doloribus optio esse
							placeat, vero sit inventore incidunt eum eius nemo ipsum quod
							magnam perspiciatis adipisci provident consequatur, dolorum dolore
						</p>
						<div className="card-actions">
							<button className="btn btn-primary">Start mentoring</button>
						</div>
					</div>
				</div>

				<div className="card w-96 lg:w-full bg-base-100 shadow-xl">
					<div className="card-body items-center text-center">
						<h2 className="card-title text-3xl">Company ?</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
							sed delectus numquam minima ut cum explicabo officiis soluta,
							laborum reiciendis, est atque ratione! Doloribus optio esse
							placeat, vero sit inventore incidunt eum eius nemo ipsum quod
							magnam perspiciatis adipisci provident consequatur, dolorum dolore
						</p>
						<div className="card-actions">
							<button className="btn btn-primary">Post internships</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cards;
