import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBookReader, faNewspaper, faSwimmingPool, faMountain} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Hobby() {
    return (
        <section aria-label="me" className="box flex-col box-content block p-4 mb-8 m-2 items-center justify-center rounded-4 shadow-white md:flex-row">
                <h3 className="text-1 font-bold p2">Who I am</h3>
                <span className="pl-2"><FontAwesomeIcon icon={faBookReader}> </FontAwesomeIcon> like to study</span>
                <p type="button" className="box bg-five mt-2 p-2 text-0.75 w-50 hauto justify-center shadow-xls rounded-lg">                    
                </p>
                <span className="pl-2"><FontAwesomeIcon icon={faSwimmingPool}> </FontAwesomeIcon> love to swimming</span>
                <p type="button" className="bg-five mt-2 p-2 text-0.75 w-50 h-auto justify-center shadow-xls rounded-lg">
                </p>
                <span className="pl-2"><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> ready the news</span>
                <p type="button" className="bg-five mt-2 p-2 text-0.75 w-50 h-auto justify-center shadow-xls rounded-lg">
                </p>
                <span className="pl-2"><FontAwesomeIcon icon={faMountain}></FontAwesomeIcon> tracking in the montains</span>
                <p type="button" className="bg-five mt-2 p-2 text-0.75 w-50 h-auto justify-center shadow-xls rounded-lg">
                </p>
            </section>
    )
}