"use client"

import Post from "@/components/Post/Post";
import { useTypedSelector } from "@/hooks/selector.hook";
import { useEffect } from "react"

const PostPage = () => {
  const { theme } = useTypedSelector(state => state.settingsSlice)
  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("style", `--bg: ${theme == "dark" ? "linear-gradient(180deg, #000 0%, #000 41.44%, #000 100%)" : "#fff"};--color: ${theme == "dark" ? "#fafafa" : "#111"};--button-color: ${theme == "dark" ? "#000" : "#fafafa"};`)
  }, [theme])

  return <div>
    <Post />
  </div>
}

export default PostPage;