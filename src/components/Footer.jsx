import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <div className="text-gray">
            <FontAwesomeIcon icon={faCode} className="ml-2 mr-2" />

            with 
            
            <FontAwesomeIcon icon={faHeart} className="ml-2 mr-2" />

            by
            {" "}
            <a
                href="https://github.com/andykr1k"
                aria-label="My GitHub"
            > 
                <span className="badge bg-dark">
                    Andrew Krikorian
                </span>
            </a>{" "}
            using
            <FontAwesomeIcon icon={faReact} className="ml-2 mr-2" />
        </div>
    )
  }
  
  export default Footer;