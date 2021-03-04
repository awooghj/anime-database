import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YearAndSeasonList from "./YearAndSeasonList";
import ShowAllAnimeInThatSeason from "./ShowAllAnimeInThatSeason";

export default function CarouselRender(props) {
  const [seasonArchive, SetAnimeList] = useState([]);

  const FetchSeasonArchive = async (year, season) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/season/archive`
    ).then((res) => res.json());
    SetAnimeList(temp.archive.slice(0, 22));
  };

  useEffect(() => {
    FetchSeasonArchive();
  }, []);
  console.log(seasonArchive.length);

  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable>
        {seasonArchive.map((year) => {
          return (
            <YearAndSeasonList
              yearAndSeason={year}
              setYear={props.setYear}
              setSeason={props.setSeason}
            />
          );
        })}
        {/* <YearAndSeasonList yearAndSeason={animeList} />; */}
      </Carousel>
      {/* <ShowAllAnimeInThatSeason year={2021} season={"winter"} /> */}
    </>
  );
}
