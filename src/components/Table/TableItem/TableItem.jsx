import React from 'react'
import './tableItem.css'
export const TableItem = ({ item }) => {

   const checkError = (value) => {
      if (item.errors.length) {
         const error = item.errors.includes(value)
         if (error) { return 'invalid' }
      }
   }

   return (
      <tr>
         <td>{item.id}</td>
         <td >{item.fullname}</td>
         <td className={`item ${checkError('phone')}`}>{item.phone}</td>
         <td className={`item ${checkError('email')}`}>{item.email}</td>
         <td className={`item ${checkError('age')}`}>{item.age}</td>
         <td className={`item ${checkError('experience')}`}>{item.experience}</td>
         <td className={`item ${checkError('yearlyincome')}`}>{item.yearlyincome.toFixed(2)}</td>
         <td className={`item ${checkError('haschildren')}`}>{item.haschildren}</td>
         <td className={`item ${checkError('licensestates')}`}>{item.licensestates.join(' | ')}</td>
         <td className={`item ${checkError('expirationdate')}`}>{item.expirationdate}</td>
         <td className={`item ${checkError('licensenumber')}`}>{item.licensenumber}</td>
         <td className={`item ${checkError('dublicate')}`}>{item.dublicates[0]}</td>
      </tr>
   )
}