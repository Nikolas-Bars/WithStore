import React, {Suspense} from "react";

import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

export const withSuspense =(Component)=>{
    return (props)=>{
        return <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
    }
}
