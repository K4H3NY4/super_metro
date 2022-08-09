import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'



export default function Home() {

  return (
   <>
   <div className="text-left col-6 small"><Link href="/login">Login</Link></div>

   </>
  )
}
