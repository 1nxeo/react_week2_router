import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

function Work() {
  const params = useParams();

  //어떤 todo인지 찾아보기
  const foundData = data.find((item) => {
    return item.id === parseInt(params.id);
  });

  return (
    <>
      <h3>할 일 : {foundData.todo}</h3>
    </>
  );
}

export default Work;
