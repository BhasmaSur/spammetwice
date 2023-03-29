import CookieUtil from "./cookie-util";
import moment from "moment";
import jwtDecode from "jwt-decode";
import isEmpty from "lodash/isEmpty";
import includes from "lodash/includes";

const auth = () => {
  const { getCookies, setAppCookie, removeAppCookie } = CookieUtil();

  // const reGenerateAccessToken = async () => {
  //   // const cookies = getCookies();
  //   // const postData = {
  //   //   refreshToken: cookies.refresh_token,
  //   // };
  //   try {
  //     removeAppCookie('access_token');
  //     //const { data, status } = await httpService('userLogin', 'patch', postData);
  //     const {data,status} = {
  //       data : "accessTokenHere",
  //       status : 200
  //     }
  //     if (status === 200 && data) {
  //       setTokenData(data);
  //       return data;
  //     }
  //   } catch (e) {
  //     // do nothing - still log the user out
  //   }
  //   return {};
  // };

  // const checkIsAuthenticated = async () => {
  //   const cookies = getCookies();
  //   const accessToken = cookies.access_token;
  //   const refreshToken = cookies.refresh_token;
  //   const response = {
  //     isAuthenticated: false,
  //     newAccessToken: '',
  //     alreadyLoggedinEmail: '',
  //     isSessionTimeout: false,
  //   };

  //   if (accessToken && refreshToken) {
  //     let decodedAccessToken = jwtDecode(accessToken);
  //     let expOfAccessToken = decodedAccessToken.exp;
  //     let alreadyLoggedinEmail = decodedAccessToken.email;
  //     let decodedRefreshToken = jwtDecode(refreshToken);
  //     let expOfRefreshToken = decodedRefreshToken.exp;
  //     let now = moment().unix();
  //     response.alreadyLoggedinEmail = alreadyLoggedinEmail;
  //     if (expOfAccessToken > now && expOfRefreshToken > now) {
  //       response.isAuthenticated = true;
  //     } else if (expOfAccessToken < now && expOfRefreshToken > now) {
  //       const data = await reGenerateAccessToken();
  //       response.isAuthenticated = true;
  //       response.newAccessToken = data.access_token;
  //     } else if (expOfAccessToken < now && expOfRefreshToken < now) {
  //       response.isAuthenticated = false;
  //       response.isSessionTimeout = true;
  //     }
  //   }
  //   return response;
  // };

  // const login = () => {};

  const logout = async (userErrorMsg = "") => {
    removeAllAppCookies();
  };

  const removeAllAppCookies = (exceptions = []) => {
    const allCookies = [
      "access_token",
      "refresh_token",
      "user",
      "tenantId",
      "s3",
    ];

    allCookies.forEach(
      (cookie) => !includes(exceptions, cookie) && removeAppCookie(cookie)
    );
  };

  const setUserData = (user) => {
    delete user.objectPermissions;
    setAppCookie("user", JSON.stringify(user));
  };

  const setTenantData = (tenantName) => {
    setAppCookie("tenantId", tenantName);
  };

  const setTokenData = (tokenData) => {
    setAppCookie("access_token", tokenData.access_token);
    setAppCookie("refresh_token", tokenData.refresh_token);
  };

  // const setS3 = (s3Url) => {
  //   setAppCookie('s3', s3Url);
  // };

  const getObjectAndPermission = async () => {
    const cookies = getCookies();
    if (!isEmpty(cookies.user)) {
      // const user = JSON.parse(cookies.user);
      try {
        // const { data, status } = await ObjectPermissionService.getObjectPermissions({
        //   roles: user.roles,
        // });
        const { data, status } = {
          data: "dont know what to put",
          status: 200,
        };
        if (status === 200 && data) {
          return data;
        } else {
          removeAllAppCookies();
          window.location = "/login";
        }
      } catch (e) {
        removeAllAppCookies();
        window.location = "/login";
      }
    }
  };

  const getSessionData = () => {
    let cookies = getCookies();
    if (!isEmpty(cookies.user)) {
      let decodedAccessToken = jwtDecode(cookies.access_token);
      let expOfAccessToken = decodedAccessToken.exp;
      let now = moment().unix();
      if (expOfAccessToken < now) {
        cookies = {};
      }
    }
    return {
      accessToken: cookies.access_token,
      refreshToken: cookies.refresh_token,
      user: !isEmpty(cookies.user) ? JSON.parse(cookies.user) : {},
      tenantId: cookies.tenantId,
    };
  };

  // const removeAccessToken = () => {
  //   removeAppCookie('access_token');
  // };

  return {
    //login,
    logout,
    //checkIsAuthenticated,
    getSessionData,
    setUserData,
    setTenantData,
    setTokenData,
    //setS3,
    //removeAllAppCookies,
    //removeAccessToken,
    getObjectAndPermission,
  };
};

export default auth;
