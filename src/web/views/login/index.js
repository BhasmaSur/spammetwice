import { IdpLogin } from "../../../auth";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from '../../../auth';

const Login = (props) => {
  const { location } = props;
  const dispatch = useDispatch();
  const history = useNavigate();
  const { setUserData, setTenantData, setTokenData} = auth()

  const validateFedAuthDetails = useCallback(async(user) =>{
    console.log(user)
  })
  const handleLoginSuccess = async (loginData) => {
    const { user, isLoggedIn } = loginData;
    console.log("user",user)
    if (isLoggedIn) {
      let tokenData = {
        access_token: user.jwtResponse?.jwtToken
      }
      setUserData(user)
      setTenantData(user.userId)
      setTokenData(tokenData)
      history("/")
    }
  };

  return (
    <div>
      <IdpLogin
        redirectUrl={location}
        validateDetails={validateFedAuthDetails}
        onSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default Login;
