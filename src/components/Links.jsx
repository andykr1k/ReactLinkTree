import Projects from '../Projects'

const Links = () => {

    return (
      <div className="text-white grid place-items-center">
        <div className="border-2 m-2 p-5 w-4/12 rounded-lg lg:hover:bg-white lg:hover:text-black">
          <a href="https://github.com/andykr1k">Github</a>
        </div>
        <div className="border-2 m-2 p-5 w-4/12 rounded-lg lg:hover:bg-white lg:hover:text-black">
          <a href="https://www.linkedin.com/in/andrew-krikorian/">LinkedIn</a>
        </div>
        <div className="border-2 m-2 p-5 w-4/12 rounded-lg lg:hover:bg-white lg:hover:text-black">
          <a href="https://twitter.com/krik_exe"> Twitter</a>
        </div>
        <div className="border-2 m-2 p-5 w-4/12 rounded-lg lg:hover:bg-white lg:hover:text-black">
          <a href="../Projects.jsx"> Projects</a>
        </div>
        <div className="border-2 m-2 p-5 w-4/12 rounded-lg lg:hover:bg-white lg:hover:text-black">
          <a href="mailto:akrikorian12@gmail.com"> Email</a>
        </div>
      </div>
    )
  }
  
  export default Links;