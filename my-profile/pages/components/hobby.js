import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBookReader, faNewspaper, faSwimmingPool, faMountain} from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Hobby() {
    return (
        <section aria-label="contacts" className=" box-content p-4 m-2 font-1.2 text-0.75 -botton-2 pb-8 rounded-3 shadow-white">
            <h3 className="text-1 font-bold p-2 space-between content-top justify-center flex-grow top-0 text-center">HOBBIES</h3>
            <div className="flex flex-row flex-wrap mt-4 mb-4  items-center justify-center">
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
            </div>
        </section>
    )
}