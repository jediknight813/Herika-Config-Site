import HerikaConfigForm from "./components/HerikaConfigForm"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {


  return (
    <>
      <div className="flex bg-slate-700 flex-col w-[100%] min-h-screen h-auto max-w-screen items-center overflow-x-hidden">
        <Navbar />
        <HerikaConfigForm />
        <Footer />
      </div>
    </>
  )
}

export default App
