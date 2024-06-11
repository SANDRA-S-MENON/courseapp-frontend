import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:7171/view").then(
            (response)=>{
                changeData(response.data)

            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table" border="3">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Venue</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Trainer</th>
                                    <th scope="col">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index)=>{
                                        return <tr>
                                    
                                        <td>{value.Title}</td>
                                        <td>{value.Description}</td>
                                        <td>{value.Venue}</td>
                                        <td>{value.Date}</td>
                                        <td>{value.Trainer}</td>
                                        <td>{value.Duration}</td>

                                        
                                    </tr>
                                    }
                                )

                                }
                                



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll