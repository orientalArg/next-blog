import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css'
import Head from 'next/head'

export const Header = () => {
    const router = useRouter();

    return (
        <>
        <Head>
            <title>Military News</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className={styles.main}>
            <a onClick={() => router.push("/")}>Home</a>
            <a onClick={() => router.push("/about")}>About</a>
            <a>Tags</a>
            <a>Contact</a>
        </header>
        </>
    )
}

export default Header