import githubImage from '../assets/github-mark/github-mark-white.svg'


const Footer = () => {
  return (
    <div className=" w-full items-center bg-slate-800 h-20 mt-auto text-white flex flex-col justify-center text-[20px]">
        <div className="flex gap-4 items-center cursor-pointer">
            <a href="https://github.com/jediknight813" target="_blank" rel="noopener noreferrer">My GitHub</a>
            <img href="https://github.com/jediknight813" className=' w-6 h-6' src={githubImage} />
        </div>

    </div>
  );
};

export default Footer;

