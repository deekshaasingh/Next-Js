
const UserDetails = async ({params} : {params: Promise<{id: string}>}) => {

    const {id} = await params;
  return (
    <div>
      <h1>User Profile</h1>
            <p>Viewing details for user ID: {id}</p>
    </div>
  )
}

export default UserDetails
