import React from "react";
import FollowersCard from "./FollowersCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper:{
      height:400,
      width:350,
      backgroundColor: "#DCDCDC",
  }
}));

const Followers = props => {
  const classes = useStyles();
  return (
    <div>
      <h1>Followers</h1>
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
          {props.followers.map(user => (
              <Grid item> 
              <Paper className={classes.paper}>
            <FollowersCard
              name={user.login}
              url={user.html_url}
              avatar={user.avatar_url}
            />
            </Paper>
            </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Followers;

// avatar_url: "https://avatars3.githubusercontent.com/u/29004494?v=4"
// events_url: "https://api.github.com/users/primelos/events{/privacy}"
// followers_url: "https://api.github.com/users/primelos/followers"
// following_url: "https://api.github.com/users/primelos/following{/other_user}"
// gists_url: "https://api.github.com/users/primelos/gists{/gist_id}"
// gravatar_id: ""
// html_url: "https://github.com/primelos"
// id: 29004494
// login: "primelos"
// node_id: "MDQ6VXNlcjI5MDA0NDk0"
// organizations_url: "https://api.github.com/users/primelos/orgs"
// received_events_url: "https://api.github.com/users/primelos/received_events"
// repos_url: "https://api.github.com/users/primelos/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/primelos/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/primelos/subscriptions"
// type: "User"
// url: "https://api.github.com/users/primelos"
