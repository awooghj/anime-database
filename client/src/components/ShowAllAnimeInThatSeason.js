import React, { useState, useEffect } from "react";
import SingleSeasonalAnime from "./SingleSeasonalAnime";
import Box from "@material-ui/core/Box";
import PopUpAnimeCard from "./PopUpAnimeCard";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ShowAllAnimeInThatSeason(props) {
  const [animesInThisSeason, setAnimesInThisSeason] = useState([]);
  const classes = useStyles();
  const FetchSeasonArchive = async (year, season) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/season/${year}/${season}`
    ).then((res) => res.json());
    console.log(temp.anime);
    console.log("get the seasonal animes");
    // setAnimesInThisSeason(temp.anime);
    let numberOfTop25PercentAnimeOfTheSeason = Math.ceil(
      temp.anime.length * 0.25
    );

    setAnimesInThisSeason(
      temp.anime.slice(0, numberOfTop25PercentAnimeOfTheSeason)
    );

    console.log(animesInThisSeason);
  };
  // FetchSeasonArchive(props.year, props.season);
  useEffect(() => {
    FetchSeasonArchive(props.year, props.season);
  }, [props.season, props.year]);
  return (
    <div className={classes.root}>
      {props.year} {props.season}
      <br />
      <Grid container spacing={3}>
        <Grid item xs>
          {animesInThisSeason.map((anime) => {
            return <PopUpAnimeCard anime={anime} />;
          })}
        </Grid>
      </Grid>
      {/* <Box
        display="flex"
        alignItems="flex-start"
        flexDirection="row"
        flexWrap="nowrap"
        p={0}
        m={0}
        bgcolor="background.paper"
        css={{ maxWidth: 1000 }}>
        {animesInThisSeason.map((anime) => {
          return (
            <Box p={1} bgcolor="grey.300"> */}
      {/* <SingleSeasonalAnime anime={anime} /> */}
      {/* <PopUpAnimeCard anime={anime} />
            </Box>
          );
        })}
      </Box> */}
    </div>
  );
}

// <Box
//         display="flex"
//         alignItems="flex-start"
//         flexDirection="row"
//         flexWrap="nowrap"
//         p={0}
//         m={0}
//         bgcolor="background.paper"
//         css={{ maxWidth: 1000 }}>
//         {animesInThisSeason.map((anime) => {
//           return (
//             <Box p={1} bgcolor="grey.300">
//               {/* <SingleSeasonalAnime anime={anime} /> */}
//               <PopUpAnimeCard anime={anime} />
//             </Box>
//           );
//         })}
//       </Box>
