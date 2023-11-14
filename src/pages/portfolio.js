import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { companies } from "@/data/companies"

import styles from '@/styles/Portfolio.module.css'

export default function Page() {
  return (
    <>
      <Head>
        <title>Zack Morgenthaler | Portfolio</title>
        <meta name="description" content="Zack Morgenthaler's Portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <section className="hero">
          <h1>Portfolio</h1>
          <p><i>Well, for programming...</i></p>
        </section>
        {/* <section>
          <h3>Languages</h3>

        </section> */}
        <section className={styles.section}>
          <h3>Work History</h3>
          <p>In the past I've worked at <a href="https://www.aasmnet.org/">AASM</a>, <a href="https://trinity.one/">Trinity.One</a> and <a href="https://www.facebook.com/CSIOnsiteBloomington/">CSI Tech Corp</a>. These companies also worked for the other companies listed below.</p>
        </section>
        <section>
          <h3>Companies</h3>
          <p>Here is a list of companies I have worked for whether it was UX studies, design, or fullstack web development on a brand new site.</p>
          <ul className={styles.companies}>
            {companies.map((company, index) => (
              <li key={index} className={styles.company_li}>
                <Link href={company.url} alt={company.name + " Website"} className={styles.company_link}>
                  {company.logo}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        {/* <section id="contact" className={styles.contact}>
          <h4>Get In Touch</h4>
          <p>For all inquiries please see my <Link href="/contact">contact page.</Link></p>
          <Link href="/contact" className="btn">
            Contact
          </Link>
        </section> */}
      </main>
    </>
  )
}