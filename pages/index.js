import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trips API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> Trips API </h1>
        <p className={styles.description}>The documentation </p>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h2>
              <code>GET /trips</code>
            </h2>
            <p>List all the trips</p>
            <p>...</p>
          </div>

          <div className={styles.card}>
            <h2>
              <code>GET /trip</code>
            </h2>
            <p>Get the details of the trip</p>
            <p>...</p>
          </div>

          <div className={styles.card}>
            <h2>
              <code>POST /trip</code>
            </h2>
            <p>Create a new trip</p>
            <p>...</p>
          </div>

          <div className={styles.card}>
            <h2>
              <code>PUT /trip</code>
            </h2>
            <p>Edit new trip</p>
            <p>...</p>
          </div>

        </div>
      </main>
    </div>
  )
}
