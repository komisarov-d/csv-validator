import { useCallback, useState } from "react"
import Papa from 'papaparse'
import { validation } from "../Validators/csvValidator"

export const useParser = () => {
   const [csvArr, setCvs] = useState([])
   const [error, setError] = useState(false)

   const setData = useCallback((file) => {
      setCvs([])
      Papa.parse(file, {
         dowload: true,
         header: true,
         complete: (result) => {

            const validArr = validation(result.data)

            setError(false)
            validArr.forEach(el => {
               if (el === false) {
                  setError(true)
               }
            })
            setCvs(validArr)
         }
      })
   }, [])

   return { csvArr, setData, error }
}