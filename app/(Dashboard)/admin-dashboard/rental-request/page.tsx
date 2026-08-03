import React from 'react'
import RentalRequestPage from '../_components/rentalRequestPage'
import { getAllrentalrequest } from '../_action/get_all_rental_request'

const page = async() => {
   const rentalrequest = await getAllrentalrequest()
 
  return (
    <div>
     <RentalRequestPage rentalrequest={rentalrequest}/>
    </div>
  )
}

export default page
