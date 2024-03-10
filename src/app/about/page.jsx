import styles from "./about.module.css";
import Image from "next/image";

export const metadata = {
  title: 'About page',
  description: 'About description',
}

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          Welcome to DevAgency, where innovation meets execution. Our team of
          skilled developers is dedicated to bringing your digital ideas to
          life, delivering top-notch solutions that exceed expectations. From
          custom web applications to scalable software solutions, we are here to
          empower your business for the digital age.
        </p>

        <div className={styles.boxes}>
            <div className={styles.box}>
                <h1>5 K+</h1>
                <p>Year of experience</p>
            </div>

            <div className={styles.box}>
                <h1>100 K+</h1>
                <p>People reached</p>
            </div>

            <div className={styles.box}>
                <h1>2 K+</h1>
                <p>Services and plugins</p>
            </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
