import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import Header from "@/components/header"
import Footer from '@/components/footer'
import Note from '@/components/note';
import CreateArea from '@/components/createArea'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes((prevNote)=>{return [...prevNote, newNote]})
  }

  function handleDelete(id){
    setNotes((prevNotes)=>{
      return prevNotes.filter((itemNote, index)=>{
        return index !== id
      })
    })
  }

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
        <CreateArea sendNote={addNote}/>
        {notes.map((noteItem, index)=>{
          return(
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            deleteNote={handleDelete}
          />
        )})}
        <div>
          <Footer></Footer>
        </div>
      </main>
    </>
  )
}
