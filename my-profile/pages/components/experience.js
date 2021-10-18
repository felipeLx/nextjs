import Certificates from "./certificates"
import Jobs from './jobs'
import Studies from "./studies"

export default function MainBody() {
   
    //const [experiences, setExperiences] = useState('')
    //const [studies, setStudies] = useState('')

    return(
        <div className="flex flex-col break-words w-full md:flex-grow lg:flex-grow xl:flex-grow">
            
            <Certificates />
            <Jobs />
            <Studies />
        </div>
    )
}