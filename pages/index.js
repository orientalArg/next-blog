import styles from '../styles/Home.module.css'
import imageUrlBuilder from '@sanity/image-url'
import {useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'

export default function Home({ posts }) {
  const router= useRouter()
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length){
      const imgBuilder = imageUrlBuilder({
        projectId: 'i14w30tm',
        dataset: 'production',
    })

    setMappedPosts(
      posts.map(p => {
        return {
          ...p,
          mainImage: imgBuilder.image(p.mainImage).width(600).height(250),
        }
      })
    )
    } else {
    setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div>
      <Hero />
      <Header />
      <div className={styles.main}>
        <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push( `/post/${p.slug.current}`)} key={index} className={styles.post}>
              <h3>{p.title}</h3>
              <img className={styles.mainImage} alt="" src={p.mainImage} />
            </div>
          )) : <>No posts yet</>}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent(`*[ _type == "post"]`)
  const url = `https://i14w30tm.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json())

  if (!result.result || !result.result.length ) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
}
