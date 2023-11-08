import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Contact.module.css'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact information for Zack Morgenthaler" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Contact</h1>
        <p>Feel free to contact me through the following channels:</p>
        <a className="btn" href="mailto:zackmorgenthaler@gmail.com"><span class="material-symbols-outlined icon">mail</span> Email</a>
        <br/>
        <a className="btn" href="tel:+15072511772"><span class="material-symbols-outlined icon">call</span> Phone</a>
      </main>
    </>
  )
}
