import styles from "./Product.module.css";
import PageNav from "../Components/PageNav";
import Button from "../Components/Button"; // Import the Button component

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
          <Button type="primary">Buy now  $20    </Button>{" "}
          
        </div>
        <img src="/img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
