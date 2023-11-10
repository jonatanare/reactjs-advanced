import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from 'gsap'

interface HookProps {
    maxCount: number,
    initalCount: number
}

export const useCounter = ({ maxCount, initalCount }: HookProps) => {
    const [counter, setCounter] = useState(initalCount)
    const elemenToAnimate = useRef<any>(null)

    const tl = useRef( gsap.timeline() )

    const handleClick = () => {
      setCounter( prev => Math.min( prev + 1, maxCount))
    }

    useLayoutEffect(() => {
        if( !elemenToAnimate.current ) return;

        tl.current.to(elemenToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
                  .to(elemenToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out'})
                  .pause()
      

    },[])

    useEffect(() => {
        
        // if(counter < maxCount ) return

        tl.current.play(0)
    }, [counter])

    return {
        counter,
        elemenToAnimate,
        handleClick
    }
}