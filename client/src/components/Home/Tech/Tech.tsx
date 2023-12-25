import Image from "next/image";
import styles from "@/components/Home/Tech/Tech.module.scss"
import { techs } from "@/config"

const Tech = () => {
  return <div>
    <div className={styles.tech} id="tech">
      <h2>and finally,</h2>
      <h1>tech.</h1>
      <p>In my personal journey, I already worked with some techonologies, and here they are:</p>
      <div className={styles.techs}>
        {techs.map((el, index) => (
          <div className={styles.tech_category} key={index}>
            <div className={styles.tag}>
              <h4>{el.name}</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="32" viewBox="0 0 29 40" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M28.7947 10.3678C28.5925 9.75223 27.9594 9.25471 26.1659 8.28496C25.5108 7.93521 24.5081 7.39377 23.6007 6.90379C23.2173 6.69675 22.8509 6.49891 22.5349 6.32859C21.9477 6.00743 21.2802 5.64517 20.7068 5.33398C20.2413 5.08137 19.8378 4.86241 19.5896 4.7264C19.0358 4.43125 18.0423 3.89157 17.3917 3.52896C13.8222 1.56417 11.2726 0.214949 10.9473 0.105325C10.7325 0.0366424 8.96235 0.00680769 0.903076 0V40H10.666L11.0792 39.8145C11.299 39.7217 12.7408 38.9544 14.2882 38.1195C14.819 37.8315 15.5006 37.4631 16.243 37.0619C17.6522 36.3003 19.2805 35.4203 20.5128 34.7465C27.5546 30.9396 28.2996 30.5547 28.5951 29.9501C28.6446 29.8489 28.6814 29.7416 28.7331 29.611C28.909 29.1641 28.909 28.987 28.9002 19.9051C28.8914 13.5638 28.865 10.5618 28.7947 10.3678ZM16.5301 23.0741C17.5587 22.5871 18.2005 21.8434 18.5434 20.7367C19.1852 18.656 17.7522 16.4071 15.5542 16.0441C12.9694 15.628 10.7187 18.231 11.4924 20.7367C11.8353 21.8434 12.4771 22.5871 13.5057 23.0741C14.0508 23.3397 14.1651 23.3574 15.0179 23.3574C15.8707 23.3574 15.985 23.3397 16.5301 23.0741Z" fill="white" />
              </svg>
            </div>
            <div className={styles.items}>
              {el.techs.map((el, index) => (
                <div className={styles.tech_item} key={index}>
                  <Image src={`/techs/${el.name.toLowerCase()}.png`} alt={el.name} width={80} height={80} />
                  <div className={styles.text}>
                    <h3>{el.name}</h3>
                    <p>{el.time}<br />experience</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default Tech;