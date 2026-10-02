import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-24 text-center">
      <h1 className="text-3xl font-extrabold">Page not found</h1>
      <p className="mt-3 text-gray-600">We couldn&apos;t find what you were looking for.</p>
      <Link href="/#catalog" className="btn btn-primary mt-8">Browse products</Link>
    </div>
  );
}
