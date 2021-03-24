

export const validation = (arr) => {
   const emails = []
   const phones = []

   const resultArr = arr.map((item, idx) => {
      let resultObj = Object.fromEntries(
         Object.entries(item).map(([key, value]) => {
            let newKey = removeSpace(key, true)
            let newValue = removeSpace(value)
            return [`${newKey}`, newValue]
         })
      )
      if (!resultObj.email || !resultObj.phone || !resultObj.fullname) {
         return false
      }
      const indexValue = { id: idx + 1 }
      resultObj.age = parseInt(resultObj.age)
      resultObj.yearlyincome = parseInt(resultObj.yearlyincome)
      // if (resultObj.haschildren === '') {
      //    resultObj.haschildren: 'FALSE'
      // }
      const errors = { errors: errorCheck(resultObj) }
      resultObj = Object.assign({ ...resultObj }, indexValue, errors);
      return resultObj
   })
   resultArr.map(obj => {
      for (const [key, value] of Object.entries(obj)) {
         if (key === 'email') { emails.push(value) }
         if (key === 'phone') { phones.push(value) }
      }
      return obj
   })

   return resultArr
}

const removeSpace = (el, isKey = false) => {
   let newEl = el.split('')
   if (newEl[0] === ' ') { newEl.shift() }
   if (newEl[newEl.length - 1] === ' ') { newEl.pop() }
   newEl = newEl.join('')
   if (isKey) { newEl = newEl.replace(/\s/g, '').toLowerCase() }
   return newEl
}

const validateEmail = (email) => {
   var re = /\S+@\S+\.\S+/;
   return re.test(email);
}

// const findDublicates = (arr, obj) => {

// }
const errorCheck = (obj) => {
   const errors = []
   // if (condition) {

   // }
   if (!validateEmail(obj.email)) { errors.push('email') }

   if (obj.age < 21) { errors.push('age') }

   if (obj.experience < 0 || obj.experience > obj.age) { errors.push('experience') }

   if (obj.licensenumber.length < 21) { errors.push('age') }

   const reg = /[^a-zA-Z0-9]/
   const validLicenseNum = reg.test(obj.licensenumber);
   if (validLicenseNum || obj.licensenumber.length !== 6) { errors.push('licensenumber') }


   if (obj.haschildren !== 'TRUE' || obj.haschildren !== 'FALSE' || obj.haschildren !== '') { errors.push('haschildren') }




   return errors
}


// 

// expirationdate: "12-12-2030"

// haschildren: "TRUE"

// licensenumber: "1xr567"
// licensestates: "Alabama"
// phone: "+18900991919"
// yearlyincome: "1200.11"