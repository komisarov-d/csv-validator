import { createContext } from 'react'

function noop() { }

export const CvsContext = createContext({
   csvArr: [],
   loading: false,
   setData: noop
})