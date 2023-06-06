import HerikaConfigForm from "./components/HerikaConfigForm"
import Navbar from "./components/Navbar"


function App() {


  return (
    <>
      <div className="flex bg-slate-700 flex-col w-screen min-h-screen h-auto max-w-screen items-center overflow-x-hidden">
        <Navbar />
        <HerikaConfigForm />
      </div>
    </>
  )
}

export default App
