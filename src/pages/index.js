import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zack Morgenthaler</title>
        <meta name="description" content="A personal website " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.image_container} >
          <img className={styles.profile} src="/img/playing-guitar.jpg"></img>
        </div>
        <h1>Zack Morgenthaler</h1>
        <p className={styles.subheading}>Programmer, Music Maker, and Artist</p>
        <Link href="/about" className="btn btn-primary">
          About Me
        </Link>
      </main>
    </>
  )
}
