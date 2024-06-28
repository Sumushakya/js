import styles from "./herosection.module.css";
export default function HeroSection() {
  return (
    <div>
      <main className={styles.hero}>
        <div classname={styles.heroContent}>
          <h1 classname={styles.h1}>YOUR FEET DESERVE THE BEST</h1>
          <p className={styles.p}>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className={styles.heroBtn}>
            <button>Shop Now</button>
            <button className={styles.b2}>Category</button>
          </div>
          <div className={styles.shop}>
            <p>Available on</p>
            <div className={styles.brand}>
              <img src="/images/flipkart.png" alt="flipkartlogo" />
              <img src="/images/amazon.png" alt="amazonlogo" />
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/images/shoe_image.png" alt="heroimage" />
        </div>
      </main>
    </div>
  );
}
