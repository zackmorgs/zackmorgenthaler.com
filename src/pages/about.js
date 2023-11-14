import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/About.module.css'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>Zack Morgenthaler | About</title>
        <meta name="description" content="A personal website " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div id={styles.card} className="md:flex-row justify-center space-between">
          <header className="hero">
            <div className={styles.image_container}>
              <Image id={styles.about_profile} src="/img/zack-and-karyna.jpg" width={1024} height={1024} alt="Zack and Karyna" />
            </div>
          </header>
          <div className={styles.about}>
            <h1>About</h1>
            <p className="subheading">Hi! I&apos;m Zack. 👋</p>
            <p>I&apos;m a programmer, musician, designer, and artist. I am based in Rochester, Minnesota.</p>
            <p>Thanks for visiting my website! I hope it gives you a good feel for who I am and what I&apos;m all about.</p>
            {/* <Link className="btn" href="/portfolio">Portfolio</Link> */}
          </div>
        </div>
        <br />
        <div className="md:flex-row  justify-left">
          <section className={styles.column}>
            <h3>Education</h3>
            <p>I studied Computer Science and Graphic Design at <a href="https://whitworth.edu">Whitworth University</a>.</p>
            <p>I wouldn&apos;t be where I am today without the excellent education they provided.</p>
            <h3>Work History</h3>
            <p>In the past I&apos;ve worked at <a href="https://www.aasmnet.org/">AASM</a>, <a href="https://trinity.one/">Trinity.One</a> and <a href="https://www.facebook.com/CSIOnsiteBloomington/">CSI Tech Corp</a>.</p>
            <p>Recently, I&apos;ve started my own company over at <a href="https://apportal.io">APPportal</a></p>
            <p>To see a list of companies I&apos;ve worked for in the past please head over to my <Link href="/portfolio">portfolio page</Link>. </p>
          </section>
          <section id="skills" className={styles.column}>
            <h3>Programming Languages</h3>
            <p>The story starts in high school where I was a super cool kid who spent his summer in a coding camp learning Visual Basic.</p>
            <p>I picked up where I left off learning C++ at <a href="https://whitworth.edu/">Whitworth</a> among a multitude of other langauges. It was here that I first learned about data structures and algorithms.</p>
            <p>For programming, I do most of my work in C#, Node.js, JavaScript, CSS/SCSS, and of course HTML.</p>
            <p>However, here is a more extensive list of langauges I am familiar with using:</p>
            <ul className={styles.skill}>
              {['JavaScript', 'CSS/SCSS', 'HTML', 'C#', 'Python', 'Swift', 'Objective-C', 'PHP', 'MASM'].map((language, index) => (
                <li key={index} className={styles.listItem}>{language}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className="md:flex-row justify-left">
          <section id="design" className={styles.column}>
            <h3>Design</h3>
            <p>For websites, I typically do my designs in the browser using HTML5 and SCSS.</p>
            <p>I also design and edit in Photoshop, Illustrator, and InDesign.</p>
          </section>

          <section id="audio_production" className={styles.column}> 
            <h3>Audio Production</h3>
            <p>For music and audio production I have worked in Pro Tools and Logic Pro X in past. These days I do my work in Reaper for my DAW. It is a joy to compose music as well as mix and master my own songs.</p>
          </section>
        </div>
        <div className="md:flex-row justify-left">
          <section id={styles.video_production}  className={styles.column}>
            <h3>Video Production</h3>
            <p>I have also edited video in Final Cut Pro X and Adobe Premiere Pro.</p>
            <p>I used to know a bit of After Effects but that knowledge is long gone.</p>
          </section>
        </div>
        {/* <div className="md:flex-row justify-left lg:space-around">
          <section id={styles.contact}>
            <h4>Get In Touch</h4>
            <p>For all inquiries please see my <Link href="/contact">contact page.</Link></p>
            <Link href="/contact" className="btn">
              Contact
            </Link>
          </section>
        </div> */}
      </main>
    </>
  )
}
