import {Link} from "react-router-dom";

const Links = () => {
    return (
      <div className="text-white grid place-items-center">
        <a className="border-2 m-2 p-5 w-1/2 lg:w-3/12 rounded-lg lg:hover:bg-gray lg:hover:text-black" href="https://github.com/andykr1k">
          Github
        </a>
        <a className="border-2 m-2 p-5 w-1/2 lg:w-3/12 rounded-lg lg:hover:bg-gray lg:hover:text-black" href="https://www.linkedin.com/in/andrew-krikorian/">
          LinkedIn
        </a>
        <a className="border-2 m-2 p-5 w-1/2 lg:w-3/12 rounded-lg lg:hover:bg-gray lg:hover:text-black" href="https://twitter.com/krik_exe"> 
          Twitter
        </a>
        <a className="border-2 m-2 p-5 w-1/2 lg:w-3/12 rounded-lg lg:hover:bg-gray lg:hover:text-black" href="/projects">
          Projects
        </a>
      </div>
    )
  }
  
  export default Links;