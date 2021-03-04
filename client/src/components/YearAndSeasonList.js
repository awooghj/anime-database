import React from "react";
import {
  makeStyles,
  createMuiTheme,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { green, purple } from "@material-ui/core/colors";
import ButtonTemplates from "../material-ui-template/ButtonSetting";
import ShowAllAnimeInThatSeason from "./ShowAllAnimeInThatSeason";
import Season from "./Season";
import yearlyBestAnimeService from "../services/YearlyBestAnimePicture";

//
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
});

export default function SeasonAnimeStyle(props) {
  const classes = useStyles();

  let year = props.yearAndSeason.year;
  console.log(year);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={yearlyBestAnimeService.yearlyBestAnime(year)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.yearAndSeason.seasons.map((season) => {
          if (season === "Winter") {
            return (
              <ButtonTemplates.WinterButton
                variant="contained"
                color="primary"
                className={classes.margin}
                size="small"
                onClick={() => {
                  // <ShowAllAnimeInThatSeason season={season} year={year} />;
                  props.setYear(year);
                  props.setSeason(season.toLowerCase());
                }}>
                {season}
              </ButtonTemplates.WinterButton>
            );
          } else if (season === "Summer") {
            return (
              <ButtonTemplates.SummerButton
                variant="contained"
                color="primary"
                className={classes.margin}
                size="small"
                onClick={() => {
                  props.setYear(year);
                  props.setSeason(season.toLowerCase());
                }}>
                {season}
              </ButtonTemplates.SummerButton>
            );
          } else if (season === "Spring") {
            return (
              <ButtonTemplates.SpringButton
                variant="contained"
                color="primary"
                className={classes.margin}
                size="small"
                onClick={() => {
                  props.setYear(year);
                  props.setSeason(season.toLowerCase());
                }}>
                {season}
              </ButtonTemplates.SpringButton>
            );
          }
          return (
            <ButtonTemplates.FallButton
              variant="contained"
              color="primary"
              className={classes.margin}
              size="small"
              onClick={() => {
                props.setYear(year);
                props.setSeason(season.toLowerCase());
              }}>
              {season}
            </ButtonTemplates.FallButton>
          );
        })}
      </CardActions>
    </Card>
  );
}
