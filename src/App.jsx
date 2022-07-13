import { Header, Links, ProfilePic, Footer} from './components';
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./Projects"

const App = () => {

  return (
    <div className='items-center text-center justify-center object-center'>
      <Header />
      <ProfilePic />
        <Links />
      <div className='m-10'>
        <Footer />
      </div>
    </div>
  )
}

export default App;
