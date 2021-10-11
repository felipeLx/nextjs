import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {App} from './app'
import {AppProviders} from './context'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="e-commerce: B Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>
            Hello
          </h1>
        </section>
        <AppProviders>
          <App />
        </AppProviders>
        
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Footer
          <span className={styles.logo}>
            <image src="" alt="Footer" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
