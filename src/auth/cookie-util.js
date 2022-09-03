import Cookies from 'js-cookie';

const CookieUtil = () => {
  const cookieOptions = { domain: window.location.hostname };
  const setAppCookie = (name, value) => Cookies.set(name, value, cookieOptions);

  const removeAppCookie = (name) => Cookies.remove(name, cookieOptions);

  const getCookies = () => {
    return Cookies.get();
  };

  return {
    getCookies,
    setAppCookie,
    removeAppCookie,
  };
};

export default CookieUtil;
