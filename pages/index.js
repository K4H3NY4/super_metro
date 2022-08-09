import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'



export default function Home() {

  function loadtoLogin() {
                    
    Router.push('/login')
}
setTimeout(loadtoLogin, 2500)
  return (
   <>
   <div className='flex h-screen bg-black'>
    <div className='m-auto'>


  <Image src="/ZWdx.gif" alt="logo" width={200} height={200} />

  </div>
  </div>

   </>
  )
}
