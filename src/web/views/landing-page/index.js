import React, { useEffect,useState } from 'react'
import SpamTemplate from '../../../common/components/spam-template';
import { httpService } from "../../../common/service-utils";
import {useLocation} from 'react-router-dom';

export const LandingPage = () => {

  const [data,setData] = useState(null)
  const [metaData,setMetaData] = useState(null)
  const location = useLocation();
  const spamId = location.state?.spamId;
  const fetchSpam = async ()=>{
    const res = await httpService('search?spamId=' + spamId,'get',null,"spam")
    console.log("spamData : ", res.data.result)
    setData(res.data.result?.spamEntity);
    setMetaData({likes: res.data.result?.likesCount, views: res.data.result?.viewsCount})
  }
  useEffect(()=>{
    if(spamId){
      fetchSpam()
    }
    
  },[spamId])
  return (
     <div>
       {data && <SpamTemplate metaData={metaData} spamData={data} similarSpams={[]}/>}
    </div>
  )
}
