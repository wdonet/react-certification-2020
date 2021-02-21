import React from 'react'
import { CustomContext } from '../providers/Custom'

const useCustom = () => {
  const contextValue = React.useContext(CustomContext)
  if (!contextValue) {
    throw Error('Custom Context not found; wrap your App with <CustomProvider>')
  }
  return contextValue
}

export default useCustom
