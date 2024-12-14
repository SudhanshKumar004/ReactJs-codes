import img from "./assets/card1.jpeg";

function Comp2() {
  return (
    <>
      <h1 className="text-center">Our Feature Tour</h1>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit laborum
        illum, in odio perspiciatis consectetur nihil nemo non placeat corrupti
        at esse doloribus id minima necessitatibus error corporis?
        Exercitationem, quis! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Dolorum reiciendis vel odio, nihil soluta similique,
        veritatis tempora omnis quia doloribus nisi dolore blanditiis assumenda
        consectetur quas asperiores? Aperiam, beatae esse.
      </p>
      <div className="container text-center">
        <div className="card p-2" style={{ width: "20rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Thailand</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div style={{display:"flex", justifyContent:"center", gap:"80px",borderRadius:"2px"}} >
            <h2>$856</h2>
            <a href="#" className="btn btn-primary row" style={{borderRadius:"29px"}}>
              Book Now
            </a>
            </div>
          </div>
        </div>
        <div className="card p-2" style={{ width: "20rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Canada</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div style={{display:"flex", justifyContent:"center", gap:"80px"}}>
            <h2>$856</h2>
            <a href="#" className="btn btn-primary" style={{borderRadius:"29px"}}>
              Book Now
            </a>
            </div>
          </div>
        </div>
        <div className="card p-2 w-20" style={{ width: "20rem" }}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Kerela</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div style={{display:"flex", justifyContent:"center", gap:"80px"}}>
            <h2 className="">$856</h2>
            <a href="#" className="btn btn-primary" style={{borderRadius:"29px"}}>
              Book Now
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comp2;
