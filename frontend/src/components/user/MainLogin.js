import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import '../../stylesheet/MainLogin.css'

const MainLogin = () => {
    const { user } = useSelector(state => state.auth)
    return (
        <Fragment>
            <div className="MainLoginWhole">
                <h2 className="text-center ">Feel Free To Login With Us.</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="merchant"><p>Merchant Login </p></div>
                    </div>
                    <div className="col-lg-6">
                        
                        <Link to="/login" ><div className="otherUser"><p>User Login </p></div></Link>
                        
                    </div>
                </div>
                
                
            </div>
            
        </Fragment>
            
    )
}

export default MainLogin
