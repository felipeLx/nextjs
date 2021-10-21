import studiesDB from 'data/studies.json'

let studies = [...studiesDB]

export default function Studies() {
    return(
        <section className="bg-quarter lg:h-screen space-y-5 justify-center items-center" aria-label="studies">
                <span type="button" className="text-1 font-bold p-4 text-center text-white">ACADEMIC HISTORY</span>
                    {
                        studies.map(study => {
                            return(
                                <ul className="text-white box box-content decoration-slice border-1.2 border-color-second hover:opacity-0.4 hover:text-gray-300" key={study.id}>
                                    <li className="text-white text-lg list-none">{study.name}</li>
                                    <pre className="italic text-base text-white">{study.description}</pre>
                                </ul>
                            )
                        })
                    }
            </section>
    )
}