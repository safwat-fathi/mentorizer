import { SheetsService } from "@/lib/services/sheets.service";

// type Props = {
//   searchParams: {
//     email: string;
//     join_as: string;
//   };
// };

const sheetService = SheetsService.Instance();

const Playground = async () => {
  await sheetService.addRow({ email: "sadasd@sdsd.com", join_as: "mentee", name: "sadasdasd asdsdsdsd" });

  return (
    <main>
      <section className="container mx-auto flex min-h-[calc(100vh-68px)] flex-col justify-center gap-6">
        <h1 className="text-7xl font-medium">Playground</h1>
      </section>
    </main>
  );
};

export default Playground;
