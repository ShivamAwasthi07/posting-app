import {Route, Routes} from "react-router-dom"
import Homepage from "../view/open/homepage/Homepage"
import { Fragment } from "react";

const Router = () => {
    return(
        <Fragment>
            <Routes>
        <Route path="/" element={<Homepage/>} />
    </Routes>
        </Fragment>
    )
}

export default Router;