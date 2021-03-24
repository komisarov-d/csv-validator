// import { states } from './states.js'
export const validation = (arr) => {
   let emails = []
   let phones = []


   let employArr = arr.map((item, idx) => {

      let object = Object.fromEntries(
         Object.entries(item).map(([key, value]) => {
            let newKey = removeSpace(key, true)
            let newValue = removeSpace(value)
            if (newKey === 'email') { emails.push(newValue.toLowerCase()) }
            if (newKey === 'phone') { phones.push(newValue) }
            return [`${newKey}`, newValue]
         })
      )
      if (!object.email || !object.phone || !object.fullname) { return false }
      object = updateObject(object)

      const indexValue = { id: idx + 1 }
      const errors = { errors: errorCheck(object) }


      object = Object.assign({ ...object }, indexValue, errors);


      return object
   })
   const resultArr = employArr.map(object => {
      const dublicates = { dublicates: findDublicates(object, emails, phones) }
      object = Object.assign({ ...object }, dublicates)
      return object
   })



   return resultArr
}
const updateObject = (object) => {
   object.age = parseInt(object.age)
   object.yearlyincome = parseFloat(object.yearlyincome)
   object.phone = validatePhone(object.phone)
   object.licensestates = validateState(object.licensestates)
   if (object.haschildren === '') { object.haschildren = 'FALSE' }
   return object
}

const removeSpace = (el, isKey = false) => {
   let newEl = el.split('')
   if (newEl[0] === ' ') { newEl.shift() }
   if (newEl[newEl.length - 1] === ' ') { newEl.pop() }
   newEl = newEl.join('')
   if (isKey) { newEl = newEl.replace(/\s/g, '').toLowerCase() }
   return newEl
}

const validateState = (state) => {
   // const st = state.split('|')

   // console.log(st);
   // // debugger;
   // for (const [key, value] of Object.entries(states)) {
   //    // if (key === 'email') {  }
   //    // console.log(`${key}: ${value}`);

   // }
   return state
}
const validateEmail = (email) => {
   var re = /\S+@\S+\.\S+/;
   return re.test(email);
}
const validatePhone = (phone) => {
   const validPhone = phone.split('')

   if (validPhone.length === 11 && validPhone[0] !== '+' && validPhone[0] === '1') {
      validPhone.unshift('+')
   }
   if (validPhone.length === 10 && validPhone[0] !== '+') {
      validPhone.unshift('1')
      validPhone.unshift('+')
   }

   const resultPhone = validPhone.join('')

   return resultPhone
}
const findDublicates = (obj, emails, phones) => {
   const dublicate = []
   emails.forEach((e, idx) => {
      if (e === obj.email && obj.id !== idx + 1) {
         dublicate.push(idx + 1)
      }
   })
   phones.forEach((p, idx) => {

      if (p === obj.phone && obj.id !== idx + 1) {
         dublicate.push(idx + 1)
      }
   })

   return dublicate
}
const errorCheck = (obj) => {
   const errors = []

   if (!validateEmail(obj.email)) { errors.push('email') }

   if (obj.age < 21) { errors.push('age') }

   if (obj.experience < 0 || obj.experience > obj.age) { errors.push('experience') }

   const reg = /[^a-zA-Z0-9]/
   const validLicenseNum = reg.test(obj.licensenumber);
   if (validLicenseNum || obj.licensenumber.length !== 6) { errors.push('licensenumber') }

   if (obj.haschildren.toLowerCase() !== 'true' && obj.haschildren.toLowerCase() !== 'false' && obj.haschildren !== '') { errors.push('haschildren') }

   if (obj.phone.length !== 12 || obj.phone[0] !== '+' || obj.phone[1] !== '1') { errors.push('phone') }

   if (obj.yearlyincome < 0 && obj.yearlyincome > 1000000) { errors.push('yearlyincome') }

   if (obj.licensestates.length > 2) { errors.push('licensestates') }

   return errors
}


// expirationdate: "12-12-2030"
