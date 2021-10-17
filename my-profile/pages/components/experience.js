import Certificates from "./certificates"
import Jobs from './jobs'
import Studies from "./studies"

export default function MainBody() {
   
    //const [experiences, setExperiences] = useState('')
    //const [studies, setStudies] = useState('')

    return(
        <div className="flex flex-col m-0 p-0 content-start lg:flex-grow md:flex-1 overflow-ellipsis md:break-all sm:break-all">
            
            <Certificates />
            <Jobs />
            <Studies />
        </div>
    )
}