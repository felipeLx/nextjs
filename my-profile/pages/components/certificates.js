import {useState, useEffect} from 'react'
import certificatesDB from 'data/certificates.json'

let certificates = [...certificatesDB]

export default function Certificates() {
    
    return( 
        <section className="bg-third bg-contain space-y-5 pt-8 pb-8 justify-center content-center items-center border-double border-black" aria-label="certification">
                <button type="button" className="text-1 font-bold p-4 divide-y divide-black text-center ">CERTIFICATION</button>
                    {
                        certificates.map(certificate => {
                            return(
                                <ul className="hover:box hover:box-content hover:shadow-lg hover:opacity-0.5" key={certificate.id}> 
                                    <li className=" text-lg list-none">{certificate.name}</li>
                                    <pre className="italic text-base  sm:text-small break-words overflow-ellipsis overflow-hidden">{certificate.description}</pre>
                                </ul>  
                            )
                        })
                    }
            </section>
    )
}