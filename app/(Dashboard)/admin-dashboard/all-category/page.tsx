import React from 'react'
import Allcategorypage from '../_components/allcategorypage'
import { getallcategory } from '../_action/get_all_Category'

const page = async() => {

  const category =  await getallcategory()

 

  return (
    <div>
     <Allcategorypage categories={category}></Allcategorypage>
    </div>
  )
}

export default page
