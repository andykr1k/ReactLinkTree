import { Header, SecondLinks, ProfilePic } from './components';

const Projects = () => {

  return (
    <div className='items-center text-center justify-center object-center'>
      <Header />
      <ProfilePic />
      <SecondLinks />
      <div className='fixed bottom-0'>
        <Footer />
      </div>
    </div>
  )
}

export default Projects;