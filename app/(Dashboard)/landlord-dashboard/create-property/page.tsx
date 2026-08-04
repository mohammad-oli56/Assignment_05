import React from 'react'
import PropertycreateFrom from '../_component/PropertycreateFrom'
import { getallcategory } from '../../admin-dashboard/_action/get_all_Category'

const page = async() => {

const category = await getallcategory()

  return (
    <div>
      <PropertycreateFrom category={category}/>
    </div>
  )
}

export default page
