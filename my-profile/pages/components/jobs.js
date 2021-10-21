import jobsDB from 'data/jobs.json'

let jobs = [...jobsDB]

export default function Jobs() {
    return(
        <section className="bg-third bg-contain space-y-5 pb-8 justify-center items-center" aria-label="experience">
                <span type="button" className="text-1 font-bold p-4 text-center text-white">EXPERIENCE</span>
                    {
                        jobs.map(job => {
                            return(
                                <ul className="text-white hover:box hover:box-content decoration-slice hover:shadow-lg hover:border-1.2 hover:opacity-0.4 hover:text-gray-300" key={job.id}>
                                    <li className="text-white text-lg list-none">{job.name}</li>
                                    <pre className="italic text-base text-white sm:text-sm overflow-ellipsis overflow-hidden">{job.description}</pre>
                                </ul>
                            )
                        })
                    }
            </section>
    )
}