import Hobby from './hobby'
import Contacts from './contacts'
import Repository from './repository'

export default function SideBar() {
    return(
        <nav className="bg-first flex flex-col pt-8 text-white lg:max-w-1/4 xl:max-w-1/4">           
            <Contacts />
            <Repository />
            <Hobby />
            
            
            
        </nav>
    )
}