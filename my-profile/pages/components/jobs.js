import jobsDB from 'data/jobs.json'

let jobs = [...jobsDB]

export default function Jobs() {
    return(
        <section className="bg-third bg-contain p-4 h-600 space-y-8 justify-center content-center items-center pt-4" aria-label="experience">
                <span type="button" className="font-bold text-lg text-gray-300 text-white shadow-xls tracking-wilde">Experience</span>
                    {
                        jobs.map(job => {
                            return(
                                <ul className="text-white pb-4 hover:box-content hover:shadow-lg hover:border-1.2 hover:opacity-0.4 hover:capitalize hover:text-gray-300" key={job.id}>
                                    <li className="pt-2 text-white text-base list-none">{job.name}</li>
                                    <pre className="italic overflow-x-auto text-xs text-white md:truncate ...">{job.description}</pre>
                                </ul>
                            )
                        })
                    }
            </section>
    )
}