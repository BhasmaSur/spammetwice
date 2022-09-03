import React, { useEffect } from "react";
import { BLNavbar } from "../../../common/components/navbar-before-login";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../auth";
import SpamTemplate from "../../../common/components/spam-template";
import {useQuery} from "../../../common";
import { httpService } from "../../../common/service-utils";
import Footer from "../../hoc/layout/footer";
const Question = () => {
  const { getSessionData } = auth();
  const historyHook = useNavigate();
  const { user, accessToken, refreshToken, tenantId } = getSessionData();
  const fetchSpam = async ()=>{
    const res = await httpService('search','get',null,"spam")
    return res.data
  }
  const {data} = useQuery("spam", fetchSpam);
  const similarSpams = data;
  useEffect(() => {
    if (Object.entries(user).length !== 0) {
      historyHook("/spam-page");
      return;
    }
  }, [historyHook]);
  return (
    <div>
      <BLNavbar />
      {data && <SpamTemplate spamData={data[4]} similarSpams={similarSpams}/>}
      <Footer/>
    </div>
  );
};

export default Question;
