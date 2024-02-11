import Image from "next/image";
import styles from "@/components/Home/Projects/Projects.module.scss"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react"
import Project from "./Project/Project";

const Projects = () => {
  const [index, setIndex] = useState<number>(0)

  const projects = [
    {
      name: "Vara",
      description: "This is a discord bot website with a control panel, here you can invite the bot to the server, view information about it and configure it in your control panel",
      status: "DEVELOPING"
    },
    {
      name: "Ketone",
      description: "A business card website for a web studio",
      status: "FINISHED"
    }
  ]

  return <div>
    <div className={styles.projects} id="projects">
      <h1>Projects</h1>
      <div className={styles.buttons}>
        {index !== 0 ? (<div className={styles.button} onClick={() => setIndex(index - 1)}><FaArrowLeft /></div>) : (<div></div>)}
        {index !== projects.length - 1 && (<div className={styles.button}><FaArrowRight onClick={() => setIndex(index + 1)} /></div>)}
      </div>
      <div className={styles.slides} style={{
        width: `${100 * projects.length}vw`,
        marginLeft: `-${100 * index}%`
      }}>
        {projects.map((el, index) => (
          <Project {...el} key={index} />
        ))}
      </div>
    </div>
  </div>
}

export default Projects;