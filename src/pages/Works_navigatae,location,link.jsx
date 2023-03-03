import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Works_1() {
  //   const navigate = useNavigate();
  const location = useLocation();

  //   console.log("location :", location);

  return (
    <div>
      Works
      <br />
      <button
        onClick={() => {
          //   navigate("/");
        }}
      >
        home으로 이동
      </button>
      <Link to={"/contact"}>contact 페이지로 이동하기</Link>
      {/* a태그 대신 사용합니다. */}
    </div>
  );
}

export default Works_1;
