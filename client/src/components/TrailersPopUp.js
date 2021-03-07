import React, { useEffect, useState } from "react";
import TrailerInYoutube from "./TrailerInYoutube";

export default function TrailersPopUp(props) {
  const [trailers, setTrailers] = useState([]);

  const fetchTrailers = async (mal_id) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/anime/${mal_id}/videos`
    ).then((res) => res.json());

    setTrailers(temp.promo);
    console.log(trailers);
  };

  useEffect(() => {
    fetchTrailers(props.mal_id);
  }, []);

  return (
    <div>
      {trailers.map((trailer) => {
        return (
          <TrailerInYoutube
            title={trailer.title}
            video_url={trailer.video_url}
          />
        );
      })}
    </div>
  );
}
