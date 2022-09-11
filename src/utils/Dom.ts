export function getBoundsWithoutTransform(element: React.RefObject<HTMLDivElement>) {
  if (!element.current) 
    return;
  const transform = element.current.style.transform
  element.current.style.transform = ''
  const bounds = element.current.getBoundingClientRect()
  element.current.style.transform = transform
  return bounds
}

export function getBox(node: React.RefObject<HTMLDivElement>) {
  const bounds = getBoundsWithoutTransform(node)

  if (!bounds)
    return;

  return {
    width: bounds.width,
    height: bounds.height,
    x: bounds.x,
    y: bounds.y,
  }
}