import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Contact.module.css'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Zack Morgenthaler | Contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Contact</h1>
        </section>
        <section className={styles.content}>
          <p className="subheading">Want to drop me a line?</p>
          <p>Feel free to contact me through the following channels:</p>
          <ul className="btn-list">
            <li>
              <a className="btn" href="tel:+15072511772"><span class="material-symbols-outlined icon">call</span> Phone</a>
            </li>
            <li>
              <a className="btn" href="mailto:zackmorgenthaler@gmail.com"><span class="material-symbols-outlined icon">mail</span> Email</a>
            </li>
          </ul>

        </section>
        <section className={styles.social}>
          <h4>Other Sites</h4>
          <ul id="social_links" className={styles.social_links}>
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
      </main>
    </>
  )
}
