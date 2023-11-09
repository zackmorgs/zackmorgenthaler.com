import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Portfolio.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Head>
        <title>Zack Morgenthaler | Portfolio</title>
        <meta name="description" content="A personal website " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="main">
        <h1>Portfolio</h1>
      </main>
    </>
  )
}