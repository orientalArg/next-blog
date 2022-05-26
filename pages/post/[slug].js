import {useState, useEffect} from 'react'
import imageUrlBuilder from '@sanity/image-url'
import styles from '../../styles/post.module.css'
import BlockContent from '@sanity/block-content-to-react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import Link from 'next/link'

export const Post = ({title, body, image}) => {
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        const imgBuilder = imageUrlBuilder({
            projectId: 'i14w30tm',
            dataset: 'production',
        })

        setImageUrl(imgBuilder.image(image))
    }, [image])

    return (
        <div>
            <Header />
            <div className={styles.main}>
                <h1>{title}</h1>
                {imageUrl && <img className={styles.mainImage} src={imageUrl} alt="" />}

                <div className={styles.body}>
                    <BlockContent blocks={body} />
                </div>

                <br/>
                <br/>
                <Link href="/">
                    <a>&larr; back to home</a>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug;

    if (!pageSlug) {
        return {
            notFound: true
        }
    }

    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
    const url = `https://i14w30tm.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json())
    const post = result.result[0]

    if (!post) {
        return {
            notFound: true
        }
    }   else {
        return {
            props: {
                body: post.body,
                title: post.title,
                image:post.mainImage,

            }
        }
    }
}

export default Post;
