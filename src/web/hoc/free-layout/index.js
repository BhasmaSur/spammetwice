import React,{useState,useEffect} from 'react'
import Footer from '../layout/footer'
import {
  Grid,
  PrimarySearchAppBar,
  Paper,
  Box,
  Typography,
  Button,
  Stats,
} from "../../../common";
import "./index.css"
import { auth } from "../../../auth";
import { BLNavbar } from "../../../common/components/navbar-before-login";
const FreeLayout = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { getSessionData } = auth();
  const { user } = getSessionData();
  useEffect(() => {
    if (Object.entries(user).length !== 0) {
      setIsLoggedIn(true);
    }
  }, []);
    return (
      <div>
          { <BLNavbar />}
          <div className="body-box" >
          {children}
          </div>
        <Footer />
      </div>
    );
}

export default FreeLayout