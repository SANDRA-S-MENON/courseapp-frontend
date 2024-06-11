import React from 'react'
import NavBar from './NavBar'

const SearchCourse = () => {
  return (
    <div>
        <NavBar/>
        <br />
        <div className="container">
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm- col-md- col-lg- col-xl- col-xxl-">
                        <button className="btn btn-success">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchCourse