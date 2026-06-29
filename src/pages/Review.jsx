import { Link, useParams } from "react-router-dom";
import reviews from "../data/reviews";
import Rating from "../components/Rating";

function Review() {
  const { slug } = useParams();
  const review = reviews.find((movie) => movie.slug === slug);

  if (!review) {
    return (
      <main className="min-h-screen bg-zinc-950 px-6 pt-28 text-zinc-100">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-black">映画が見つかりません。</h1>
          <Link className="mt-6 inline-block text-yellow-300" to="/">
            トップへ戻る
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden px-6 pt-28 pb-20">
        <div className="absolute inset-0 opacity-20">
          <img
            src={review.poster}
            alt=""
            className="h-full w-full object-cover blur-2xl"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/90 to-zinc-950" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <Link
            className="mb-10 inline-block text-sm font-bold text-yellow-300 transition hover:text-yellow-200"
            to="/reviews"
          >
            ← Reviewsへ戻る
          </Link>

          <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:items-center">
            <img
              src={review.poster}
              alt={review.title}
              className="w-full rounded-[34px] border border-white/10 object-cover shadow-2xl shadow-black/50"
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
                Lumière Review
              </p>

              <h1 className="mt-5 text-5xl font-black leading-none tracking-tight md:text-7xl">
                {review.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 font-bold text-yellow-200">
                  <Rating value={review.rating} />
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-zinc-300">
                  {review.year}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-zinc-300">
                  {review.director}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-zinc-300">
                  {review.genre}
                </span>
              </div>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
                {review.comment}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {review.moodTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1120px,92%)] gap-6 py-10 md:grid-cols-3">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
            Good Points
          </p>
          <p className="mt-5 leading-8 text-zinc-300">{review.goodPoints}</p>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
            Weak Points
          </p>
          <p className="mt-5 leading-8 text-zinc-300">{review.weakPoints}</p>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
            Summary
          </p>
          <p className="mt-5 leading-8 text-zinc-300">{review.summary}</p>
        </div>
      </section>


      <section className="mx-auto w-[min(900px,92%)] py-20">
  <div className="space-y-12">
    <article>
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
        No Spoiler
      </p>
      <h2 className="mt-4 text-3xl font-black">ネタバレなし感想</h2>
      <p className="mt-6 text-lg leading-10 text-zinc-300">
        {review.noSpoiler}
      </p>
    </article>

    <article>
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
        Favorite Scene
      </p>
      <h2 className="mt-4 text-3xl font-black">心に残ったシーン</h2>
      <p className="mt-6 text-lg leading-10 text-zinc-300">
        {review.favoriteScene}
      </p>
    </article>

    <article className="rounded-[32px] border border-yellow-400/20 bg-yellow-400/10 p-8">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-300">
        Quote
      </p>
      <p className="mt-5 text-2xl font-black leading-relaxed text-zinc-100">
        “{review.quote}”
      </p>
    </article>

    <details className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
      <summary className="cursor-pointer text-lg font-black text-yellow-300">
        ネタバレあり感想を読む
      </summary>

      <p className="mt-6 text-lg leading-10 text-zinc-300">
        {review.spoiler}
      </p>
    </details>
  </div>
</section>

      <section className="mx-auto w-[min(900px,92%)] py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Final Note
        </p>

        <h2 className="mt-4 text-3xl font-black md:text-5xl">
          この映画が残した光
        </h2>

        <p className="mt-8 text-lg leading-10 text-zinc-300">
          {review.summary}
        </p>
      </section>
    </main>
  );
}

export default Review;