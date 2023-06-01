import React, { useEffect, useState } from "react";
import SpamTemplate from "../../../common/components/spam-template";
import { httpService } from "../../../common/service-utils";
import { useLocation } from "react-router-dom";
import { auth } from "../../../auth";
import "./index.css";
export const LandingPage = () => {
  const { getSessionData } = auth();
  const { user } = getSessionData();
  const [data, setData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const location = useLocation();
  const [isEditable, setIsEditable] = useState(true);
  const spamId = location.state?.spamId;
  const fetchSpam = async () => {
    const res = await httpService(
      "search?spamId=" + spamId,
      "get",
      null,
      "spam"
    );
    setData(res.data.result?.spamEntity);
    setMetaData({
      likes: res.data.result?.likesCount,
      views: res.data.result?.viewsCount,
    });
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    if (spamId) {
      fetchSpam();
    }
  }, [spamId]);

  useEffect(() => {
    if (data) {
      if (user.email && user.email === data?.userEmail) {
        setIsEditable(true);
      } else {
        setIsEditable(false);
      }
    }
  }, [data]);
  return (
    <div>
      {data && (
        <SpamTemplate
          checkForView={true}
          refreshPage={refreshPage}
          isEditable={isEditable}
          displayLike={!isEditable}
          metaData={metaData}
          spamData={data}
          similarSpams={[]}
        />
      )}
    </div>
  );
};
