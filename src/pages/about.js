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
        <div className={styles.image_container}>
          <img id={styles.about_profile} src="/img/zack-and-karyna.jpg"></img>
        </div>
        <h1>About</h1>
        <p className={styles.subheading}>Hi! I'm Zack. 👋</p>
        <p>I'm a programmer, musician, designer, and artist. I am based in Rochester, Minnesota.</p>
        <p>For programming, I do my work in C#, Node.js, JavaScript, CSS/SCSS, and of course HTML.</p>
        <p>I've been programming since a summer camp in what I believe is 2008. It was a Visual Basic summer camp. Since then I've learned C++, C#, Python, PHP, JavaScript, HTML, CSS, and some MASM. (The last of which I completely hated.)</p>
        <p>I design in Photoshop, Illustrator, and InDesign.</p>
        <p>For music while I have worked in Pro Tools and Logic Pro X, these days I do my work in Reaper for my DAW. It is a joy to make music.</p>
        <p>I have also edited video in Final Cut Pro X and Adobe Premiere Pro.</p>
        <p>For all inquiries please see my <Link href="/contact">contact page.</Link></p>
      </main>
    </>
  )
}
