const Cards = () => {
  return (
    <section className="container mx-auto pb-8">
      <h2 className="mb-8 text-center text-5xl font-bold">Are you ...</h2>
      <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl lg:w-full">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">What is Circles?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sed delectus numquam minima ut cum
              explicabo officiis soluta, laborum reiciendis, est atque ratione! Doloribus optio esse placeat, vero sit
              inventore incidunt eum eius nemo ipsum quod magnam perspiciatis adipisci provident consequatur, dolorum
              dolore
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Join circles</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl lg:w-full">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">Mentor ?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sed delectus numquam minima ut cum
              explicabo officiis soluta, laborum reiciendis, est atque ratione! Doloribus optio esse placeat, vero sit
              inventore incidunt eum eius nemo ipsum quod magnam perspiciatis adipisci provident consequatur, dolorum
              dolore
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Start mentoring</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl lg:w-full">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl">Company ?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sed delectus numquam minima ut cum
              explicabo officiis soluta, laborum reiciendis, est atque ratione! Doloribus optio esse placeat, vero sit
              inventore incidunt eum eius nemo ipsum quod magnam perspiciatis adipisci provident consequatur, dolorum
              dolore
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
