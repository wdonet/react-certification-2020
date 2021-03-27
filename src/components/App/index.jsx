import React, { useEffect, useState, useContext }from 'react';
import Content from '../Content';
import { items } from '../../assets/mockdata/mockdata.json';
import VideoCard from '../VideoCard';
import filterByYear from '../../utils/filter';
import Theme from "../../Theme";
import { ThemeStore } from "../../contexts/ThemeStore";
import { useFetch } from '../../hooks/useFetch';
import { StoreContext } from '../../contexts/Store'
import { HashRouter as Router, Route , useParams,useRouteMatch, useHistory, Redirect} from "react-router-dom";
import { FormGroup, Label, Input, Message } from "../Forms";
import styled from 'styled-components';
import Detail from '../Detail';
import HeaderBar from '../HeaderBar';
import loginApi from '../../login.api';

import { CardWrapper, CardHeader, CardHeading, CardBody, CardIcon, CardFieldset, CardInput, CardOptionsItem, CardOptions, CardOptionsNote, CardButton, CardLink,ErrorMessage
} from "../Cards";

import {
  Switch,
  Link
} from "react-router-dom";


const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  height:3000px;
`
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {
      ["loggedIn"]: [loggedIn, setLoggedIn]
  } = React.useContext(StoreContext)
  
  return (
    <Route {...rest} render={(props) => (
      loggedIn=== true ?
        <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  )
};


function App() {
  
  const theme = "light";
    const [recent, setRecent] = useState([]);
    const [inDetail, setInDetail] = useState(false);
    const [detailVideoId, setDetailVideoId] = useState("");
    const [detailTitle, setDetailTitle] = useState("");
    const [detailDescription, setDetailDescription] = useState("");


  return (
    <React.StrictMode>
      <ThemeStore>
        <Theme>
          <HeaderBar />
          <StyledContainer>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <ProtectedRoute path='/favorites' component={FavoritesPage} />
              <Route
                path="/video/:id"
                children={<DetailPage/>}
              />
            </Switch>
          </StyledContainer>
        </Theme>
      </ThemeStore>
      
    </React.StrictMode>
  );
}

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
  margin-top: 16px;
`
const HomePage = ({ source}) => {
    
    const {
      ["squery"]: [squery, setSquery]
    } = React.useContext(StoreContext)

    const url = squery && `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY2}&q=${squery}&part=snippet&maxResults=50&order=date&type=video`;
    const { status, data, error } = useFetch(url, source);


  
  
  return (
    <Content title="Welcome to the Challenge!">{data.items ?
      data.items.map((video) => {
        return (
          <StyledLink key={video.etag} to={`/video/${video.id.videoId}`}>
            <VideoCard
              videoId={video.id.videoId}
              title={video.snippet.title}
              description={video.snippet.description}
              image={video.snippet.thumbnails.high.url}
              gotodetail={() => { } }
              />
          </StyledLink>
        )
      })
    :null}
    </Content>
  )
}

const AboutPage = () => {
  return (
    <div>
      About
    </div>
  )
}




const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState()
  let history = useHistory();
  const {
    ["sessionData"]: [sessionData, setSessionData],
    ["loggedIn"]: [loggedIn, setLoggedIn],
    
  } = React.useContext(StoreContext)
  

  const enterClick = () => {
    console.log("enterClick");
    console.log({ username });
    console.log({ password });
    loginApi(username, password).then((user) => {
      console.log(user);
      setSessionData(user);
      setLoggedIn(true);
      history.push("/");
      
    }).catch((error) => {
      setError("Login error");
    });
  }

  return (
    <>
      <CardWrapper>
          <CardHeader>
            <CardHeading>Log in</CardHeading>
          </CardHeader>
          <CardBody>
            <CardFieldset>
            <CardInput placeholder="Username" type="text" value={username} onChange={ (ev)=>setUsername(ev.target.value) } required />
            </CardFieldset>
            <CardFieldset>
            <CardInput placeholder="Password" type="password" value={ password} onChange={ (ev)=>setPassword(ev.target.value) } required />
              <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>
          { error? <ErrorMessage>
            { error}
          </ErrorMessage>:null}
          <CardFieldset>
            <CardButton type="button" onClick={() => { enterClick() } }>Enter</CardButton>
          </CardFieldset>
          <CardFieldset>
              <Link to="/">Don't want to login</Link>
            </CardFieldset>
          </CardBody>
      </CardWrapper>
    </>
  )
}

const StyledRemoveFavorite =styled.div`
height: 10px;
align-self:end ;

`
const FavoritesPage = () => {

  const url = "favorites"
  const { status, data, error } = useFetch(url, "favorites");

  return (
    <Content title="Favorites"  is>{data.items ?
      data.items.map((video) => {
        return (
          <>
            <StyledLink key={video.etag} to={`/video/${video.id.videoId}?fav`}>
              <VideoCard
                videoId={video.id.videoId}
                title={video.snippet.title}
                description={video.snippet.description}
                image={video.snippet.thumbnails.high.url}
                gotodetail={() => { }}
              />
            </StyledLink>
            <StyledRemoveFavorite>remove</StyledRemoveFavorite>
          </>
        )
      })
    :null}
    </Content>
  )
}


const DetailPage = ({ match }) => {
  let { id } = useParams();
  return (
    <div>
      <Detail detailVideoId={id}></Detail>
    </div>
  )
}

export default App;
