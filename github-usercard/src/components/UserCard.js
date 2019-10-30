import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar'
const useStyles = makeStyles({
  card:{
    minWidth:275,
  },
  bigAvatar: {
    marginTop:10,
    marginLeft:560,
    width:300,
    height:300,
  },
});

const UserCard = props => {
const classes = useStyles();

  return (
    <Card className={classes.card} >
      <Avatar className={classes.bigAvatar} src={props.avatar} alt="a handsome fellow holding a snake" />
      <div class="card-info">
        <h3 class="name">{props.name}</h3>
        <p class="username">{props.login}</p>
        <p>Location: {props.location}</p>
        <p>
          Profile:
          <a href={props.url}>{props.url}</a>
        </p>
        <p>Followers: {props.followers}</p>
        <p>Following: {props.following}</p>
        <p>Bio: {props.bio}</p>
      </div>
    </Card>
  );
};

export default UserCard;


// {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
// config: {url: "https://api.github.com/users/lflores0214", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
// data:
// avatar_url: "https://avatars3.githubusercontent.com/u/52762728?v=4"
// bio: "I am an aspiring full-stack web developer based in Denver, CO."
// blog: "luisflores0214.com"
// company: "Lambda School"
// created_at: "2019-07-10T21:28:30Z"
// email: null
// events_url: "https://api.github.com/users/lflores0214/events{/privacy}"
// followers: 20
// followers_url: "https://api.github.com/users/lflores0214/followers"
// following: 24
// following_url: "https://api.github.com/users/lflores0214/following{/other_user}"
// gists_url: "https://api.github.com/users/lflores0214/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/lflores0214"
// id: 52762728
// location: "Denver, CO"
// login: "lflores0214"
// name: "Luis Flores"
// node_id: "MDQ6VXNlcjUyNzYyNzI4"
// organizations_url: "https://api.github.com/users/lflores0214/orgs"
// public_gists: 0
// public_repos: 40
// received_events_url: "https://api.github.com/users/lflores0214/received_events"
// repos_url: "https://api.github.com/users/lflores0214/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/lflores0214/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/lflores0214/subscriptions"
// type: "User"
// updated_at: "2019-10-25T01:04:57Z"
// url: "https://api.github.com/users/lflores0214"
// __proto__: Object
// headers: {cache-control: "public, max-age=60, s-maxage=60", content-type: "application/json; charset=utf-8", etag: "W/"d3878a733983acd34402680c93c1a69e"", last-modified: "Fri, 25 Oct 2019 01:04:57 GMT", x-github-media-type: "github.v3", …}
// request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
// status: 200
// statusText: "OK"
// __proto__: Object