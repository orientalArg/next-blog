import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Style from '../styles/About.module.css'

export default function About () {
    return (
        <>
        <Hero/>
        <Header />
        <div className={Style.main}>
            <h1>Our Motivation</h1>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque veniam reiciendis commodi labore, minima modi eos inventore, assumenda, provident error excepturi rem a! Nam, mollitia.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque veniam reiciendis commodi labore, minima modi eos inventore, assumenda, provident error excepturi rem a! Nam, mollitia.</p>
            </div>
            <br/>
            <button>Learn More &rarr;</button>
            
            <h1>Building a community <br/>to share our vision.</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita id reiciendis ad molestias consequatur illum! Ut veritatis dignissimos quisquam dolores sint facilis sit asperiores! Ipsum, sed. Dicta, magnam similique.</p>
            </div>
        </div>
        <Footer />
        </>
    )
}