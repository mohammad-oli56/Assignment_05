import React from 'react'
import Requestpage from '../_component/requestpage'
import { getpropertyrequest } from '../_action/getrequest'

const page =async () => {
  const request = await getpropertyrequest()
  // console.log(request) 
  return (
    <div>
      <Requestpage request={request} ></Requestpage>
    </div>
  )
}

export default page
