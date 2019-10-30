import React from "react";
import Avatar from "@material-ui/core/Avatar"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    avatar: {
      marginTop:20,
      marginLeft:75,
      width:200,
      height:200,
    },
  });

const FollowersCard = props => {
    const classes = useStyles();
  console.log(props, "fc");
  return (
    <div>
      <a href={`${props.url}`} target="_blank" rel="noopener noreferrer">
        <Avatar className={classes.avatar} src={`${props.avatar}`} alt={`user ${props.name}`} />
        <h1>{props.name}</h1>
      </a>
    </div>
  );
};

export default FollowersCard;
