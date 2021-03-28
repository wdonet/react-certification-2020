import React, {  useState }from 'react';
import Content from '../Content';

import VideoCard from '../VideoCard';

import Theme from "../../Theme";
import { ThemeStore } from "../../contexts/ThemeStore";
import { useFetch } from '../../hooks/useFetch';
import { StoreContext } from '../../contexts/Store'
import { Route , useParams, useHistory, Redirect} from "react-router-dom";
import styled from 'styled-components';
import Detail from '../Detail';
import HeaderBar from '../HeaderBar';
import loginApi from '../../login.api';

import { CardWrapper, CardHeader, CardHeading, CardBody, CardIcon, CardFieldset, CardInput, CardButton,ErrorMessage
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
      "loggedIn": [loggedIn]
  } = React.useContext(StoreContext)
  
  return (
    <Route {...rest} render={(props) => (
      loggedIn=== true ?
        <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  )
};


function App() {
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
              <Route
                path="/about"
                children={<AboutPage/>}
              />
              <Route component={NotFound} />
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
      "squery": [squery]
    } = React.useContext(StoreContext)

    const url = squery && `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY2}&q=${squery}&part=snippet&maxResults=50&order=date&type=video`;
    const {  data } = useFetch(url, source);


  
  
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
              />
          </StyledLink>
        )
      })
    :null}
    </Content>
  )
}

const StyledAbout = styled.div`
  padding:50px;
`
const AboutPage = () => {
  return (
    <StyledAbout>
      
      React Challenge Wizeline Bootcamp v.1.0.
    </StyledAbout>
  )
}




const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [error, setError] = useState()
  let history = useHistory();
  const {
    "sessionData": [ sessionData, setSessionData],
    "loggedIn": [ loggedIn, setLoggedIn],
    
  } = React.useContext(StoreContext)
  

  const handleSubmit = (event) => {
    console.log("submit login");
    event.preventDefault();
    enterClick();
  }

  const enterClick = () => {
      loginApi(username, password).then((user) => {
      setSessionData(user);
      setLoggedIn(true);
      history.push("/");
      
      }).catch((error) => {
        console.log(error);
        setError("Login error");
    });
  }

  return (
    <>
      
      <CardWrapper>
        <form onSubmit={handleSubmit}>
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
            <CardButton type="submit" onClick={() => { enterClick() } }>Enter</CardButton>
          </CardFieldset>
          <CardFieldset>
              <Link to="/">Don't want to login</Link>
            </CardFieldset>
          </CardBody>
        </form>
      </CardWrapper>
    </>
  )
}

const StyledRemoveFavorite =styled.button`
height: 10px;
height: 50px;
margin: 5px;
padding:5px;

`



const FavoritesPage = () => {

  const data = {items:[]}
  const {
    "favorites": [favorites, setFavorites],
  } = React.useContext(StoreContext)

  for (const [key, value] of Object.entries(favorites)) {
      console.log(key)
      data.items.push(value);
  }


  const removeFav = (videoid) => {
    const clone = JSON.parse(JSON.stringify(favorites));
    delete clone[videoid];
    setFavorites(clone);
  }
  return (
    <Content title="Favorites"  is>{(data.items && data.items.length>0) ?
      data.items.map((video) => {
        return (
          <>
            <StyledLink key={video.id.videoId} to={`/video/${video.id.videoId}?fav=true`}>
              <VideoCard
                videoId={video.id.videoId}
                title={video.snippet.title}
                description={video.snippet.description}
                image={video.snippet.thumbnails.high.url}
              />
            </StyledLink>
            <StyledRemoveFavorite onClick={ ()=>removeFav(video.id.videoId) }>Remove</StyledRemoveFavorite>
          </>
        )
      })
    :"No favorites, go Home and start adding some!"}
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

const NotFound = () => (
  <StyledAbout>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </StyledAbout>
);


export default App;
