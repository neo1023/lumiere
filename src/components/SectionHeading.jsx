function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
          {label}
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-100 md:text-5xl">
          {title}
        </h2>
      </div>

      {description && (
        <p className="max-w-sm text-sm leading-7 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;