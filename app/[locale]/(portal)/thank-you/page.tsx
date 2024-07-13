import { notFound } from "next/navigation";

type Props = {
  searchParams: {
    email: string;
    joinAs: string;
  };
};

const ThankYou = ({ searchParams }: Props) => {
  if (!searchParams.joinAs || !searchParams.email) {
    notFound();
  }

  return (
    <main>
      <section className="container mx-auto flex min-h-[calc(100vh-68px)] flex-col justify-center gap-6">
        <h1 className="text-7xl font-medium">
          Thanks for being interested in <span className="font-bold">Mentorizer</span>. We deeply appreciate it.
        </h1>

        <h2 className="text-2xl font-medium">We are currently working on to make it happen really soon.</h2>

        <div className="peer">Peer One</div>
        <div className="peer-hover:bg-primary">Peer Two</div>

        <h2 className="text-4xl font-medium">Your early join request details:</h2>

        <div className="flex flex-col gap-2 bg-primary p-4 text-primary-content">
          <h2 className="text-2xl font-medium">Email: {searchParams.email}</h2>
          <h2 className="text-2xl font-medium">Join as: {searchParams.joinAs}</h2>
        </div>

        <h2 className="text-2xl font-medium">
          If you have any questions or concerns, please feel free to reach out to us.
        </h2>
      </section>
    </main>
  );
};

export default ThankYou;
