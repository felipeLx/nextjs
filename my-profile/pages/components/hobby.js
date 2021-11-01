import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBookReader, faNewspaper, faSwimmingPool, faMountain} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Hobby() {
    return (
        <section aria-label="contacts" className="p-4 font-1.2 text-0.75">
            <h3 className="text-1 font-bold p-4 text-center">HOBBIES</h3>
            <div className="p-4 flex flex-col justify-center allign-middle gap-x-10 sm:gap-x-15 gap-y-4 border-red-500 border-4 rounded-lg border-double">
                <span className="text-lg"><FontAwesomeIcon icon={faBookReader}> </FontAwesomeIcon>
                 <br />
                 like to study</span>
                <span className="text-lg"><FontAwesomeIcon icon={faSwimmingPool}> </FontAwesomeIcon>
                <br />
                 love swimming</span>
                <span className="text-lg"><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> 
                <br />
                ready news</span>
                <span className="text-lg"><FontAwesomeIcon icon={faMountain}></FontAwesomeIcon> 
                <br />
                up montains</span>
            </div>
        </section>
    )
}