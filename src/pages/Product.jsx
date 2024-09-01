import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Product.module.css";
import PageNav from "../Components/PageNav";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomArrow = ({ type, onClick }) => {
  const isNext = type === "next";
  return (
    <button
      onClick={onClick}
      className={`${styles.customArrow} ${isNext ? styles.next : styles.prev}`}
    >
      <FontAwesomeIcon
        icon={isNext ? faChevronRight : faAngleLeft}
        style={{ color: "#00c46a", fontSize: "26px" }}
        className={styles.iconSize} 
      />
    </button>
  );
};

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <Carousel
        showStatus={false}
        renderArrowNext={(onClickHandler) => (
          <CustomArrow type="next" onClick={onClickHandler} />
        )}
        renderArrowPrev={(onClickHandler) => (
          <CustomArrow type="prev" onClick={onClickHandler} />
        )}
      >
        <div className={styles.slide}>
          <section>
            <img
              src="img-1.jpg"
              alt="person with dog overlooking mountain with sunset"
            />
            <div className={styles.overlay}>
              <h2>About WorldWise.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                est dicta illum vero culpa cum quaerat architecto sapiente eius
                non soluta, molestiae nihil laborum, placeat debitis, laboriosam
                at fuga perspiciatis?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis doloribus libero sunt expedita ratione iusto, magni, id
                sapiente sequi officiis et.
              </p>
            </div>
          </section>
        </div>

        <div className={styles.slide}>
          <section>
            <img
              src="img-2.jpg"
              alt="person with dog overlooking mountain with sunset"
            />
            <div className={styles.overlay}>
              <h2>About WorldWise.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                est dicta illum vero culpa cum quaerat architecto sapiente eius
                non soluta, molestiae nihil laborum, placeat debitis, laboriosam
                at fuga perspiciatis?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis doloribus libero sunt expedita ratione iusto, magni, id
                sapiente sequi officiis et.
              </p>
            </div>
          </section>
        </div>

        <div className={styles.slide}>
          <section>
            <img
              src="img-1.jpg"
              alt="person with dog overlooking mountain with sunset"
            />
            <div className={styles.overlay}>
              <h2>About WorldWise.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                est dicta illum vero culpa cum quaerat architecto sapiente eius
                non soluta, molestiae nihil laborum, placeat debitis, laboriosam
                at fuga perspiciatis?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis doloribus libero sunt expedita ratione iusto, magni, id
                sapiente sequi officiis et.
              </p>
            </div>
          </section>
        </div>
      </Carousel>
    </main>
  );
}
