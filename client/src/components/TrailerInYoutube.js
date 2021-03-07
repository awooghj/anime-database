import React from "react";

export default function TrailerInYoutube(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <iframe
        title={props.title}
        width="420"
        height="315"
        src={props.video_url}></iframe>
    </div>
  );
}
