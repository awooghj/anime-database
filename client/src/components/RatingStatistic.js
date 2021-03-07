import React, { useState, useEffect } from "react";

export default function RatingStatistic(props) {
  const [allRatings, setAllRatings] = useState([]);

  const fetchRatings = async (mal_id) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/anime/${mal_id}/stats`
    ).then((res) => res.json());

    setAllRatings(temp.scores);
    console.log(allRatings);
  };

  useEffect(() => {
    fetchRatings(props.mal_id);
  }, []);

  return <div></div>;
}
