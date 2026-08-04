import React from 'react'
import Mypropertypage from '../_component/mypropertypage'
import { getmyproperty } from '../_action/getmyproperty'

const page = async() => {

  const myproperty = await getmyproperty()

  return (
    <div>
    <Mypropertypage myproperty={myproperty} ></Mypropertypage>
    </div>
  )
}

export default page
