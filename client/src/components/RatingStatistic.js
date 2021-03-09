import React, { useState, useEffect } from "react";
import Rating from "react-rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

export default function RatingStatistic(props) {
  const [allRatings, setAllRatings] = useState({});
  const [totalRaters, setTotalRaters] = useState(0);
  console.log(props.totalScore / 2);

  const fetchRatings = async (mal_id) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/anime/${mal_id}/stats`
    ).then((res) => res.json());

    console.log(temp.scores);
    setAllRatings(temp.scores);
    setTotalRaters(temp.total);
  };

  let ratingArray = [];

  for (var a in allRatings) {
    var val = allRatings[a];
    console.log(a + " " + val["percentage"] + " " + val["votes"]);
    ratingArray.push({
      rating: a,
      percentage: val["percentage"],
      votingPeople: val["votes"],
    });
  }

  useEffect(() => {
    fetchRatings(props.mal_id);
  }, []);

  return (
    <div>
      <Rating
        emptySymbol={<StarBorderIcon />}
        fullSymbol={<StarIcon />}
        initialRating={props.totalScore / 2}
        fractions={2}
        readonly
      />
      Overall: {props.totalScore}
      <br />
      <br />
      <div>
        {ratingArray.map((ratingStatistic) => {
          return (
            <>
              <Rating
                emptySymbol={<StarBorderIcon />}
                fullSymbol={<StarIcon />}
                initialRating={ratingStatistic.rating / 2}
                fractions={2}
                readonly
              />
              <h7> </h7>
              <h7>
                {ratingStatistic.percentage}% ({ratingStatistic.votingPeople})
              </h7>

              <br />
            </>
          );
        })}
      </div>
      <br />
      <div>Total raters: {totalRaters}</div>
    </div>
  );
}
