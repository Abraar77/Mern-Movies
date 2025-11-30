import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const colorMap = {
  "yellow-500": "text-yellow-500",
  "red-500": "text-red-500",
  "white": "text-white",
};

const Rating = ({ value, text, color }) => {
  const fullStars = Math.floor(value);
  const halfStars = value % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const colorClass = colorMap[color] || "text-yellow-500";

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className={`${colorClass} ml-1`} />
      ))}

      {halfStars === 1 && <FaStarHalfAlt className={`${colorClass} ml-1`} />}

      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} className={`${colorClass} ml-1`} />
      ))}

      {text && <span className="ml-2 text-white">{text}</span>}
    </div>
  );
};

Ratings.defaultProps = {
  color: "yellow-500",
};

export default Rating;
