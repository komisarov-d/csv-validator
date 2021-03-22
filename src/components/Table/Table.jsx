import React from 'react'
// import { CvsContext } from '../../Context/CvsContext'
import { TableItem } from './TableItem'

export const Table = ({ csvArr }) => {
   // const { csvArr } = useContext(CvsContext)
   // header validation
   // const headersItem = csvArr[0].map(item => <th>{item}</th>)
   // body validation
   const tableItem = csvArr.shift().map((item, idx) => {

      return <TableItem
         key={idx}
         idx={idx}
         item={item} />
   })
   if (!csvArr.length) { return <p>no table</p> }

   return (
      <table className='table'>
         <thead className='table__head'>
            <tr>
               <th>#</th>
               {/* {headersItem} */}
               <th>Duplicate</th>
            </tr>
         </thead>
         <tbody className='table__body'>
            {tableItem}
         </tbody>
      </table>
   )
}