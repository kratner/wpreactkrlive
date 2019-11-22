import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#040b2dba",
    color: "#f4b98e",
    textAlign: "left",
    margin: ".4em",
    width: "47%",
    display: "inline-block",
    verticalAlign: "top",
    /*
    clear: "right",
    float: "left",
    */
    "@media (max-width: 600px)": {
      width: "100%"
    },
    "@media (min-width: 1200px)": {
      width: "31.7%"
    }
  },
  cardActions: {
    //display: "block",
    //textAlign: "right"
  },
  fullwidth: {
    width: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  content: {
    fontSize: "0.45em"
  },
  title: {
    color: "#f4b98e",
    fontSize: "0.8em",
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  //const theme = useTheme();
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.contentTitle}
        </Typography>
        <Typography
          //variant="h5"
          className={classes.content}
          component="p"
          dangerouslySetInnerHTML={{ __html: props.mainContent }}
        />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          style={{
            color: "#f4b98e",
            fontSize: "0.75em"
          }}
          size="large"
          onClick={props.onClick}
          title={props.linkButtonTitle}
        >
          {props.linkButtonLabel}
          <OpenInNewIcon style={{ marginLeft: "0.2em" }} fontSize="inherit" />
        </Button>
      </CardActions>
    </Card>
  );
}
