import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Contact.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Zack Morgenthaler | Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Blog</h1>
        </section>
        <section className={styles.content}>
          <p>This page is under construction!</p>
        </section>
      </main>
    </>
  )
}
