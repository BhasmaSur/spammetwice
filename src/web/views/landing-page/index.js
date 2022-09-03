import React, { useEffect,useState } from 'react'
import SpamTemplate from '../../../common/components/spam-template';
import { httpService } from "../../../common/service-utils";
import {useLocation} from 'react-router-dom';

export const LandingPage = () => {

  const [data,setData] = useState(null)
  const location = useLocation();
  const spamId = location.state?.spamId;
  httpService('search?spamId=' + spamId,'get',null,"spam").then((res)=>{
    if(res){
      console.log("result of api : ", res)
    }
  })
  const fetchSpam = async ()=>{
    console.log("spamId : ", spamId)
    const res = await httpService('search?spamId=' + spamId,'get',null,"spam")
    setData(res.data.result);
  }
  useEffect(()=>{
    if(spamId){
      fetchSpam()
    }
    
  },[spamId])
  return (
     <div>
       {data && <SpamTemplate spamData={data} similarSpams={[]}/>}
    </div>
  )
}
