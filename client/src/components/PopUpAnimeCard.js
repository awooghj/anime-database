import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import SingleSeasonalAnime from "./SingleSeasonalAnime";
import "./components-css/SizeOfEachImageInList.css";
import { ImageOverlay } from "react-image-overlay-effect";

export default function PopUpAnimeCard(props) {
  return (
    <Popup
      trigger={<img src={props.anime.image_url} alt="" />}
      position="center center">
      <SingleSeasonalAnime anime={props.anime} />
    </Popup>
  );
}
