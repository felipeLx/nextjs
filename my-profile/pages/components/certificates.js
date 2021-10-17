import {useState} from 'react'
import certificatesDB from 'data/certificates.json'

let certificatesFromDB = [...certificatesDB]

export default function Certificates() {
    const [certificates, setCertificates] = useState(certificatesFromDB)
    return(
        <section className="bg-second p-4" aria-label="certification">
                <span type="button" className="font-bold text-lg text-white shadow-xls">Certification</span>
                    {
                        certificates.map(certificate => {
                            return(
                                <ul className="text-white pb-4 h-full hover:box-content hover:shadow-lg hover:border-1.2 hover:opacity-0.4 hover:capitalize hover:text-gray-300" key={certificate.id}>
                                    <li className="text-white text-base list-none">{certificate.name}</li>
                                    <pre className="pr-2 pl-2 italic overflow-x-auto text-xs text-white">{certificate.description}</pre>
                                </ul>  
                            )
                        })
                    }
            </section>
    )
}