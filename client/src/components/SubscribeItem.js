import React, { useRef } from "react";
import { ACTIONS } from "./Subscribes";
import SubscribeService from "../services/SubscribeService";
import "./components-css/SubscribeImage.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import TrailersPopUp from "./TrailersPopUp";
import RatingStatistic from "./RatingStatistic";
import "./components-css/Modal.css";

export default function SubscribeItem(props) {
  console.log(props.subscribe.mal_id);
  console.log(props.subscribe);

  return (
    <tr>
      {/* this shows what place the player ended up in
                  , since we already sort our scoreBoard in 
                  descending order, we will just output index plus
                  one */}
      <th scope="row">
        {props.subscribe.title}
        <div>
          <img src={props.subscribe.image_url} alt="" className="subImage" />
          <Popup
            className="trailer-popup"
            trigger={<button>See the trailers!</button>}
            position="center center"
            modal
            nested>
            <TrailersPopUp mal_id={props.subscribe.mal_id} />
          </Popup>
        </div>
      </th>

      {/* <td>{props.subscribe.airing.toString()}</td> */}
      <td>{props.subscribe.synopsis}</td>
      <td>{props.subscribe.type}</td>
      <td>{props.subscribe.episodes}</td>
      <td className="first">
        {props.subscribe.score}
        <Popup
          className="rating-popup"
          trigger={<button>See the rating details!</button>}
          position="center center"
          modal
          nested>
          <RatingStatistic
            mal_id={props.subscribe.mal_id}
            totalScore={props.subscribe.score}
          />
        </Popup>
      </td>
      <td>{props.subscribe.subsribers}</td>
      <td>{props.subscribe.start_date}</td>
      {/* <td>{props.subscribe.end_date}</td> */}
      <td>
        <button
          onClick={() => {
            props.dispatch({
              type: ACTIONS.DELETE_SUBSCRIBE,
              payload: { title: props.subscribe.title },
            });

            SubscribeService.deleteSubscribe(props.subscribe._id);
          }}>
          Delete
        </button>
      </td>
    </tr>
  );
}
