"use client"

import styles from "@/components/Blog/Header/Header.module.scss"
import { tags } from "@/config";
import { useState } from "react"
import Post from "../Post/Post";
import { useTypedSelector } from "@/hooks/selector.hook";
import { IPost } from "@/interfaces/post.interface";

const Header = () => {
  const [tag, setTag] = useState<string>("View all")
  const posts = useTypedSelector(state => state.postsSlice.entities)
  const [filters, setFilters] = useState<Array<IPost>>(posts)
  const status = useTypedSelector(state => state.postsSlice.status)

  const filter = (tag: string) => {
    setTag(tag)

    if (tag === "View all") return setFilters(posts)

    setFilters(posts.filter(post => post.tags.indexOf(tag) !== -1))
  }

  return <header className={styles.header}>
    <h1>Blog</h1>
    <div className={styles.tags}>
      {tags.map((el, index) => (
        <div key={index}>
          {el == tag && (
            <div className={styles.glare}></div>
          )}
          <button onClick={() => filter(el)}>{el}</button>
        </div>
      ))}
    </div>
    {posts.length === 0 ? (
      <div className={styles.empty}>
        <h1>So far, it's empty here</h1>
      </div>
    ) : (
      <div className={styles.posts}>
        {filters.map((el, index) => (
          <Post key={index} date={el.date} tags={el.tags} title={el.title} _id={el._id} />
        ))}
      </div>
    )}

  </header>
}

export default Header;