function Rating({ value }) {
  const fullStars = Math.floor(value);
  const emptyStars = 5 - fullStars;

  const stars = "★".repeat(fullStars) + "☆".repeat(emptyStars);

  return (
    <span className="text-yellow-300">
      {stars} {value.toFixed(1)}
    </span>
  );
}

export default Rating;