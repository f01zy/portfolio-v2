import Image from "next/image";
import styles from "@/components/Home/Projects/Projects.module.scss"

const Projects = () => {
  return <div>
    <div className={styles.projects} id="projects">
      <h1>Projects</h1>
      <div className={styles.slides}>
        <div className={styles.slide}>
          <div className={styles.slide_info}>
            <div className={styles.status}>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.1 21.712C9.31667 22.2373 10.6167 22.5 12 22.5C13.3833 22.5 14.6833 22.2373 15.9 21.712C17.1167 21.1873 18.175 20.475 19.075 19.575C19.975 18.675 20.6873 17.6167 21.212 16.4C21.7373 15.1833 22 13.8833 22 12.5C22 11.1167 21.7373 9.81667 21.212 8.6C20.6873 7.38333 19.975 6.325 19.075 5.425C18.175 4.525 17.1167 3.81233 15.9 3.287C14.6833 2.76233 13.3833 2.5 12 2.5C10.6167 2.5 9.31667 2.76233 8.1 3.287C6.88333 3.81233 5.825 4.525 4.925 5.425C4.025 6.325 3.31267 7.38333 2.788 8.6C2.26267 9.81667 2 11.1167 2 12.5C2 13.8833 2.26267 15.1833 2.788 16.4C3.31267 17.6167 4.025 18.675 4.925 19.575C5.825 20.475 6.88333 21.1873 8.1 21.712ZM17.675 18.175C16.125 19.725 14.2333 20.5 12 20.5C9.76667 20.5 7.875 19.725 6.325 18.175C4.775 16.625 4 14.7333 4 12.5C4 10.2667 4.775 8.375 6.325 6.825C7.875 5.275 9.76667 4.5 12 4.5C14.2333 4.5 16.125 5.275 17.675 6.825C19.225 8.375 20 10.2667 20 12.5C20 14.7333 19.225 16.625 17.675 18.175ZM17.2964 9.69647L16.6035 9.00358C16.4083 8.80832 16.0917 8.80832 15.8964 9.00358L10.9535 13.9465C10.7583 14.1417 10.4417 14.1417 10.2464 13.9465L8.10353 11.8036C7.90827 11.6083 7.59168 11.6083 7.39642 11.8036L6.70353 12.4965C6.50827 12.6917 6.50827 13.0083 6.70353 13.2036L10.2464 16.7465C10.4417 16.9417 10.7583 16.9417 10.9535 16.7465L17.2964 10.4036C17.4917 10.2083 17.4917 9.89173 17.2964 9.69647Z" fill="white" />
              </svg>
              <p>|</p>
              <p>Finished</p>
            </div>
            <h2>DFL</h2>
            <p>An application that will help you to report garbage outbreaks and find trash collection points in your city.</p>
            <button>Visit app website</button>
          </div>
          <div className={styles.slide_image}>
            <Image src={"/projects/project-1.png"} alt="project" width={830} height={464} />
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Projects;