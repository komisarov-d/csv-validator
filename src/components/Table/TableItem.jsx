import React from 'react'

export const TableItem = ({ item }) => {

   return (
      <tr>
         <td>{item.id}</td>
         <td>{item.fullname}</td>
         <td>{item.phone}</td>
         <td>{item.email}</td>
         <td>{item.age}</td>
         <td>{item.experience}</td>
         <td>{item.yearlyincome.toFixed(2)}</td>
         <td>{item.haschildren}</td>
         <td>{item.licensestates}</td>
         <td>{item.expirationdate}</td>
         <td>{item.licensenumber}</td>
         <td>{item.dublicate}</td>


      </tr>
   )
}