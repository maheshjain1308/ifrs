import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { getProduct } from "@/lib/catalog";
import { ownsProduct } from "@/lib/purchases";

export default async function LearnPage(props: PageProps<"/learn/[id]">) {
  const { id } = await props.params;
  const { lesson } = await props.searchParams;

  const course = getProduct(id);
  if (!course || course.type !== "course") notFound();

  const user = await getCurrentUser();
  if (!user) redirect(`/login?next=/learn/${id}`);
  if (!(await ownsProduct(user.id, course.id))) redirect(`/products/${id}`);

  const index = Math.min(Math.max(Number(lesson) || 0, 0), course.lessons.length - 1);
  const current = course.lessons[index];

  return (
    <div className="container-x grid gap-8 py-10 lg:grid-cols-[1fr_320px]">
      <div>
        <Link href="/library" className="text-sm text-brand">← My library</Link>
        <h1 className="mt-2 text-2xl font-extrabold">{course.title}</h1>
        <div className="mt-5 aspect-video overflow-hidden rounded-2xl bg-gray-900">
          {current.videoUrl ? (
            <iframe
              src={current.videoUrl}
              title={current.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="grid h-full place-items-center p-6 text-center text-gray-300">
              <p>
                Video for this lesson hasn&apos;t been added yet.
                <br />
                <span className="text-sm text-gray-500">Set <code>videoUrl</code> for this lesson in lib/catalog.ts.</span>
              </p>
            </div>
          )}
        </div>
        <h2 className="mt-5 text-xl font-bold">
          Lesson {index + 1}: {current.title}
        </h2>
        <p className="text-gray-500">{current.duration}</p>
        <div className="mt-6 flex justify-between">
          {index > 0 ? <Link href={`?lesson=${index - 1}`} className="btn">← Previous</Link> : <span />}
          {index < course.lessons.length - 1 && (
            <Link href={`?lesson=${index + 1}`} className="btn btn-primary">Next lesson →</Link>
          )}
        </div>
      </div>
      <aside>
        <h3 className="mb-3 font-bold">Course content</h3>
        <ol className="divide-y divide-gray-200 rounded-2xl border border-gray-200">
          {course.lessons.map((l, i) => (
            <li key={l.title}>
              <Link
                href={`?lesson=${i}`}
                className={`flex justify-between gap-3 px-4 py-3 text-sm ${i === index ? "bg-blue-50 font-semibold text-brand-dark" : ""}`}
              >
                <span>{i + 1}. {l.title}</span>
                <span className="shrink-0 text-gray-500">{l.duration}</span>
              </Link>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
}
