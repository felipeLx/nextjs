import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faJava, faReact, faJs, faNodeJs, faAws} from "@fortawesome/free-brands-svg-icons"; // import the icons you need

export default function Repository() {
    return(
        <section aria-label="repository" className="p-4 font-1.2 text-0.75 pb-8">
            <h3 className="text-1 font-bold p-4 text-center">REPOSITORIES</h3>
            
            <div className="p-4 flex flex-col justify-center content-center items-center gap-x-10 sm:gap-x-15 gap-y-6 sm:gap-x-6 border-red-500 border-4 rounded-lg border-double pt-4 pb-4 ">
                <a href="https://github.com/felipeLx/react" target="_blank" type="button" className="p-4 w-40 rounded-md bg-second hover:animate-pulse active:bg-green-500 active:text-black">
                    <span className="space-around text-xl"><FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                        <br />
                        React
                    </span>
                </a>
                <a href="https://github.com/felipeLx/nextjs" target="_blank" type="button" className="p-4 w-40 rounded-md bg-second hover:animate-pulse active:bg-green-500 active:text-black">
                
                    <span className="space-around text-xl">
                    <br />
                    NextJS
                    </span>
                </a>
                <a href="https://github.com/felipeLx/javascript" target="_blank" type="button" className="p-4 w-40 rounded-md bg-second hover:animate-pulse active:bg-green-500 active:text-black">
                
                    <span className="space-around text-xl"><FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                    <br />
                    Javascript
                    </span>
                </a>
                <a href="https://github.com/felipeLx/java" target="_blank" type="button" className="p-4 w-40 rounded-md bg-second hover:animate-pulse active:bg-green-500 active:text-black">
                
                    <span className="space-around text-xl"><FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                    <br />
                    Java
                    </span>
                </a>
                <a href="https://github.com/felipeLx/nodejs" target="_blank" type="button" className="p-4 w-40 rounded-md bg-second hover:animate-pulse active:bg-green-500 active:text-black">
                
                    <span className="space-around text-xl"><FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                    <br />
                    NodeJS
                    </span>
                </a>
                <a href="https://github.com/felipeLx/javascript/tree/master/aws-coursera-certification" target="_blank" type="button" className="p-4 w-40 rounded-md bg-second hover:animate-pulse active:bg-green-500 active:text-black">
                
                    <span className="space-around text-xl"><FontAwesomeIcon icon={faAws}></FontAwesomeIcon>
                    <br />
                    AWS
                    </span>
                </a>
            </div>    
        </section>
    )

}