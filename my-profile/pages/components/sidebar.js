import Hobby from './hobby'
import Contacts from './contacts'
import Repository from './repository'

export default function SideBar() {
    return(
        <nav className="bg-first flex-col lg:w-1/4 xl:w-1/4 text-white justify-center items-center allign-middle">
            <Contacts />
            <Repository />
            <Hobby />   
        </nav>
    )
}