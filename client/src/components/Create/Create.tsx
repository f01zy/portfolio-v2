"use client"

import styles from "@/components/Create/Create.module.scss"
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useEffect, useState } from "react"
import { useTypedSelector } from "@/hooks/selector.hook";
import Select, { StylesConfig } from 'react-select'
import makeAnimated from 'react-select/animated';
import { tags } from "@/config";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux"
import { ICreate } from "@/interfaces/forms/create.interface";
import { AppDispatch } from "@/store/store";
import { createPost } from "@/store/posts/posts.slice";

interface IOption {
  value: string,
  label: string
}

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

const animatedComponents = makeAnimated();

const Create = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [value, setValue] = useState<string>("");
  const [selects, setSelects] = useState<Array<IOption>>([])
  const { theme } = useTypedSelector(state => state.settingsSlice)

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("style", `--bg: ${theme == "dark" ? "linear-gradient(180deg, #000 0%, #000 41.44%, #000 100%)" : "#fff"};--color: ${theme == "dark" ? "#fafafa" : "#111"};--button-color: ${theme == "dark" ? "#000" : "#fafafa"};`)
  }, [theme])

  const stylesSelect: StylesConfig = {
    control: styles => ({ ...styles, backgroundColor: "var(--bg)", marginBottom: "20px" }),
    option: styles => ({
      ...styles,
      background: "var(--bg)"
    })
  }

  const onSubmit: SubmitHandler<ICreate> = async data => {
    if (data.secret != "Ali02022010") return console.log("Error");
    console.log(selects);
    console.log(value);
    console.log(data);
    const tags: Array<string> = []
    selects.map(el => tags.push(el.value))

    dispatch(createPost({ title: data.title, content: value, tags }))
  }

  const {
    register,
    handleSubmit
  } = useForm<ICreate>()

  return <div className={styles.create}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create post</h1>
      <div className={styles.input}>
        <input type="text" placeholder="Title" {...register("title")} required />
      </div>
      <div className={styles.input}>
        <input type="password" placeholder="Secret" {...register("secret")} required />
      </div>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={tags.map(el => ({ value: el, label: el }))}
        styles={stylesSelect}
        onChange={(choices) => {
          setSelects(choices as Array<IOption>); console.log(choices);
        }}
      />
      <MDEditor value={value} onChange={e => setValue(e as string)} />
      <div className={styles.button}>
        <button>Create</button>
      </div>
    </form>
  </div>
}

export default Create;