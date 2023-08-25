import './App.css'
import useCounter from "./hooks/useCounter"

function App() {
  
  const counterA = useCounter()
  const counterB = useCounter()

  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%', gap: "40px"}}>

      <div>
        <p>{counterA.counter}</p>
        <button onClick={counterA.increase}>+</button>
      </div>

      <div>
        <p>{counterB.counter}</p>
        <button onClick={counterB.increase}>+</button>
      </div>

    </div>
  )
}

export default App
