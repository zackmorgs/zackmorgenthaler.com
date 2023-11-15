import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zack Morgenthaler | Homepage</title>
        <meta name="description" content="Zack Morgenthaler | Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className="lg:flex-row justify-center align-center space-around">
          <div className={styles.image_container} >
            <Image className={styles.profile} src="/img/pro-shot.jpg" width={1280} height={1280} alt="Zack Morgenthaler" />
          </div>
          <div className={styles.column}>
            <section className={styles.cta}>
              <h1>Zack Morgenthaler</h1>
              <p className={styles.subheading}>Programmer, Music Maker, and Artist</p>
              <Link href="/about" className="btn btn-primary">
                About Me
              </Link>
            </section>
            <section>
              <h4>GitHub</h4>
              <a className="btn" href="https://github.com/zackmorgs">
                <Image className="social-icon" src="/img/icon-github.svg" width={365} height={365} alt="GitHub Logo" />
              </a>
            </section>
            <section className={styles.social}>
              <h4>Other Sites</h4>
              <ul id="social_links">
                {[
                  {
                    url: "https://www.facebook.com/zackmorgs/",
                    icon: <Image className="social-icon" src="/img/icon-fb.svg" width={365} height={365} alt="Facebook Logo" />
                  },
                  {
                    url: "https://soundcloud.com/zack-morgenthaler-505021258",
                    icon: <Image className="social-icon" src="/img/icon-soundcloud.svg" width={365} height={365} alt="Soundcloud Logo" />
                  },
                  {
                    url: "https://www.linkedin.com/in/zackmorgenthaler",
                    icon: <Image className="social-icon" src="/img/icon-linkedin.svg" width={365} height={365} alt="Soundcloud Logo" />
                  },
                  {
                    url: "https://www.youtube.com/@ZackMorgenthaler",
                    icon: <Image className="social-icon" src="/img/icon-youtube.svg" width={365} height={365} alt="YouTube Logo" />
                  },
                  {
                    url: "https://www.deviantart.com/zackmorgenthaler",
                    icon: <Image className="social-icon" src="/img/icon-deviantart.svg" width={365} height={365} alt="Deviant Art Logo" />
                  },
                  {
                    url: "https://twitter.com/zackmorg",
                    icon: <Image className="social-icon" src="/img/icon-x.svg" width={365} height={365} alt="X/Twitter Logo" />
                  }
                ].map((social, index) => (
                  <li key={index}>
                    <a className="btn" href={social.url}>
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

      </main>
    </>
  )
}
