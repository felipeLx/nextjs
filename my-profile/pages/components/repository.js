import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faJava, faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

export default function Repository() {
    return(
        <section aria-label="contacts" className="box-content pb-12 justify-center items-stretch bottom-3 p-4 font-1.2 text-0.75 rounded-3 shadow-white">
            <h3 className="text-1 font-bold p-4 font-light text-center">REPOSITORIES</h3>
            <div className="flex flex-row flex-row space-y-6 space-x-4 lg:flex-col xl:flex-col">
                <a href="https://github.com/felipeLx/react" type="button" className="box p-0 m-0 box-content space-between flex-1 rounded-4 bg-opacity-40 hover:bg-second">
                    <span className="space-around"><FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                        <br />
                        React
                    </span>
                </a>
                <a href="https://github.com/felipeLx/javascript" type="button" className="box box-content space-between flex-1 rounded-4 bg-opacity-40 hover:bg-second">
                
                    <span className="space-around"><FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                    <br />
                    Javascript
                    </span>
                </a>
                <a href="https://github.com/felipeLx/nextjs" type="button" className="box box-content space-between flex-1 shadow-xl rounded-4 bg-opacity-40 hover:bg-second">
                
                    <span className="space-around"><FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                    <br />
                    NodeJs
                    </span>
                </a>
                <a href="https://github.com/felipeLx/java" type="button" className="box box-content space-between flex-1 rounded-4 bg-opacity-40 hover:bg-second">
                
                    <span className="space-around"><FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                    <br />
                    Java
                    </span>
                </a>
            </div>    
        </section>
    )

}