import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { Cart, ItemDisplay, Search } from './components/Components'

function App() {
    const AnimationRef = useRef(null)
    const [ animationOpen, setAnimationOpen ] = useState(true)

    useEffect(() => {
        const animation = AnimationRef.current
        const tl = gsap.timeline()

        if (!animation || !animationOpen) return

        tl
        .fromTo(animation, { opacity: 0 }, { opacity: 1, duration: 0.5 })
        .from(animation, { x: 0, y: 0, duration: 1 })
        .to(animation, 
            {   
                y: -1000, 
                opacity: 0, 
                display: 'hidden', 
                zIndex: -1,
                onComplete: () => {
                    setAnimationOpen(false)
                }
            }
        )
        
    }, [AnimationRef.current])

    function AnimationScreen() {
        return (
            <div className="w-full h-full flex justify-center items-center bg-primary fixed top-0 z-10">
                <img src="/loading-animation.png" alt="Happy Ordering!" ref={AnimationRef}/>
            </div>
        )
    }

    return (
        <>
            { animationOpen && <AnimationScreen /> }
            
            <div className='bg-primary px-4 lg:px-30'>
                <div className='flex flex-col lg:flex-row items-start lg:gap-8 h-screen'>
                    <Search />
                    <ItemDisplay />
                    <Cart />
                </div>
            </div>
        </>
    )
}

export default App
