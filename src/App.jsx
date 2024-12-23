import Date from "./components/Date"
import Balance from "./components/Balance"


function App() {
 

  return (
    <div className="flex flex-col items-start justify-start w-full">
      <Date/>
      <div className="flex items-center justify-around w-full">
        <Balance/>
      </div>
    </div>
  )
}

export default App
