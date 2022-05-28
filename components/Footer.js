import styles from '../styles/Footer.module.css'
import Image from 'next/image'


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <a href="#">About Us</a>
                <a href="#">Find Us</a>
                <a href="#">Contact Us</a>
            </div>
            <div Style="border-top: solid 1px #656565; border-bottom: solid 1px #656565;">
                <div Style="gap: 5px;">
                    <p>Follow Us</p>
                    <Image
                        className={styles.icon}
                        src="/images/ion_logo-whatsapp.svg"
                        alt="whatsapp"
                        width={25}
                        height={25}
                    />
                    <Image
                        className={styles.icon}
                        src="/images/ion_logo-youtube.svg"
                        alt="youtube"
                        width={25}
                        height={25}
                    />
                    <Image
                        className={styles.icon}
                        src="/images/ion_logo-twitter.svg"
                        alt="twitter"
                        width={25}
                        height={25}
                    />
                    
                </div>
                <div Style="gap: 5px;">
                    <Image
                        className={styles.icon}
                        src="/images/ion_logo-windows.svg"
                        alt="windows"
                        width={25}
                        height={25}
                    />
                    <Image
                        className={styles.icon}
                        src="/images/ion_logo-apple.svg"
                        alt="apple"
                        width={25}
                        height={25}
                    />
                    <p>Mobile App</p>
                </div>
            </div>

            <p>2020 - 2023 NuevasNews S.A</p>
        </footer>
    )
}

export default Footer