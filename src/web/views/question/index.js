import React, { useEffect,useState } from "react";
import { BLNavbar } from "../../../common/components/navbar-before-login";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../auth";
import SpamTemplate from "../../../common/components/spam-template";
import { httpService } from "../../../common/service-utils";
import Footer from "../../hoc/layout/footer";
import {useLocation} from 'react-router-dom';
import FamousSpams from "../../../common/components/famous-spams";
const Question = () => {
  const { getSessionData } = auth();
  const historyHook = useNavigate();
  const location = useLocation();
  const [data,setData] = useState(null)
  const [metaData,setMetaData] = useState(null)
  const spamId = location.state?.spamId;
  const { user } = getSessionData();

  const fetchSpam = async ()=>{
    const res = await httpService('search?spamId=' + spamId,'get',null,"spam")
    setData(res.data.result?.spamEntity);
    setMetaData({likes: res.data.result?.likesCount, views: res.data.result?.viewsCount})
  }
  useEffect(() => {
    if (Object.entries(user).length !== 0) {
      historyHook("/spam-page",{state:{spamId: spamId}});
      return;
    }
  }, [historyHook]);

  useEffect(()=>{
    if(spamId){
      fetchSpam()
    }
    
  },[spamId])
  return (
    <div>
      {data && <SpamTemplate displayLike={false} metaData={metaData} spamData={data} similarSpams={[]}/>}
      {!data && <FamousSpams/>}
    </div>
  );
};

export default Question;
