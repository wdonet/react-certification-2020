import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import useCounter from './useCounter'

const useGradient = ({ colors, speed = 2000, total = 3 }) => {
  const { current: uniqueId } = React.useRef(uuidv4())

  React.useEffect(() => {
    colors.forEach((color, index) => {
      try {
        const propertyName = `--gradient-color-${uniqueId}-${index}`
        const propertyExists = getComputedStyle(
          document.documentElement
        ).getPropertyValue(propertyName)

        if (!propertyExists) {
          CSS.registerProperty({
            name: propertyName,
            initialValue: color,
            syntax: '<color>',
            inherits: false,
          })
        }
      } catch (err) {
        console.log(err)
      }
    })
  }, [colors, uniqueId])

  const lastIteration = useCounter(speed)

  const gradientNames = {}
  const gradientTransitions = []
  const gradientVars = []
  for (let i = 0; i < total; i += 1) {
    const newColor = colors[(lastIteration + 1 + i) % colors.length]
    gradientNames[`--gradient-color-${uniqueId}-${i}`] = newColor
    gradientTransitions.push(`--gradient-color-${uniqueId}-${i} 1000ms linear`)
    gradientVars.push(`var(--gradient-color-${uniqueId}-${i})`)
  }

  return {
    ...gradientNames,
    transition: gradientTransitions.join(','),
    background: `radial-gradient(circle at top left, ${gradientVars.join(',')})`,
  }
}

export default useGradient
