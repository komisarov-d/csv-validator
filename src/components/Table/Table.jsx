import React from 'react'
import { TableItem } from './TableItem/TableItem'
import './table.css'
export const Table = ({ csvArr }) => {

   const tableItem = csvArr.map((item, idx) => {
      return <TableItem
         key={idx}
         item={item} />
   })

   if (!csvArr.length) { return <p className='empty'></p> }

   return (
      <table className='table'>
         <thead className='table__head'>
            <tr>
               <th>ID</th>
               <th>Full Name</th>
               <th>Phone</th>
               <th>Email</th>
               <th>Age</th>
               <th>Experience</th>
               <th>Yearly Income</th>
               <th>Has children</th>
               <th>License states</th>
               <th>Expiration date</th>
               <th>License number</th>
               <th>Duplicate with</th>
            </tr>
         </thead>
         <tbody className='table__body'>

            {tableItem}

         </tbody>
      </table>
   )
}