import Rating from "./Rating";
import { Link } from "react-router-dom";

function ReviewCard({ review }) {
  return (
    <Link className="group block" to={`/review/${review.slug}`}>
      <article className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/40">
        <div className="overflow-hidden">
          <img
            src={review.poster}
            alt={review.title}
            className="h-[430px] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-yellow-400">{review.year}</span>
            <Rating value={review.rating} />
          </div>

          <h3 className="text-2xl font-black text-zinc-50">{review.title}</h3>

          <p className="mt-4 line-clamp-3 text-sm leading-7 text-zinc-400">
            {review.comment}
          </p>

          <p className="mt-6 text-sm font-bold text-yellow-300">
            Read Review →
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ReviewCard;