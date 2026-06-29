function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 py-12 text-zinc-400">
      <div className="mx-auto flex w-[min(1120px,92%)] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-black tracking-[0.35em] text-yellow-400">
            Lumière
          </p>
          <p className="mt-3 text-sm">
            Every Film Leaves a Light.
          </p>
        </div>

        <p className="text-sm">
          © 2026 Lumière. Created by Sota Hatano.
        </p>
      </div>
    </footer>
  );
}

export default Footer;