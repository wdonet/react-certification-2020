import { useState } from 'react'
import useInterval from './useInterval'

function useCounter(delay, step = 1) {
  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount(count + step)
  }, delay)

  return count
}

export default useCounter
