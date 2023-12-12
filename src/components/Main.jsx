const Main = () => {
  return (
    <main>
      <section>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.comedera.com/wp-content/uploads/2022/06/Empanada-argentina-de-chorizo-shutterstock_1914891745.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Empanadas</h5>
                <p>Las mejores empanadas de Argentina</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.comunicare.es/wp-content/uploads/2021/01/Publicidad-para-hamburguesas.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-dark">Hamburguesas con Triple carne</h5>
                <p className="text-dark">
                  {" "}
                  Las mas ricas y grandes hamburguesas
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://tn.com.ar/resizer/ut0O9ZADEg5f9dy3jXm7K9ERr4A=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/NAQJ2ULP3VDRBJCSYLFKB2IMEA.jfif"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Sandwich de Milanesa</h5>
                <p>El mejor de todo Argentina !!!</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <h1 className="mt-3 mb-3">Veni a comer rico y mucho !!!</h1>
      <section className="mb-5">
        <article className="row">
          <div className="col-sm-12 col-lg-4 mt-3">
            <div className="card cardStyle">
              <img
                src="https://www.lanacion.com.ar/resizer/v2/parrillada-completa-BCMNCK4U35CBNHAHVLKS3S2R5Y.jpg?auth=9a156e897b2f058181cf11dcf105762dc445b59640712d42824718870f2f897f&width=420&height=280&quality=70&smart=true"
                className="card-img-top cardImg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-white ">Parrilada</h5>
                <p className="card-text"></p>
              </div>
            </div>
            
          </div>
          <div className="col-sm-12 col-lg-4 mt-3">
            <div className="card">
              <img
                src="https://www.laautenticadefensa.net/2021/05/22/210522-52.JPG"
                className="card-img-top cardImg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-white">Pastel de Papa</h5>
                <p className="card-text"></p>
              </div>
            </div>
            
          </div>
          <div className="col-sm-12 col-lg-4 mt-3">
            <div className="card ">
              <img
                src="https://www.recetasparaguay.com/base/stock/Recipe/85-image/85-image_web.jpg.webp"
                className="card-img-top cardImg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-white">Parrilada</h5>
                <p className="card-text"></p>
              </div>
            </div>
            
          </div>
        </article>
      </section>
      <h2>
      Descubre un festín de sabores en cada bocado. En ¡A Comer se Dijo!, transformamos la comida en una experiencia irresistible. ¡Deléitate con el sabor y haz que cada comida sea una celebración!
      </h2>
    </main>
  );
};

export default Main;
