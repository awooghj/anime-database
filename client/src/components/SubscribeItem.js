import React from "react";
import { ACTIONS } from "./Subscribes";
import SubscribeService from "../services/SubscribeService";

export default function SubscribeItem(props) {
  console.log(props.subscribe);
  console.log(props.subscribe.airing);
  return (
    <tr>
      {/* this shows what place the player ended up in
                  , since we already sort our scoreBoard in 
                  descending order, we will just output index plus
                  one */}
      <th scope="row">{props.subscribe.title}</th>
      <td>{props.subscribe.image_url}</td>
      <td>{props.subscribe.airing.toString()}</td>
      <td>{props.subscribe.synopsis}</td>
      <td>{props.subscribe.type}</td>
      <td>{props.subscribe.episodes}</td>
      <td>{props.subscribe.score}</td>
      <td>{props.subscribe.subsribers}</td>
      <td>{props.subscribe.start_date}</td>
      <td>{props.subscribe.end_date}</td>
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
