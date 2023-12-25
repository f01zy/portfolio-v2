import Image from "next/image";
import styles from "@/components/Home/Technologies/Technologies.module.scss"
import { technologies } from "@/config"

const Technologies = () => {
  return <div>
    <div className={styles.technologies}>
      <h4>Technologies used to build the application services:</h4>
      <div className={styles.lists}>
        {technologies.map((el, index) => (
          <ul key={index} >
            <h3>{el.name}</h3>
            {el.technologies.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        ))}
      </div>
      <button><Image src={"/github.png"} alt="github" width={28} height={28} />Check other repositories</button>
    </div>
  </div>
}

export default Technologies;