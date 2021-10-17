import jobsDB from 'data/jobs.json'

let jobs = [...jobsDB]

export default function Jobs() {
    return(
        <section className="bg-third p-4 h-800 justify-center content-center" aria-label="experience">
                <span type="button" className="font-bold text-lg text-white shadow-xls tracking-wilde">Experience</span>
                    {
                        jobs.map(job => {
                            return(
                                <ul className="text-white pb-4 h-full hover:box-content hover:shadow-lg hover:border-1.2 hover:opacity-0.4 hover:capitalize hover:text-gray-300" key={job.id}>
                                    <li className="pt-2 text-white text-base list-none">{job.name}</li>
                                    <pre className="italic overflow-x-auto text-xs text-white md:truncate ...">{job.description}</pre>
                                </ul>
                            )
                        })
                    }
            </section>
    )
}