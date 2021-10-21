import Hobby from './hobby'
import Contacts from './contacts'
import Repository from './repository'
//  justify-center content-start sm:items-center
export default function SideBar() {
    return(
        <nav className="bg-first flex flex-col pt-8 text-white items-center content-center">
            <Contacts />
            <Repository />
            <Hobby />
            
            
            
        </nav>
    )
}