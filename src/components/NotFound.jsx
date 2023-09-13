import React from "react";

const NotFound = () => {
  return (
    <div className=" p-5 not-found ">
      <h2 className="text-center" >No cities found</h2>
      <p className="text-center" >Sorry, there are no cities to show at this time.</p>
      <img src="src/assets/img/404.gif" alt="not-Found" />
    </div>
  );
};

export default NotFound;
