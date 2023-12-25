import { useMemo } from "react"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { actions as settingsSlice } from "@/store/settings/settings.slice"
import { actions as postsSlice } from "@/store/posts/posts.slice"

const rootActions = {
  ...settingsSlice,
  ...postsSlice
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}