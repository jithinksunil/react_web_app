import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AdminBody() {

    return (
        <div className="d-flex justify-content-center">
        <table className="table mt-3 w-75">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Age</th>
                                <th scope="col">View</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr className= "table-primary" >
                                <th scope="row" >1</th>
                                <th scope="row" >Jithin</th>
                                <th scope="row" >jithin@gmail.com</th>
                                <th scope="row" >26</th>
                                <th scope="row" >Details</th>
                                <td scope="row" >
                                    <Link to={`/admin/edit/sds`}><button className="btn btn-success me-4"><i className="fa-solid fa-pen"></i></button></Link>
                                </td>
                                <td scope="row" >
                                    <button className="btn btn-danger" ><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
        </div>
        
    )
}

export default AdminBody;