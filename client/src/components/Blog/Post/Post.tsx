import styles from "@/components/Blog/Post/Post.module.scss"
import { IPost } from "@/interfaces/post.interface";
import Link from "next/link";
import { FC } from "react"

const Post: FC<Omit<IPost, "views" | "content">> = ({ date, tags, title, _id }) => {
  return <Link href={`/blog/posts/${_id}`}><div className={styles.post}>
    <div className={styles.tag}>
      <h2>{tags[0]}</h2>
    </div>
    <div className={styles.bottom}>
      <div className={styles.title}>
        <h1>{title}</h1>
      </div>
      <div className={styles.date}>
        <div>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_706_636" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
              <rect width="22" height="22" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_706_636)">
              <path d="M4.58333 20.1667C4.07917 20.1667 3.64742 19.9873 3.28808 19.6286C2.92936 19.2693 2.75 18.8375 2.75 18.3333V5.50001C2.75 4.99584 2.92936 4.5644 3.28808 4.20568C3.64742 3.84634 4.07917 3.66668 4.58333 3.66668H5.5V2.72709C5.5 2.46737 5.58769 2.25348 5.76308 2.08543C5.93908 1.91737 6.15694 1.83334 6.41667 1.83334C6.67639 1.83334 6.89425 1.92104 7.07025 2.09643C7.24564 2.27243 7.33333 2.49029 7.33333 2.75001V3.66668H14.6667V2.72709C14.6667 2.46737 14.7547 2.25348 14.9307 2.08543C15.1061 1.91737 15.3236 1.83334 15.5833 1.83334C15.8431 1.83334 16.0606 1.92104 16.236 2.09643C16.412 2.27243 16.5 2.49029 16.5 2.75001V3.66668H17.4167C17.9208 3.66668 18.3526 3.84634 18.7119 4.20568C19.0706 4.5644 19.25 4.99584 19.25 5.50001V18.3333C19.25 18.8375 19.0706 19.2693 18.7119 19.6286C18.3526 19.9873 17.9208 20.1667 17.4167 20.1667H4.58333ZM4.58333 18.3333H17.4167V9.16668H4.58333V18.3333ZM4.58333 7.33334H17.4167V5.50001H4.58333V7.33334Z" fill="black" />
            </g>
          </svg>
          <p>{String(date)}</p>
        </div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_706_1039" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <rect width="32" height="32" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_706_1039)">
            <path d="M9.33329 23.9333L16 21.0667L22.6666 23.9333V6.66667H9.33329V23.9333ZM8.53329 27.2C8.08885 27.3778 7.66663 27.3387 7.26663 27.0827C6.86663 26.8276 6.66663 26.4556 6.66663 25.9667V6.66667C6.66663 5.93333 6.92796 5.30533 7.45063 4.78267C7.9724 4.26089 8.59996 4 9.33329 4H22.6666C23.4 4 24.028 4.26089 24.5506 4.78267C25.0724 5.30533 25.3333 5.93333 25.3333 6.66667V25.9667C25.3333 26.4556 25.1333 26.8276 24.7333 27.0827C24.3333 27.3387 23.9111 27.3778 23.4666 27.2L16 24L8.53329 27.2Z" fill="black" />
          </g>
        </svg>
      </div>
    </div>
  </div></Link>
}

export default Post;