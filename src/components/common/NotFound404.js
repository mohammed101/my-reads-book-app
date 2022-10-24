import React from "react";
import { Link } from "react-router-dom";
export const NotFound404 = () => {
return (
<div style=
{{
    height: "85vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}}>
<h2>This page is not found  </h2>
<h2>هذه الصفحة ليست موجودة  </h2>
<Link to="/"><button className="mt-5 btn btn-danger p-3"><h5>Go Back Home - العودة للصفحة الرئيسية</h5></button></Link>
</div>
);
}
