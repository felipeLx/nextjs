import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faJava, faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

export default function Repository() {
    return(
        <section aria-label="repository" className="p-4 font-1.2 text-0.75 pb-8 content-center max-w-3/5">
            <h3 className="text-1 font-bold p-4 text-center">REPOSITORIES</h3>
            
            <div className="p-4 flex flex-wrap justify-center content-center gap-x-10 gap-y-6 sm:gap-x-6 border-red-500 border-4 rounded-lg border-double pt-4 pb-4 ">
                <a href="https://github.com/felipeLx/react" type="button" className="p-4 w-40 rounded-md bg-second hover:animate-pulse active:bg-green-500 active:text-black">
                    <span className="space-around text-xl"><FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                        <br />
                        React
                    </span>
                </a>
                <a href="https://github.com/felipeLx/nextjs" type="button" className="p-4 w-40 rounded-md bg-second hover:animate-pulse active:bg-green-500 active:text-black">
                
                    <span className="space-around text-xl"><FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                    <br />
                    NodeJs
                    </span>
                </a>
                <a href="https://github.com/felipeLx/javascript" type="button" className="p-4 w-40 rounded-md bg-second hover:animate-pulse active:bg-green-500 active:text-black">
                
                    <span className="space-around text-xl"><FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                    <br />
                    Javascript
                    </span>
                </a>
                <a href="https://github.com/felipeLx/java" type="button" className="p-4 w-40 rounded-md bg-second hover:animate-pulse active:bg-green-500 active:text-black">
                
                    <span className="space-around text-xl"><FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                    <br />
                    Java
                    </span>
                </a>
            </div>    
        </section>
    )

}