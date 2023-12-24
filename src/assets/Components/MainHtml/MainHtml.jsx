import "./MainHtml.css";
import banner from "/Banner.png";
import explore from "/Explore.png";
import products from "/Productos.png";
import { useContext } from "react";
import { useContextHelper } from "../../../../useContextHelper";
import { Telar } from "../Icons/Telar";
import { Arrow } from "../Icons/Arrow";
export const MainHtml = () => {

  const Card = ({ paragraph, img, condition }) => {
    return (
      <article className="personalization-container">
        <div className="decoration-top"></div>
        <p className="paragraph-decoration">{paragraph}</p>
        <div className="image-descript">
          {img}
          <p>Creamos productos totalmente personalizados a gusto del cliente</p>
        </div>
        {condition ? (
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        ) : null}

        {/* <svg
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path d="M35.1355 12.2196L22.5953 2.20399C21.5025 1.33433 20.0242 0.846191 18.4832 0.846191C16.9423 0.846191 15.464 1.33433 14.3712 2.20399L1.83096 12.2196C1.28779 12.657 0.98291 13.2487 0.98291 13.8655C0.98291 14.4823 1.28779 15.074 1.83096 15.5115C2.10207 15.7303 2.42462 15.904 2.78 16.0225C3.13539 16.141 3.51657 16.202 3.90156 16.202C4.28655 16.202 4.66773 16.141 5.02311 16.0225C5.3785 15.904 5.70105 15.7303 5.97216 15.5115L15.5669 7.83048V33.5115C15.5669 34.1307 15.8742 34.7246 16.4211 35.1624C16.968 35.6002 17.7098 35.8462 18.4832 35.8462C19.2567 35.8462 19.9985 35.6002 20.5454 35.1624C21.0923 34.7246 21.3996 34.1307 21.3996 33.5115V7.83048L30.9943 15.5115C31.5396 15.9511 32.2807 16.1993 33.0546 16.2015C33.8285 16.2037 34.5718 15.9597 35.1209 15.5231C35.6701 15.0866 35.9802 14.4933 35.9829 13.8738C35.9856 13.2543 35.6808 12.6592 35.1355 12.2196Z" />
              </svg> */}
      </article>
    );
  };
  return (
    <main>
      <section className="all-section-container">
        <article className="banner">
          <p>
            Explora la <strong>belleza</strong> del <strong>Macramé</strong>
          </p>
          <img src={banner} alt="banner" />
        </article>
        <article className="explore-container">
          <div className="explore-img">
            <div className="decorate-slide-explore"></div>
            <img src={explore} alt="Explore" />
          </div>
          <aside className="paragraph-button">
            <p>
              No sabes <strong>qué es el macramé</strong>? Siéntete bienvenido a
              <strong> explorarlo</strong> aquí
            </p>
            <p className="button-explore">Descubrelo aqui</p>
          </aside>
        </article>
        <article className="shop-container">
          <aside className="paragraph-button">
            <p>
              Quieres <strong>conocer</strong> mas sobre nuestros{" "}
              <strong>productos artesanales</strong>?
            </p>
            <p className="button-explore">Conocelos aqui</p>
          </aside>
          <div className="explore-img">
            <div className="decorate-slide-shop"></div>
            <img src={products} alt="shop" />
          </div>
        </article>
        <section className="section-cards">
          <Card
            paragraph="Productos personalizados"
            img=<Telar></Telar>
            condition={true}
          ></Card>
          <div className="arrow-paragraph"></div>
        </section>
        <article className="about-me">
          <h3 className="h3-title">¿Quienes somos?</h3>
          <div className="paragraph-about">
            <p>
              En el corazón de nuestra empresa está{" "}
              <strong>la pasión por el macramé</strong>, una técnica artesanal
              que valoramos y compartimos con el mundo. Nos dedicamos a{" "}
              <strong>crear productos auténticos y duraderos</strong>,
              fusionando la tradición con un toque contemporáneo.
            </p>
            <p>
              Nuestro equipo, formado por <strong>apasionados</strong>{" "}
              artesanos, trabaja meticulosamente para asegurar la calidad en
              cada pieza que creamos. Desde pulseras hasta decoración para el
              hogar, cada artículo refleja nuestra dedicación a la{" "}
              <strong>autenticidad </strong>y la
              <strong> estética sencilla.</strong>
            </p>
            <p>
              <strong>Explora</strong> nuestra colección diversa y descubre cómo
              el macramé puede enriquecer tu estilo y tu espacio. Bienvenido a
              nuestra comunidad, donde la artesanía se encuentra con la
              <strong> simplicidad</strong>.
            </p>
          </div>
          <div className="decoration-bottom"></div>
        </article>
        <article></article>
      </section>
    </main>
  );
};
