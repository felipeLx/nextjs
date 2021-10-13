import Head from 'next/head'
import Footer from 'components/footer'
import {App} from './app'
import {AppProviders} from 'context'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>B Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <nav>
          <ul>
            <li>About</li>
            <li>History</li>
          </ul>
        </nav>
        <h1 className="text-6xl font-bold">
          Products
        </h1>

        <p className="mt-3 text-2xl">
          Subtitle
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Games &rarr;</h3>
            <p className="mt-4 text-xl">
              Descubra os joguinhos eletronicos
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">H.Q. &rarr;</h3>
            <p className="mt-4 text-xl">
              Historia em Quadrinhos
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Roupas &rarr;</h3>
            <p className="mt-4 text-xl">
              Seu heroi em roupas e acessorios
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Souvenirs &rarr;</h3>
            <p className="mt-4 text-xl">
              Souvenirs e presentes
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
