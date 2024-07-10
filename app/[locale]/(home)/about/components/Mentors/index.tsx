import Image from "next/image";

const Mentors = () => {
  return (
    <section className="container mx-auto mb-16">
      <div className="flex justify-center mb-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="w-2 h-auto bg-primary" />
            <h2 className="text-5xl capitalize font-bold">Become a Mentor</h2>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl italic max-w-md text-justify">
              Teaching, is the best way to learn.
            </h3>
            <h3 className="text-2xl px-2 py-1 max-w-md text-justify bg-primary text-primary-content">
              Empower the next generation and shape the future of the industry.
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:flex justify-center hidden">
          <Image
            src="/launch.png"
            className="object-contain w-[300px] h-auto"
            width={518}
            height={750}
            alt="launch"
          />
        </div>

        <div className="card shadow-lg bg-base-100 py-6 px-10">
          <ul className="list-disc flex flex-col gap-4 text-xl">
            <li>
              Choose a schedule that fits your availability, offering paid or
              free mentoring based on your preference.
            </li>
            <li>Share your expertise and inspire future software engineers.</li>
            <li>
              Mentoring keeps you at the forefront of technological advancements
              and industry trends.
            </li>
            <li>
              Be mentored by experienced professionals and gain insights from
              the real world of software development.
            </li>
            <li>Develop leadership and communication skills.</li>
            <li>
              Connect with fellow mentors, mentees, and companies seeking
              experienced software engineers.
            </li>
            <li>
              Learn from your mentees. Gain fresh perspectives and insights from
              the next generation of tech talent.
            </li>
            <li>
              Share your expertise and insights with a wider audience through
              the platform
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
