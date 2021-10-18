import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // import the icons you need


export default function Contacts() {
    return(
        <section aria-label="contacts" className=" box-content p-4 font-1.2 text-0.75 pb-8 rounded-3 shadow-white">
            <h3 className="text-1 font-bold p-2 space-between content-top justify-center flex-grow top-0 text-center">Contacts</h3>
            <div className="flex flex-row flex-wrap mt-4 mb-4  items-center justify-center">
                <a type="button" href={"https://wa.me/0035795776792"} className="p-2 flex-1 transition duration-500 ease-in-out hover:bg-second transform hover:-translate-y-1 hover:scale-70">
                    <span className="p-2 font-2"><FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                    </span>
                </a>
                <a type="button" href={"mailto:felipealisboa@outlook.com"} className="p-2 flex-1 transition duration-500 ease-in-out hover:bg-second transform hover:-translate-y-1 hover:scale-70">
                    <span className="p-2 font-2"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                </a>
                <a type="button" href={"https://linkedin.com/in/felipealisboa"} className="p-2 flex-1 transition duration-500 ease-in-out hover:bg-second transform hover:-translate-y-1 hover:scale-70">
                    <span className="p-2 font-2"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </span>
                </a>
                <a type="button" href={"https://github.com/felipeLx?tab=repositories"} className="p-2 flex-1 transition duration-500 ease-in-out hover:bg-second transform hover:-translate-y-1 hover:scale-70">
                    <span className="p-2 font-2"><FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                    </span>
                </a>
            </div>
        </section>
    )
}