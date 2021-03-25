
import React from 'react'

export const StoreContext = React.createContext(null)

export default ({ children }) => {
    const [squery, setSquery] = React.useState("wizeline")
    const [sdetailId, setSdetailId] = React.useState()
    
  const store = {
      squery: [squery, setSquery],
      sdetailId:[sdetailId, setSdetailId]
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}