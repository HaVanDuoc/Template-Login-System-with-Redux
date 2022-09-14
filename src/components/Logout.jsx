import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Logout as LogoutAction } from '../redux/actions/AuthAction';

function Logout() {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault();

    console.log("click");

    dispatch(LogoutAction())
  };

  return (
    <Fragment>
      <h1>
        Wellcome <span>Văn Được</span>
      </h1>
      <button onClick={handleClick}>Đăng xuất</button>
    </Fragment>
  );
}

export default Logout;
