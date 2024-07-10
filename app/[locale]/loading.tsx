import PageLoader from "@/lib/components/Loaders/PageLoader";

export default function Loading() {
  return (
    <div className="w-full h-[75vh] flex items-center justify-center">
      <PageLoader />
    </div>
  );
}
