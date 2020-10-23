import React ,{useEffect,useState}from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from './User/UserAction';

function FetchDataContainer({userData,fetchUsers}) {
    const[search,setSearchValue]=useState(null)
    useEffect(()=>{
        fetchUsers()
        
    },[]);
    const userDatas=userData.users.filter((data)=>{
        if(search == null)
            return data
        else if(data.login.toLowerCase().includes(search.toLowerCase())){
            return data
        }
      })
  
    return (
        <div>
            <h1>users Details</h1>
            <form>
                <div className="form-Group">
                <input className="form-control" value={search} onChange={(e)=> setSearchValue(e.target.value)}></input>
                </div>
            </form>

         {
              userData.loading?(
            <h2> loading....</h2>
        ):userData.error?(<h2> {userData.error}</h2>):
        (
            <div> 
                <table>
                        <thead>
                            <tr>
                        <th> sr no </th>
                        <th> name  </th>
                        <th>node_id </th>
                        </tr>

                        </thead>

                {
                    userDatas.map(user=>
                    <tr>
                        <td> {user.id}</td>
                       <td>
                            {/* <Link to={()=>props.history.push(`/login/${user.login}`)}>  */}
                        {user.login}
                        {/* </Link>  */}
                        </td> 
                        <td> {user.node_id}</td>

                    </tr>
                        )
                }
                        </table>

            </div>
        )
            }
        </div>
    )
}

const mapStateToProps=state=>{
return {
    userData:state.user
}
}
const mapDispatchToProps=dispatch=>{
    return{
        fetchUsers:()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FetchDataContainer)
