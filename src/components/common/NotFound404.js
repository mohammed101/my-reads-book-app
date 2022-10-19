import React from "react";
import { Link } from "react-router-dom";
const NotFound404 = () => {
    return (
        <div
            style=
            {{
                height: "85vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <img className="mb-5" src="../images/404-error-icon.svg" alt="404" />
            <h2>This page is not found  </h2>
            <h2>هذه الصفحة ليست موجودة  </h2>
            <Link to=""><button className="mt-5 btn btn-danger p-3"><h5>Go Back Home - العودة للصفحة الرئيسية</h5></button></Link>
        </div>
    )
}
export default NotFound404;


// <div>
// <h2>404 Page not found etc</h2>
// </div>