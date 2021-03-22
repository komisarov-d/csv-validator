import { useCallback, useState } from "react"
import Papa from 'papaparse'

export const useParser = () => {
   const [csvArr, setCvs] = useState([])
   const [loading, setLoading] = useState(false)
   const pasreCvs = (file) => {
      const doc = Papa.parse(file, { delimiter: ",", header: true })
      return doc
   }
   const setData = useCallback((file) => {
      setLoading(true)
      // const filef = file.toString()
      const cvs = [pasreCvs(file)]
      debugger
      console.log(cvs);
      // setCvs(cvs)
      setLoading(false)
   }, [])

   // useEffect(() => {
   //    const data = JSON.parse(localStorage.getItem(storageName))

   //    setReady(true)
   //    return () => {
   //       setCvs(null)
   //    }
   // }, [login])

   return { csvArr, loading, setData }
}