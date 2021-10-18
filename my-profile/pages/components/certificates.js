import {useState, useEffect} from 'react'
import certificatesDB from 'data/certificates.json'

let certificates = [...certificatesDB]

export default function Certificates() {
    
    return(
        <section className="bg-second bg-contain space-y-3 pb-8 justify-center content-center items-center pt-4" aria-label="certification">
                <span type="button" className="font-bold text-lg text-gray-300 box rounded-2 shadow-xls">Certification</span>
                    {
                        certificates.map(certificate => {
                            return(
                                <ul className="text-white hover:box hover:box-content hover:shadow-lg hover:border-1.2 hover:opacity-0.4 hover:text-gray-300" key={certificate.id}>
                                    <li className="text-white text-base list-none">{certificate.name}</li>
                                    <pre className="pr-2 pl-2 overflow-x-auto break-words italic text-xs text-white">{certificate.description}</pre>
                                </ul>  
                            )
                        })
                    }
            </section>
    )
}