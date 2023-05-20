import { Sequencer } from "./common/Sequencer"
import './App.css'

function App() {
  return (
    <>
      <Sequencer src="src/assets/mp4/01.mp4" playBack={500} />
      <div className="test">test</div>
      <Sequencer src="src/assets/mp4/02.mp4" playBack={1000} />
      <div className="test">test</div>
      <Sequencer src="src/assets/mp4/03.mp4" playBack={3000} />
      <div className="test">test</div>
      <Sequencer src="src/assets/mp4/04.mp4" playBack={5000} />
      <div className="test">test</div>
      <Sequencer src="src/assets/mp4/05.mp4" playBack={500} />
    </>
  )
}

export default App
