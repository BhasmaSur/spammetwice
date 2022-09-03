import { fakeHttpRequests,LoadingScreen} from "../../../common"
import {useState,useEffect} from "react"
function Test() {
  const [questionData,setQuestionData] = useState([])
  const fetchQuestionData = async ()=>{
    const result = await fakeHttpRequests()
    setQuestionData(result.description)
    console.log(result.description)
  }
  useEffect(()=>{
    fetchQuestionData()
  },[])
  
    return (
      <div>
        <h1>Test</h1>
        <div>
          {questionData.length < 1 && <LoadingScreen/>}
          {questionData.map((item)=>{
            return <div>{item.type}</div>
          })}
        </div>
      </div>
    );
  }

  export default Test;