
import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
  const [squery, setSquery] = React.useState("wizeline");
  const [sdetailId, setSdetailId] = React.useState();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [sessionData, setSessionData] = React.useState();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [favorites, setFavorites] = React.useState({});
  
  const store = {
    squery: [squery, setSquery],
    sdetailId: [sdetailId, setSdetailId],
    loggedIn: [loggedIn, setLoggedIn],
    sessionData: [sessionData, setSessionData],
    menuOpen: [menuOpen, setMenuOpen],
    favorites:[favorites, setFavorites]  
  }
  // console.log(store);
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}