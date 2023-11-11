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
        <div className="md:flex-row justify-center space-around">
          <header className="hero">
            <div className={styles.image_container}>
              <img id={styles.about_profile} src="/img/zack-and-karyna.jpg"></img>
            </div>
            <h1>About</h1>
            <p className="subheading">Hi! I'm Zack. 👋</p>
            <p>I'm a programmer, musician, designer, and artist. I am based in Rochester, Minnesota.</p>

          </header>
          <div className={styles.column}>
            <section className="intro">
              <h3>Education</h3>
              <p>I studied Computer Science and Graphic Design at <a href="https://whitworth.edu">Whitworth University</a>.</p>
              <h3>Work History</h3>
              <p>In the past I've worked at <a href="https://www.aasmnet.org/">AASM</a>, <a href="https://trinity.one/">Trinity.One</a> and <a href="https://www.facebook.com/CSIOnsiteBloomington/">CSI Tech Corp</a>.</p>
              <p>Recently, I've started my own company over at <a href="https://apportal.io">APPportal</a></p>
              <p>To see a list of companies I've worked for in the past please head over to my <Link href="/portfolio">portfolio page</Link>. </p>
            </section>

          </div>
        </div>
        <div className={styles.mw_column}>
          <section id="skills">
            <h3>Programming Languages</h3>
            <p>I've been programming since a summer camp in what I believe is 2008. It was a Visual Basic summer camp.</p>
            <p>I picked up where I left off learning C++ at <a href="https://whitworth.edu/">Whitworth</a>. It was here that I first learned about data structures and algorithms. I wouldn't be where I am today without a good education from them.</p>
            <p>For programming, I do most of my work in C#, Node.js, JavaScript, CSS/SCSS, and of course HTML.</p>
            <p>However, here is a more extensive list of langauges I am familiar with using:</p>
            <ul className={styles.skill}>
              {['JavaScript', 'CSS/SCSS', 'HTML', 'C#', 'Python', 'Swift', 'Objective-C', 'PHP', 'MASM'].map((language, index) => (
                <li key={index} className={styles.listItem}>{language}</li>
              ))}
            </ul>
          </section>
          <section id="design">
            <h3>Design</h3>
            <p>For websites, I typically do my designs in the browser using HTML5 and SCSS.</p>
            <p>I also design and edit in Photoshop, Illustrator, and InDesign.</p>
          </section>
          <section id="audio_production">
            <h3>Audio Production</h3>
            <p>For music and audio production I have worked in Pro Tools and Logic Pro X in past. These days I do my work in Reaper for my DAW. It is a joy to compose music as well as mix and master my own songs.</p>
          </section>
          <section id="video_production">
            <h3>Video Production</h3>
            <p>I have also edited video in Final Cut Pro X and Adobe Premiere Pro.</p>
          </section>
          <section id="contact">
            <h4>Get In Touch</h4>
            <p>For all inquiries please see my <Link href="/contact">contact page.</Link></p>
            <Link href="/contact" className="btn">
              Contact
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}
