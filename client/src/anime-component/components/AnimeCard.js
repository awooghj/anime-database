import React, { useState, useEffect } from "react";
import SubscribeService from "../../services/SubscribeService";

function AnimeCard({ anime }) {
  const [subscribing, setSubscribing] = useState("Subscribe");
  console.log("anime");
  console.log(subscribing);

  console.log(anime);

  // const checkAnimeSubcribeOrNot = () => {
  //   TodoService.getTodos().then((data) => {
  //     for (var i = 0; i < data.todos.length; i++) {
  //       if (data.todos[i]._id === anime.mal_id) {
  //         setSubscribing("Unsubscribe");
  //         return true;
  //       }
  //     }
  //     return false;
  //   });
  // };
  //========================
  useEffect(() => {
    SubscribeService.getSubscribes().then((data) => {
      for (var i = 0; i < data.subscribes.length; i++) {
        if (data.subscribes[i].mal_id === anime.mal_id) {
          setSubscribing("Unsubscribe");
          console.log(subscribing);

          return;
        }
      }
    });
  }, []);
  // SubscribeService.getSubscribes().then((data) => {
  //   for (var i = 0; i < data.subscribes.length; i++) {
  //     if (data.subscribes[i].mal_id === anime.mal_id) {
  //       setSubscribing("Unsubscribe");
  //       console.log(subscribing);

  //       return;
  //     }
  //   }
  // });
  //====================================

  const onclick = () => {
    if (subscribing === "Subscribe") {
      let animeSubscribed = {
        mal_id: anime.mal_id,
        title: anime.title,
        image_url: anime.image_url,
        airing: anime.airing,
        synopsis: anime.synopsis,
        type: anime.type,
        episodes: anime.episodes,
        score: anime.score,
        subsribers: anime.members,
        start_date: anime.start_date,
        end_date: anime.end_date,
      };
      SubscribeService.postSubscribe(animeSubscribed).then((data) => data);
      console.log("animeSubscribed");

      console.log(animeSubscribed);
      setSubscribing("Unsubscribe");
    } else if (subscribing === "Unsubscribe") {
      //-----------------------
      //let animeMalIdToDelete = 0;

      SubscribeService.getSubscribes().then((data) => {
        for (var i = 0; i < data.subscribes.length; i++) {
          if (data.subscribes[i].mal_id === anime.mal_id) {
            SubscribeService.deleteSubscribe(data.subscribes[i]._id);
            //animeMalIdToDelete = data.subscribes[i].mal_id
            return;
          }
        }
      });
      SubscribeService.deleteSubscribe(anime.mal_id);

      setSubscribing("Subscribe");
      //-----------------------------
    }
  };

  //   let animeSubscribed = {
  //     mal_id: anime.mal_id,
  //     image_url: anime.image_url,
  //     title: anime.title,
  //     airing: anime.airing,
  //     synopsis: anime.synopsis,
  //     type: anime.type,
  //     episodes: anime.episodes,
  //     score: anime.score,
  //     start_date: anime.start_date,
  //     end_date: anime.end_date,
  //     members: anime.members,
  //   };
  //   TodoService.postTodo(animeSubscribed).then((data) => data);
  // };

  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.image_url} alt="Anime Image" />
        </figure>
        <h3>{anime.title}</h3>
      </a>
      <button type="button" onClick={onclick}>
        {subscribing}
      </button>
    </article>
  );
}

export default AnimeCard;
