import { useCallback, useState } from "react"
import Papa from 'papaparse'
import { validation } from "../Validators/csvValidator"

export const useParser = () => {
   const [csvArr, setCvs] = useState([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false)

   const setData = useCallback((file) => {
      setLoading(true)
      Papa.parse(file, {
         dowload: true,
         header: true,
         complete: (result) => {
            const validArr = validation(result.data)
            validArr.forEach(el => {
               if (el === false) {
                  setError(true)
               }
            })
            console.log(validArr[0]);
            setCvs(validArr)
         }
      })
      setLoading(false)
   }, [])

   const resetData = useCallback(() => {
      setError(false)
      setCvs([])
   }, [])

   return { csvArr, loading, setData, error, resetData }
}