import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // import the icons you need


export default function Contacts() {
    return(
        <section aria-label="contacts" className="p-4 font-1.2 text-0.75 pb-8 sm:max-w-2/5 md:max-w-2/5">
            <h3 className="text-1 font-bold p-4">CONTACTS</h3>
            <div className="p-4 flex flex-wrap gap-x-22 gap-y-6 justify-center content-center sm:gap-x-4 border-red-500 border rounded-lg border-double pt-4 pb-4 sm:flex sm:flex-row">
                <a type="button" href={"https://wa.me/0035795776792"} className="p-4 w-40 border border-white rounded-md transition duration-150 ease-in-out hover:bg-second transform hover:-translate-y-1 hover:scale-70 active:bg-green-500">
                    <span className="p-2 text-3xl"><FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                    </span>
                </a>
                <a type="button" href={"mailto:felipealisboa@outlook.com"} className="p-4 w-40 border border-white rounded-md transition duration-150 ease-in-out hover:bg-second transform hover:-translate-y-1 hover:scale-70 active:bg-green-500">
                    <span className="p-2 text-3xl"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                </a>
                <a type="button" href={"https://linkedin.com/in/felipealisboa"} className="p-4 w-40 border border-white rounded-md transition duration-150 ease-in-out hover:bg-second transform hover:-translate-y-1 hover:scale-70 active:bg-green-500">
                    <span className="p-2 text-3xl"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </span>
                </a>
                <a type="button" href={"https://github.com/felipeLx?tab=repositories"} className="p-4 w-40 border border-white rounded-md transition duration-150 ease-in-out hover:bg-second transform hover:-translate-y-1 hover:scale-70 active:bg-green-500">
                    <span className="p-2 text-3xl"><FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
                    </span>
                </a>
            </div>
        </section>
    )
}