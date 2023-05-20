import { memo } from "react"
import { useInView } from "react-intersection-observer"
import './styles/Sequencer.css'
import ScrollMagic from "scrollmagic"

export const Sequencer = memo(function Sequencer(props: {
  title?: string,
  playBack: number,
  src: string
}) {
  const video = document.getElementById('sequencer1') as HTMLMediaElement
  const accelAmount = 0.3
  let playBack = 0
  let delay = 0

  const {ref, inView} = useInView({
    threshold: .9
  })

  const controller = new ScrollMagic.Controller()

  const scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: video,
    triggerHook: 0
  }).addTo(controller)

  if(inView) {
    scene.on('update', (scrollMagicEvent: any) => {
      playBack = scrollMagicEvent.scrollPos / props.playBack
    })

    setInterval(() => {
      delay += (playBack - delay) * accelAmount
      video.currentTime = delay
    }, 33.3)

    console.log(true)
  }

  return (
    <div>
      <video id="sequencer1" className="sequencer" ref={ref}>
        <source
          src={props.src}
          type="video/mp4"
        />
      </video>
    </div>
  )
})