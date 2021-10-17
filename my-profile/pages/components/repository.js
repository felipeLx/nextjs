import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faJava, faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons"; // import the icons you need

export default function Repository() {
    return(
        <section aria-label="knowledge" className="box grid grid-cols-2 mt-4 mb-4 text-center box-content p-4 m-2 font-1.2 text-0.75 -botton-2 pb-8 items-center justify-center rounded-3 shadow-white">
                <h3 className="text-1 font-bold p-2">What I know</h3>
                <a href="https://github.com/felipeLx/react" type="button" className="bg-five w-50 p-4 mt-2 shadow-xls rounded-3 hover:transform">
                    <br />
                    <span className="p2"><FontAwesomeIcon icon={faReact}></FontAwesomeIcon>
                        React
                    </span>
                </a>
                <a href="https://github.com/felipeLx/javascript" type="button" className="bg-five w-50 p-4 mt-1 shadow-xls rounded-3 hover:transform">
                <br />
                    <span className="p2"><FontAwesomeIcon icon={faJs}></FontAwesomeIcon>
                    Javascript
                    </span>
                </a>
                <a href="https://github.com/felipeLx/nextjs" type="button" className="bg-five w-50 p-4 mt-1 shadow-xls rounded-3 hover:transform">
                <br />
                    <span className="p2"><FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon>
                    NodeJs
                    </span>
                </a>
                <a href="https://github.com/felipeLx/java" type="button" className="bg-five w-50 p-4 mt-1 shadow-xls rounded-3 hover:transform">
                <br />
                    <span className="p2"><FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                    Java
                    </span>
                </a>
                
        </section>
    )

}