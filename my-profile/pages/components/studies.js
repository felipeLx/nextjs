import {useState} from 'react'
import studiesDB from 'data/studies.json'

let studiesFromDB = [...studiesDB]

export default function Studies() {
    const [studies, setStudies] = useState(studiesFromDB)
    return(
        <section className="bg-quarter pt-4" aria-label="studies">
                <span type="button" className="font-bold text-lg rounded-lg shadow-xl text-white">Academic History</span>
                    {
                        studies.map(study => {
                            return(
                                <ul className="text-white pb-4 h-full hover:box-content hover:shadow-lg hover:border-1.2 hover:opacity-0.4 hover:capitalize hover:text-gray-300" key={study.id}>
                                    <li className=" text-white text-base list-none">{study.name}</li>
                                    <pre className="italic text-xs text-white">{study.description}</pre>
                                </ul>
                            )
                        })
                    }
            </section>
    )
}