import NavbarImage from "../assets/Herika.png"


const Navbar = () => {
  return (
    <div className=" w-screen h-12 flex bg-slate-900 items-center gap-5 overflow-x-hidden">
        <img className=" w-10 h-10 rounded-xl ml-4" src={NavbarImage}/>
        <h1 className=" text-white font-bold text-2xl">Herika Helper</h1>
    </div>
  )
}

export default Navbar