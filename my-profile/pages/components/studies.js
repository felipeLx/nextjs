import studiesDB from 'data/studies.json'

let studies = [...studiesDB]

export default function Studies() {
    return(
        <section className="bg-quarter h-auto lg:h-screen sm:h-auto bg-contain justify-center content-center items-center pt-4" aria-label="studies">
                <span type="button" className="font-bold text-gray-300 text-lg rounded-lg shadow-xl text-white">Academic History</span>
                    {
                        studies.map(study => {
                            return(
                                <ul className="text-white pb-4 hover:box-content hover:shadow-lg hover:border-1.2 hover:opacity-0.4 hover:uppercasee hover:text-gray-300" key={study.id}>
                                    <li className=" text-white text-base list-none">{study.name}</li>
                                    <pre className="italic text-xs text-white">{study.description}</pre>
                                </ul>
                            )
                        })
                    }
            </section>
    )
}