import React from 'react'
import { getAllUser } from '../_action/get_all_user'
import AllUserPage from '../_components/all-user-page'



const page =async () => {

  const user = await getAllUser()

  // console.log(user,"from page")

  return (
    <div>
      <AllUserPage users={user}/>
    </div>
  )
}

export default page
