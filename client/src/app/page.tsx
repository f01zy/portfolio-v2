"use client"

import Contact from "@/components/Home/Contact/Contact";
import Header from "@/components/Home/Header/Header";
import Projects from "@/components/Home/Projects/Projects";
import Tech from "@/components/Home/Tech/Tech";
import Technologies from "@/components/Home/Technologies/Technologies";
import { useTypedSelector } from "@/hooks/selector.hook";
import { useEffect } from "react";

const HomePage = () => {
  const { theme } = useTypedSelector(state => state.settingsSlice)
  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("style", `--bg: ${theme == "dark" ? "linear-gradient(180deg, #000 0%, #000 41.44%, #000 100%)" : "#fff"};--color: ${theme == "dark" ? "#fafafa" : "#111"};--button-color: ${theme == "dark" ? "#000" : "#fafafa"};`)
  }, [theme])

  return <div>
    <Header />
    <Projects />
    <Technologies />
    <Tech />
    <Contact />
  </div>
}

export default HomePage;