import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-[min(1120px,92%)] items-center justify-between">
        <Link
          to="/"
          className="text-lg font-black tracking-[0.35em] text-yellow-400"
        >
          Lumière
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link className="text-sm font-medium text-zinc-300 transition hover:text-yellow-300" to="/">
            Home
          </Link>
          <Link className="text-sm font-medium text-zinc-300 transition hover:text-yellow-300" to="/reviews">
            Reviews
          </Link>
          <Link className="text-sm font-medium text-zinc-300 transition hover:text-yellow-300" to="/">
            Ranking
          </Link>
          <Link className="text-sm font-medium text-zinc-300 transition hover:text-yellow-300" to="/">
            About
          </Link>
        </div>

        <button className="rounded-full border border-yellow-400/30 px-4 py-2 text-xs font-bold text-yellow-300 transition hover:bg-yellow-400 hover:text-zinc-950">
          Search
        </button>
      </nav>
    </header>
  );
}

export default Navbar;