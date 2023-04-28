import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import Header from "@/components/header"
import Footer from '@/components/footer'
import Note from '@/components/note';
import Notes from "@/components/notes";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Keeper App</title>
        <meta name="description" content="Keeper App Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Header></Header>
        </div>
        {Notes.map((note) => (
          <Note
          key={note.key}
          title={note.title}
          content={note.content}
        />))}
        <div>
          <Footer></Footer>
        </div>
      </main>
    </>
  )
}
