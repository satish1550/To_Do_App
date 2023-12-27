import React from 'react'
import sidebar from "../../images/sidebar.svg"
import ToDo from './rightbaralist/ToDo';
import InProgress from './rightbaralist/InProgress';
import InReview from './rightbaralist/InReview';
import Completed from './rightbaralist/Completed';

export default function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightBarTop">
        <h1 className="rightBarTopText">Project Title</h1>
      </div>
      <hr />
      <div className="rightBarMiddle">
        <ToDo />
        <img src={sidebar} alt="plus" className="sidebarImage" />
        <InProgress />
        <img src={sidebar} alt="plus" className="sidebarImage" />
        <InReview />
        <img src={sidebar} alt="plus" className="sidebarImage" />
        <Completed />
      </div>
    </div>
  );
}
