import React,{useState,useEffect} from 'react'
import Footer from '../layout/footer'
import "./index.css"
import { auth } from "../../../auth";
import { BLNavbar } from "../../../common/components/navbar-before-login";
import NavbarLayout from '../../../common/components/navbar-layout';
const FreeLayout = ({children}) => {
  console.log("children :", children)
    return (
      <div>
          { <NavbarLayout />}
          <div className="body-box" >
          {children}
          </div>
        <Footer />
      </div>
    );
}

export default FreeLayout