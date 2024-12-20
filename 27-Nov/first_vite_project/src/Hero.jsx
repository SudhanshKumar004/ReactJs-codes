function Hero(){
    return(
        <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/718/10989/1690874880367/front-left-side-47.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/Taycan-2024/11515/1707404051019/front-left-side-47.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/718/10989/1690874880367/front-left-side-47.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}

export default Hero;