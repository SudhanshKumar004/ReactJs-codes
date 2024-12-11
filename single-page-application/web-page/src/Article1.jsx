import './Article.css'
import img1 from './assets/drift1.jpg'
import img2 from './assets/drift2.webp'

function Article1 (){
    return(
    <>
        <section className="about">
            <h2>About Us</h2>
            <img src={img1} alt="" className='img1' />
            <p>Welcome to Drive Nation, your ultimate destination for everything automotive. Whether you're a car enthusiast or someone looking to purchase your first vehicle, we provide expert advice, car reviews, and the latest industry news.</p>
            <img src={img2} alt="" className='img2' />
            <p>At Drive Nation, we are passionate about all things cars — from classic models to the latest high-performance machines. Our goal is to connect car lovers with the information and resources they need to make informed decisions about their next ride.</p>
        </section>
    </>
    )
}

export default Article1;