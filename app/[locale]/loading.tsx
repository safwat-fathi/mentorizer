import PageLoader from "@/lib/components/Loaders/PageLoader";

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <PageLoader />
    </div>
  );
}
