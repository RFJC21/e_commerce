import React from "react";

//receive 2 things as props: name and title
const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold" />
        {name} <strong className="text-blue">{title}</strong>
      </div>
    </div>
  );
};

export default Title;
