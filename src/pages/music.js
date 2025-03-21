import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Music.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Music</title>
        <meta name="description" content="Zack Morgenthaler | Music" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          {/* <div className={styles.image_container}>
            <Image className={styles.profile} src="/img/playing-guitar.jpg" width={1280} height={1280} alt="Zack playing guitar"/>
          </div> */}
          <h1>Music</h1>
          <p className="subheading">
            Cause music makes the world go round!
          </p>
        </section>
        <section className={styles.content}>
          <p>You can find my work with Amienus on Discogs!</p>
          <a className={styles.btn_discogs} href="https://www.discogs.com/artist/3429641-Zack-Morgenthaler">
            <Image src="/img/discogs-logo.svg" width={64} height={32} alt="Discogs Logo (Link to my Discogs Page)" />
          </a>
        </section>
        <section>
          <h2>Soundcloud</h2>
          <a id={styles.soundcloud_btn} className="btn" href="https://soundcloud.com/zack-morgenthaler-505021258">
            <Image className="social-icon" src="/img/icon-soundcloud.svg" width={365} height={365} alt="Soundcloud Logo" />
          </a>
        </section>
        <section>
          <h2>Metal Bands</h2>
          <ul>
            <li>
              <a href="https://facebook.com/Amiensus">
                Amiensus
              </a>
            </li>
            <li>
              <a href="https://facebook.com/phantasmora">
                Phantasmora
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
