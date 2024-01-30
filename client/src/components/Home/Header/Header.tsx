import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Home/Header/Header.module.scss"
import { social_links } from "@/config"

const Header = () => {
  return <div>
    <header className={styles.header}>
      <div className={styles.content}>
        <h3>Hi, i'm</h3>
        <h1>Aminov Ali</h1>
        <p>Web developer</p>
        <Link href={"/#contact"}><button>Contact</button></Link>
        <div className={styles.social_links}>
          {social_links.map((el, index) => (
            <Link href={el.href} key={index}>{el.svg}</Link>
          ))}
        </div>
        <Link href={"/#projects"}>
          <div className={styles.bottom}>
            <div>
              <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 17.93C39.92 9.15001 32.8 2.07001 24 2.07001C15.2 2.07001 8.08 9.15001 8 17.93V29.93C8 38.77 15.16 45.93 24 45.93C32.84 45.93 40 38.77 40 29.93V17.93ZM36 17.93H26V6.25001C31.62 7.19001 35.92 12.05 36 17.93ZM22 6.25001V17.93H12C12.08 12.05 16.38 7.19001 22 6.25001ZM36 29.93C36 36.55 30.62 41.93 24 41.93C17.38 41.93 12 36.55 12 29.93V21.93H36V29.93Z" fill="white" />
              </svg>
            </div>
            <div>
              <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 12.82L33.18 10L24 19.16L14.82 10L12 12.82L24 24.82L36 12.82Z" fill="white" />
                <path d="M36 26L33.18 23.18L24 32.34L14.82 23.18L12 26L24 38L36 26Z" fill="white" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.images}>
        <Image priority src={"/header-image-1.png"} alt="header-image-1" width={941} height={620} />
        <Image priority src={"/header-image-2.png"} alt="header-image-2" width={941} height={620} />
      </div>
    </header>
  </div>
}

export default Header;