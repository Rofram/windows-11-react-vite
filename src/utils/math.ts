export const clamp = (min: number, max: number, num: number) => Math.min(Math.max(num, min), max);
export const distance = (a: number, b: number) => Math.sqrt( a*a + b*b );

export type Position = {
  top: number
  height: number
  width: number
  bottom: number
}

export type Point = {
  x: number
  y: number
} & Position

// Prevent rapid reverse swapping
const BUFFER = 5

export const findIndex = (
  index: number,
  point: Point,
  positions: Position[],
) => {
  let target = index
  const { top, height } = positions[index]
  const bottom = top + height

  // If moving down
  if (point.y > 0) {
    const nextItem = positions[index + 1]
    if (nextItem === undefined) {
      return index
    }
    const swapOffset =
      distance(bottom, nextItem.top + nextItem.height / 2) + BUFFER
    if (point.y > swapOffset) {
      target = index + 1
    }

    // If moving up
  } else if (point.y < 0) {
    const previousItem = positions[index - 1]
    if (previousItem === undefined) {
      return index
    }
    const previousBottom = previousItem.top + previousItem.height
    const swapOffset =
      distance(top, previousBottom - previousItem.height / 2) + BUFFER
    if (point.y < -swapOffset) {
      target = index - 1
    }
  }

  return clamp(0, positions.length, target)
}

export function isColliding(source: Point, sample: Point, threshold = 0.5) {
  return (
    source.x < sample.x + sample.width - threshold * sample.width &&
    source.x + source.width > sample.x + threshold * sample.width &&
    source.y < sample.y + sample.height - threshold * sample.height &&
    source.y + source.height > sample.y + threshold * sample.height
  )
}

export function mergePointIntoPosition(position: Point, point: Point) {
  return {
    ...position,
    x: position.x + point.x,
    y: position.y + point.y,
  }
}