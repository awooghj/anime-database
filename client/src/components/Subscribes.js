import React, { useEffect, useState, useReducer } from "react";
import SubscribeItem from "./SubscribeItem";
import SubscribeService from "../services/SubscribeService";

////

export const ACTIONS = {
  LOAD_SUBSCRIBES: "load-subscribes",
  DELETE_SUBSCRIBE: "delete-subscribe",
};

function reducer(subscribes, action) {
  switch (action.type) {
    case ACTIONS.LOAD_SUBSCRIBES:
      return action.payload.subscribesInDB;

    case ACTIONS.DELETE_SUBSCRIBE:
      return subscribes.filter(
        (subscribe) => subscribe.title !== action.payload.title
      );

    default:
      return subscribes;
  }
}

///

export default function Subscribes() {
  //const [subscribes, setSubscribes] = useState([]);
  var [subscribes, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    SubscribeService.getSubscribes().then((data) => {
      //setSubscribes(data.subscribes);
      dispatch({
        type: ACTIONS.LOAD_SUBSCRIBES,
        payload: { subscribesInDB: data.subscribes },
      });
    });
  }, []);
  console.log("subs1");
  console.log(subscribes);
  console.log("subs2");

  return (
    <table className="table  my-3">
      <thead>
        <tr>
          {/* # sign is the place the user got in */}
          <th scope="col">title</th>
          {/* <th scope="col">airing</th> */}
          <th scope="col">synopsis</th>
          <th scope="col">type</th>
          <th scope="col">episodes</th>
          <th scope="col">score</th>
          <th scope="col">subsribers</th>
          <th scope="col">start_date</th>
          {/* <th scope="col">end_date</th> */}
        </tr>
      </thead>
      <tbody>
        {subscribes.map((subscribe) => {
          console.log(subscribe);
          // console.log(subscribe.subscribes);
          return (
            <SubscribeItem
              key={subscribe._id}
              subscribe={subscribe}
              dispatch={dispatch}
            />
          );
        })}
      </tbody>
    </table>
  );
}
