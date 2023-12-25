"use client"

import Header from "@/components/Blog/Header/Header";
import { useTypedSelector } from "@/hooks/selector.hook";
import { useDispatch } from 'react-redux';
import { getPosts } from "@/store/posts/posts.slice";
import { useEffect } from "react"
import { AppDispatch } from "@/store/store";

const BlogPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { theme } = useTypedSelector(state => state.settingsSlice)

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("style", `--bg: ${theme == "dark" ? "linear-gradient(180deg, #000 0%, #000 41.44%, #000 100%)" : "#fff"};--color: ${theme == "dark" ? "#fafafa" : "#111"};--button-color: ${theme == "dark" ? "#000" : "#fafafa"};`)
  }, [theme])

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return <div>
    <Header />
  </div>
}

export default BlogPage;