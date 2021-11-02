import Image from 'next/image'
import Head from 'next/head'
import SideBar from './components/sidebar'
import MainBody from './components/experience'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <meta name="description" content="my profile like developer" />
        <title>Felipe Lisboa</title>
      </Head>

      <main className="w-full p-0 m-0">
        <nav className="flex flex-wrap items-center static relative space-around text-center text-white bg-gradient-to-r from-blue-900 to-red-500 hover:bg-gradient-to-l">
        <Image src="/face.png" height={120} width={120} className="rounded-full ml-40 absolute overflow-visible" alt="" />
          <h1 className="tracking-wide leading-7 font-semibold flex-grow text-center justify-center text-xl subpixel-antialiased ">
            FELIPE LISBOA
          </h1>
        </nav>
        <div className="flex flex-col flex-cols-2 text-center lg:flex-row xl:flex-row items-stretch">
          <SideBar />
        
          <MainBody />
          
       
        </div>
          
      </main>
    </div>
  )
}
