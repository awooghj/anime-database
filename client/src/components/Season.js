import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YearAndSeasonList from "./YearAndSeasonList";
import ShowAllAnimeInThatSeason from "./ShowAllAnimeInThatSeason";
import CarouselRender from "./CarouselRender";

export default function Season() {
  const [year, setYear] = useState(2021);
  const [season, setSeason] = useState("winter");

  return (
    <>
      <CarouselRender setYear={setYear} setSeason={setSeason} />

      <ShowAllAnimeInThatSeason year={year} season={season} />
    </>
  );
}
