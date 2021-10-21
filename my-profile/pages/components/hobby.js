import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBookReader, faNewspaper, faSwimmingPool, faMountain} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Hobby() {
    return (
        <section aria-label="contacts" className="p-4 font-1.2 text-0.75 pb-8 max-w-2/5">
            <h3 className="text-1 font-bold p-4 text-center">HOBBIES</h3>
            <div className="flex flex-wrap justify-center content-center gap-x-24 gap-y-6 sm:gap-x-4 border-red-500 border-4 rounded-lg border-double pt-4 pb-4 ">
                <span className="space-around  text-lg"><FontAwesomeIcon icon={faBookReader}> </FontAwesomeIcon>
                 <br />
                 like to study</span>
                <span className="space-around text-lg"><FontAwesomeIcon icon={faSwimmingPool}> </FontAwesomeIcon>
                <br />
                 love to swimming</span>
                <span className="space-around text-lg"><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> 
                <br />
                ready the news</span>
                <span className="space-around text-lg"><FontAwesomeIcon icon={faMountain}></FontAwesomeIcon> 
                <br />
                up the montains</span>
            </div>
        </section>
    )
}