import Certificates from "./certificates"
import Jobs from './jobs'
import Studies from "./studies"

export default function MainBody() {
   
    //const [experiences, setExperiences] = useState('')
    //const [studies, setStudies] = useState('')

    return(
        <div className="flex flex-col w-full">
            
            <Certificates />
            <Jobs />
            <Studies />
        </div>
    )
}