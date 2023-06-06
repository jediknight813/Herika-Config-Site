import NavbarImage from "../assets/Herika.png"
import DiscordImage from "../assets/discord-mark-white.png"


const Navbar = () => {
  return (
    <div className=" w-screen h-12 flex bg-slate-900 items-center gap-5 overflow-x-hidden">
        <img className=" w-10 h-10 rounded-xl ml-4" src={NavbarImage}/>
        <h1 className=" text-white font-bold text-2xl">Herika Helper</h1>

        <a href="https://discord.gg/NDn9qud2ug" className=" mr-7 ml-auto cursor-pointer">
          <img className=" w-8" src={DiscordImage} />
        </a>

    </div>
  )
}

export default Navbar