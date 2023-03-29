import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import Test from "../views/test/Test";
import { auth } from "../../auth";
import React, { useState, useEffect } from "react";
import Login from "../views/login";
import NotFound from "../views/not-found/notFound";

import SignUp from "../views/signup/signup";
import Layout from "../hoc/layout";
import Question from "../views/question";
import { LandingPage } from "../views/landing-page";
import Home from "../views/home";
import AddSpam from "../views/add-spam";
import {LoadingScreen} from "../../common";
import ReportedSitesList from "../views/reported-sites";
import UserProfile from "../views/user-profile";
import LinksPage from "../views/links-page";
import OurTeam from "../views/our-team";
import ProductServices from "../views/product-services";
import { FreeLayout } from "../hoc";
import EditAdPage from "../views/edit-ad-page";
import NavbarLayout from "../../common/components/navbar-layout";
import EditSpam from "../views/edit-spam";

const GuardedRoutesBehindFeatureFlag = () => {
  const flags = {
    showHeader : true,
    showFooter : true
  }
  return (
      <Routes>
        <Route path="/admin-page" element={<Test />} exact />
        <Route path="/spam-page" element={<LandingPage />} exact />
        <Route path="/add-spam" element={<AddSpam />} exact />
        <Route path="/edit-spam" element={<EditSpam />} exact />
        <Route path="/user-profile" element={<UserProfile />} exact />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
  );
};

const GuardedRoutes = () => {
  const { getSessionData } = auth();
  const [loggedInUser, setLoggedInUser] = useState();
  const historyHook = useNavigate();
  const location = useLocation();
  const [currPage, setCurrPage] = useState("/");

  useEffect(async () => {
    const { user } = getSessionData();
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const getLandingPageAsPerPreference = (user) => {
    return "/home";
  };

  useEffect(() => {
    const doGuard = async () => {
      try {
        const { user, accessToken, refreshToken, tenantId } = getSessionData();

        if (!user || !accessToken || !refreshToken || !tenantId) {
          historyHook("/login");
          return;
        }

        if (user) {
          if (location.pathname === "/") {
            const { user } = getSessionData();
            const landingPage = getLandingPageAsPerPreference(user);
            historyHook(landingPage);
            //setLoggedInUser(user);
          }
        }
      } catch (err) {
        historyHook("/login");
      }
    };

    doGuard();
  }, [historyHook, location]);

  if (!loggedInUser) return "";

  return (
    <div>
      <GuardedRoutesBehindFeatureFlag location={currPage} />
    </div>
  );
};
const AllRoute = () => {
  return (
    <Router>
      <FreeLayout>
      <Routes>
        <Route path="/spam" element={<Question />} exact />
        <Route path="/links" element={<LinksPage />} exact />
        <Route path="/services" element={<ProductServices />} exact />
        <Route path="/reported-sites" element={<ReportedSitesList />} exact />
        <Route path="/our-team" element={<OurTeam />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        {/* <Route path="/test" element={<EditAdPage />} exact /> */}
        <Route path="/test" element={<NavbarLayout />} exact />
        <Route path="/circular-progress" element={<LoadingScreen />} exact />
        <Route path="/" element={<Home />} exact/>
        <Route path="/*" element={<GuardedRoutes />} />
      </Routes>
      </FreeLayout>
    </Router>
  );
};

export default AllRoute;
