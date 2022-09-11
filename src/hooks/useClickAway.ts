import { useEffect } from "react"

export function useClickAway(ref: React.RefObject<HTMLElement>, cb: () => void) {

  useEffect(() => {
    function clickListener(e: any) {
      const isElementClicked = e.path.some((no: HTMLElement) => no === ref.current)

      if (!isElementClicked)
        cb()
    }

    window.addEventListener('click', clickListener)

    return () => {
      window.removeEventListener('click', clickListener)
    }
  }, [])
}