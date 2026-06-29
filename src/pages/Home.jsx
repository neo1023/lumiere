import { useState } from "react";
import reviews from "../data/reviews";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

function Home() {
  const [selectedMood, setSelectedMood] = useState(null);
  const filteredReviews = selectedMood
    ? reviews.filter((review) => review.moodTags.includes(selectedMood))
    : reviews;

  const visibleReviews = filteredReviews.length > 0 ? filteredReviews : reviews;
  const todayMovie = visibleReviews[0];

  const averageRating =
    visibleReviews.reduce((sum, review) => sum + review.rating, 0) / visibleReviews.length;

  const genreCounts = visibleReviews.reduce((counts, review) => {
    counts[review.genre] = (counts[review.genre] || 0) + 1;
    return counts;
  }, {});

  const favoriteGenre = Object.entries(genreCounts).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0] || "-";

  const editorsPick = visibleReviews[0];

  const moods = [...new Set(reviews.flatMap((review) => review.moodTags))];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16 text-center">
            <div className="absolute inset-0 opacity-25">
                <div className="flex h-full w-full scale-110 gap-6 rotate-[-8deg]">
                    {filteredReviews.map((review) => (
                        <img
                            key={review.slug}
                            src={review.poster}
                            alt={review.title}
                            className="h-[120%] w-1/3 object-cover blur-[1px]"
                        />
                    ))}
                </div>
            </div>
        
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,178,94,0.22),transparent_34%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-zinc-950/70 to-zinc-950" />

        <div className="relative z-10 max-w-4xl animate-fade-in-up">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.6em] text-yellow-400">
            Lumière
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
            Every Film
            <br />
            Leaves a Light.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            映画の余韻を、少しだけ長く灯す場所。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#today"
              className="rounded-full bg-yellow-400 px-7 py-3 text-sm font-bold text-zinc-950 transition hover:bg-yellow-300"
            >
              今日の映画を見る
            </a>

            <a
              href="#latest"
              className="rounded-full border border-yellow-400/40 px-7 py-3 text-sm font-bold text-yellow-300 transition hover:bg-yellow-400/10"
            >
              Reviews
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center text-zinc-500">
            <p className="text-xs uppercase tracking-[0.4em]">
                Scroll
            </p>

            <div className="mt-2 animate-bounce text-lg">
                ↓
            </div>
        </div>
      </section>



      <section id="today" className="mx-auto w-[min(1120px,92%)] py-20 animate-fade-in-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(250,204,21,0.15),transparent_45%)]" />
        <SectionHeading
          label="Today's Movie"
          title={todayMovie.title}
          description={todayMovie.summary}
        />

        <div className="mt-12 grid gap-6 overflow-hidden rounded-[36px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/[0.04] to-zinc-950 shadow-2xl shadow-black/40 lg:grid-cols-[1fr_420px]">
          <img
            src={todayMovie.poster}
            alt={todayMovie.title}
            className="w-full
            rounded-[36px]
            shadow-[0_40px_120px_rgba(0,0,0,0.55)]
            transition
            duration-500
            hover:scale-[1.02]
            "
          />

          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-yellow-300">★★★★★ {todayMovie.rating.toFixed(1)}</p>

            <h2 className="mt-4 text-6xl lg:text-7xl font-black leading-none">
              {todayMovie.title}
            </h2>

            <p className="mt-4 text-sm text-zinc-400">
              {todayMovie.year} / {todayMovie.director} / {todayMovie.genre}
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
              {todayMovie.summary}
            </p>

            <Link
              to={`/review/${todayMovie.slug}`}
              className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-bold transition"
            >
              Read Review →
            </Link>
          </div>
        </div>
      </section>

      <section id="latest" className="mx-auto w-[min(1120px,92%)] py-20 animate-fade-in-up">
        <SectionHeading
            label="Now Showing"
            title="Latest Reviews"
            description="最近観た映画たち。評価だけじゃなく、その映画が残した余韻まで記録する。"
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,92%)] py-20 animate-fade-in-up">
        <div className="grid overflow-hidden rounded-[36px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-white/[0.04] to-zinc-950 shadow-2xl shadow-black/40 lg:grid-cols-[1fr_420px]">
            <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
                    Editor&apos;s Pick
                </p>

                <h2 className="mt-5 text-6xl lg:text-7xl font-black leading-none">
                    {editorsPick.title}
                </h2>

                <p className="mt-5 text-yellow-300">
                     ★★★★★ {editorsPick.rating.toFixed(1)}
                </p>

                <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-300">
                    “{editorsPick.summary}”
                </p>

                <Link
                    to={`/review/${editorsPick.slug}`}
                    className="mt-10 w-fit rounded-full bg-yellow-400 px-7 py-3 text-sm font-bold text-zinc-950 transition hover:bg-yellow-300"
                >
                    Read Featured Review →
                </Link>
            </div>

            <img
                src={editorsPick.poster}
                alt={editorsPick.title}
                className="h-[520px] w-full object-cover"
            />
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,92%)] py-20 animate-fade-in-up">
        <SectionHeading
            label="Mood"
            title="Find by Feeling"
            description="今日はどんな気分で映画を観たい？ジャンルではなく、感情から映画を探す。"
        />

            <div className="flex flex-wrap gap-3">
                {moods.map((mood) => (
                <button
                    key={mood}
                    onClick={() => setSelectedMood(mood)}
                    className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                        selectedMood === mood
                        ? "border-yellow-400 bg-yellow-400 text-zinc-950"
                        : "border-white/10 bg-white/[0.04] text-zinc-200 hover:border-yellow-400/40 hover:bg-yellow-400 hover:text-zinc-950"
                    }`}
                >
                        {mood}
                </button>
                ))}
            </div>
            {selectedMood && (
                <button
                    onClick={() => setSelectedMood(null)}
                    className="mt-6 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-zinc-300 transition hover:border-yellow-400/40 hover:text-yellow-300"
                >
                    Clear Filter
                </button>
            )}
       </section>




      <section className="mx-auto w-[min(1120px,92%)] py-20 animate-fade-in-up">
        <SectionHeading
            label="Film Diary"
            title="Editor's Cinema Log"
            description="観た映画の数、平均評価、好きなジャンル。小さな記録が、自分だけの映画史になる。"
        />

    <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-bold text-zinc-400">Films Reviewed</p>
            <p className="mt-5 text-5xl font-black text-yellow-300">
                {reviews.length}
            </p>
            <p className="mt-3 text-sm text-zinc-500">films in Lumière</p>
        </div>

    <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
      <p className="text-sm font-bold text-zinc-400">Average Rating</p>
      <p className="mt-5 text-5xl font-black text-yellow-300">
        {averageRating.toFixed(1)}
      </p>
      <p className="mt-3 text-sm text-zinc-500">out of 5.0</p>
    </div>

    <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
      <p className="text-sm font-bold text-zinc-400">Favorite Genre</p>
      <p className="mt-5 text-5xl font-black text-yellow-300">
        {favoriteGenre}
      </p>
      <p className="mt-3 text-sm text-zinc-500">most watched mood</p>
    </div>
    </div>
    </section>

      <Footer />

    </main>
  );
}

export default Home;