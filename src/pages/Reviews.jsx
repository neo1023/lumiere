import reviews from "../data/reviews";
import ReviewCard from "../components/ReviewCard";

function Reviews() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 pt-28 text-zinc-100">
      <section className="mx-auto w-[min(1120px,92%)]">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
          All Reviews
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          Movie Reviews
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
          これまでに観た映画のレビュー一覧。
        </p>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Reviews;