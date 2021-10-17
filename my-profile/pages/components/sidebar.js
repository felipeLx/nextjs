import Hobby from './hobby'
import Contacts from './contacts'
import Repository from './repository'

export default function SideBar() {
    return(
        <nav className="bg-first flex flex-col lg:flex-initial text-white pr-4 pl-4 items-center justify-around sm:flex-initial lg:max-w-1/4">           
            <Contacts />
            <Repository />
            <Hobby />
        </nav>
    )
}