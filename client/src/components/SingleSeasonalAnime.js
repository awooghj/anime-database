import React, { useState, useEffect } from "react";
import GenreTag from "./GenreTag";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SubscribeService from "../services/SubscribeService";
import "./SizeOfEachImageInList.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "200%",
    height: "50%",
  },
  media: {
    width: 375,
    height: 300,
    paddingTop: "100%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function SingleSeasonalAnime(props) {
  const [subscribing, setSubscribing] = useState("Subscribe");
  useEffect(() => {
    SubscribeService.getSubscribes().then((data) => {
      for (var i = 0; i < data.subscribes.length; i++) {
        if (data.subscribes[i].mal_id === props.anime.mal_id) {
          setSubscribing("Unsubscribe");
          console.log(subscribing);

          return;
        }
      }
    });
  }, []);

  const addToSubscribe = () => {
    if (subscribing === "Subscribe") {
      let animeSubscribed = {
        mal_id: props.anime.mal_id,
        title: props.anime.title,
        image_url: props.anime.image_url,
        airing: props.anime.airing,
        synopsis: props.anime.synopsis,
        type: props.anime.type,
        episodes: props.anime.episodes,
        score: props.anime.score,
        subsribers: props.anime.members,
        start_date: props.anime.airing_start,
        end_date: props.anime.end_date,
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
          if (data.subscribes[i].mal_id === props.anime.mal_id) {
            SubscribeService.deleteSubscribe(data.subscribes[i]._id);
            //animeMalIdToDelete = data.subscribes[i].mal_id
            return;
          }
        }
      });
      SubscribeService.deleteSubscribe(props.anime.mal_id);

      setSubscribing("Subscribe");
      //-----------------------------
    }
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log(JSON.stringify(props.anime.producers[0]));
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.anime.title}
        subheader={props.anime.airing_start}
      />
      <CardMedia
        className={classes.media}
        image={props.anime.image_url}
        title="anime visual image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Producers:{" "}
          {props.anime.producers.map((producer) => {
            return producer.name;
          })}
          <br />
          Source: {props.anime.source}
          <br />
          Score: {props.anime.score}
          <br />
          Type: {props.anime.type}
          <br />
          Episodes: {props.anime.episodes}
          <br />
          Subscribers: {props.anime.members}
          <br />
          Genre:
          <div className="tagArrangement" style={{ display: "flex" }}>
            {props.anime.genres.map((genreTag) => {
              return <GenreTag genreTag={genreTag} />;
            })}
          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={addToSubscribe}>
          {subscribing === "Subscribe" ? (
            <FavoriteBorderIcon />
          ) : (
            <FavoriteIcon />
          )}
        </IconButton>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Synopsis:</Typography>
          <Typography paragraph>{props.anime.synopsis}</Typography>
        </CardContent>
      </Collapse>
    </Card>
    // <div>
    //   <img src={props.anime.image_url} alt="" />
    // </div>
  );
}
