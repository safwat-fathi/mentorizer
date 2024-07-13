import TextInput from "@/lib/components/Inputs/TextInput";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero min-h-[calc(100vh-68px)] bg-base-200">
      <div className="container hero-content mx-auto flex items-center justify-between text-center">
        <div className="max-w-prose">
          <h1 className="text-start text-5xl font-bold">Level Up Your Coding Skills with Expert Mentorship</h1>
          <h2 className="py-6 text-start text-xl">
            Get personalized <span className="font-bold">mentor guidance</span> from experienced developers, find{" "}
            <span className="font-bold">circles</span> to grow together, land{" "}
            <span className="font-bold">internships</span>, and <span className="font-bold">accelerate</span> your tech
            journey.
          </h2>

          <div className="flex justify-start gap-2">
            <TextInput className="w-96" placeholder="Enter your email" type="text" />
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>

        <div className="hidden flex-col gap-4 md:flex">
          <Image src="/Hero-colored.png" alt="hero" width={500} height={500} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
