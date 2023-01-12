import React, {useState, useEffect} from 'react'
import Header from '../../../web/hoc/layout/header'
import { BLNavbar } from '../navbar-before-login'
import { useNavigate } from "react-router-dom";
import { auth } from "../../../auth";
import NavbarBeforeLogin from '../navbar/navbar-before-login';

const NavbarLayout = () => {
    const { getSessionData } = auth()
    const { user } = getSessionData();
    const historyHook = useNavigate();
    const [userAvailable, setUserAvailable] = useState(false)
    useEffect(() => {
        if (Object.entries(user).length !== 0) {
            setUserAvailable(true)
        }else{
            setUserAvailable(false) 
        }
      }, [historyHook]);
  return (
    <>
    {userAvailable && <Header/>}
    {!userAvailable && <NavbarBeforeLogin/>}
    </>
  )
}

export default NavbarLayout