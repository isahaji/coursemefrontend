import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const Cards = ({ url, title, Desc, link, rating, youtube }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-400 rounded-xl max-w-72 w-72">
      <div className="p-4 w-72 max-w-72">
        <img src={url} className="rounded-xl" alt={title} />
      </div>

      <div className="">
        <div className="flex flex-col items-center pb-3">
          <h2 className="text-gray-700 text-3xl dark:text-gray-50 font-semibold">{title}</h2>
        </div>
        <div className="ml-2 p-2 pb-4 divide-y-2">
          <div className="text-xs cursor-text pb-4 dark:text-gray-50">{Desc}</div>
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((ratingIndex) => (
              <StarIcon
                key={ratingIndex}
                className={`${
                  rating > ratingIndex ? "text-yellow-400" : "text-gray-200"
                } h-5 w-5 flex-shrink-0`}
              />
            ))}
          </div>
          <div className="flex pt-4 justify-center">
            {" "}
            <Link to={`/courses/${title}/${Desc}/${rating}/${youtube}`}>
              {" "}
              <button className="bg-green-400 rounded-lg hover:bg-green-500 ring-2 ring-green-400 focus:ring-offset-2 text-gray-50 p-2 mt-2">
                {" "}
                Learn More{" "}
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
