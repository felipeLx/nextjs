import Certificates from './certificates'
import Jobs from './jobs'
import Studies from './studies'
import Projects from './projects'

export default function MainBody() {
    return(
        <div className="flex-col text-white lg:w-3/4 xl:w-3/4 justify-center items-center align-middle">
            
            <Projects />
            <Certificates />
            <Jobs />
            <Studies />
        </div>
    )
}