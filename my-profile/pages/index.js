import Image from 'next/image'
import Head from 'next/head'
import SideBar from './components/sidebar'
import MainBody from './components/experience'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Felipe Lisboa</title>
      </Head>

      <main className="container w-full max-h-auto">
        <nav className="flex flex-wrap bg-black p-4 items-center justify-around content-around text-center text-white hover:bg-white hover:text-black">
          <h1 className="tracking-wide leading-7 font-semibold font-mono text-xl subpixel-antialiased hover:uppercase align-middle bg-gradient-r from-red-800 via-yellow-500 to-blue-300">
            FELIPE LISBOA
          </h1>
        </nav>
        <Image src="/face.png" height={80} width={80} className="rounded-full float-right flex relative sm:text-center sm:align-center md:align-left sm:object-top md:object-top lg:object-left xl:object-left object-cover" alt="" />
        <div className="flex flex-col text-center p-0 h-auto lg:flex-row xl:flex-row">
          <SideBar />
        
          <MainBody />
          
       
        </div>
          
      </main>
    </div>
  )
}
