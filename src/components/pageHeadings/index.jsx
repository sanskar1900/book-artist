import React from "react";
import "./pageHeadings.css";
function PageHeadings({ heading }) {
  return (
    <div>
      <div className="page-heading pt-5">
        <h1 className="text-center main-color sg-semibold-25 mt-2">
          <span className="page-heading-text py-4 px-5 d-inline-block">
            {heading}
          </span>
        </h1>
      </div>
    </div>
  );
}

export default PageHeadings;
