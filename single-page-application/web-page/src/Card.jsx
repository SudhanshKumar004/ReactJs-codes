import './Card.css'
import card1 from './assets/mac.jpg'
import card2 from './assets/lf.jpeg'
import card3 from './assets/918.jpg'

function Card(){
    return(
        <>
         <section className="car-cards">
  <h2>THE HOLY TRINITY</h2>
  <div className="card-container">
    <div className="card">
      <img src={card1} alt="Car 1" className="car-image"/>
      <h3>Maclaren P1</h3>
      <p className="car-details">The McLaren P1 is a limited-production hybrid supercar from McLaren Automotive, renowned for its extraordinary performance, cutting-edge technology, and striking design.</p>
    </div>

    <div className="card">
      <img src={card2} alt="Car 2" className="car-image"/>
      <h3>Ferrari LaFerrari</h3>
      <p className="car-details">The LaFerrari is Ferrari's flagship hypercar, known for its groundbreaking performance, innovative technology, and stunning design.It blends a powerful internal combustion engine with hybrid technology.</p>
    </div>

    <div className="card">
      <img src={card3} alt="Car 3" className="car-image"/>
      <h3>Porsche 918 Spyder</h3>
      <p className="car-details">The Porsche 918 Spyder is a groundbreaking hypercar that blends incredible performance with cutting-edge hybrid technology.The 918 Spyder represents the pinnacle of Porsche's engineering.</p>
    </div>
  </div>
</section>


        </>
    )
}

export default Card;