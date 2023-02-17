import React, { useEffect, useState } from "react";
import axios from '../../axios'
import { Link } from "react-router-dom";


function AdminBody() {

    const [users,setUsers]=useState([])
    const [search,setSearch]=useState("")
    const [filterData,setFilterData]=useState([])

    useEffect(()=>{
        axios.get('/admin').then((response)=>{
            setUsers(response.data.users)
            setFilterData(response.data.users)//other wise filterdata will be empty because setFilterdata in the next useEffect will work befor axios fetch data from database
        })
    },[])

    useEffect(()=>{

        const filter =users.filter((user,index)=>
                user.name.toLowerCase().includes(search.toLowerCase())
            )
        setFilterData(filter)

    },[search])

    const deleteUser=(userId)=>{
        axios.post('/deleteuser',{userId},{withCredentials: true,}).then((response)=>{
            axios.get('/admin').then((response)=>{
                setUsers(response.data.users)
                setFilterData(response.data.users)
            })
        })
    }

    return (
        <div className="d-flex justify-content-center">
        <form>
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}} />
        </form>
        <Link to='/adduser'>
        <button >Add User</button>
        </Link>
        <table className="table mt-3 w-75">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody >
                        {
                            filterData.map((user,index)=>{
                                return(
                                <tr className= "table-primary" >
                                    <th scope="row" >{index+1}</th>
                                    <th scope="row" >{user.name}</th>
                                    <th scope="row" >{user.phone}</th>
                                    <th scope="row" >{user.email}</th>
                                    <th scope="row" >{user.password}</th>
                                    <td scope="row" >
                                        <Link to={`/edituser/${user.email}`}><button className="btn btn-success me-4"><i className="fa-solid fa-pen"></i></button></Link>
                                    </td>
                                    <td scope="row" >
                                        <button onClick={(e)=>{e.preventDefault();deleteUser(user._id)}} className="btn btn-danger" ><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>)
                            })
                        }
                        </tbody>
                    </table>
        </div>
        
    )
}

export default AdminBody;