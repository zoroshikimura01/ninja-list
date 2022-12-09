import Head from 'next/head';
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas'/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit id, quam laborum consequatur architecto sint deserunt in ipsa tempore totam quasi, esse voluptatum voluptatem optio voluptas a dolore porro!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit id, quam laborum consequatur architecto sint deserunt in ipsa tempore totam quasi, esse voluptatum voluptatem optio voluptas a dolore porro!</p>
        <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
      </div>
    </>
  )
}
