import Image from "next/image";
import styles from "@/components/Home/Contact/Contact.module.scss"

const Contact = () => {
  return <div>
    <div className={styles.contact} id="contact">
      <div className={styles.images}>
        <Image src={"/contact-image-1.png"} alt="contact-1" width={1120} height={688} />
        <Image src={"/contact-image-2.png"} alt="contact-2" width={309} height={300} />
      </div>
      <form>
        <h1>WANT TO HAVE AN<br />AWESOME PROJECT DONE?</h1>
        <div className={styles.input}>
          <input type="text" placeholder="Enter your e-mail here" />
          <button>Contact</button>
        </div>
      </form>
    </div>
  </div>
}

export default Contact;