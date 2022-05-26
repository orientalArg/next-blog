import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css'

export const Header = () => {
    const router = useRouter();

    return (
        <header className={styles.main}>
            <a onClick={() => router.push("/")}>Home</a>
            <a onClick={() => router.push("/about")}>About</a>
            <a>Tags</a>
            <a>Contact</a>
        </header>
    )
}

export default Header