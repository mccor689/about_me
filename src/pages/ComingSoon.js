import { Fragment } from "react";
import FutureFeatures from "../store/FutureFeatures";

const ComingSoon = () => {
    return (
        <Fragment>
            <h1>Coming Soon</h1>
            <ul>
                {FutureFeatures.map(feature => {
                    return (<li>{feature}</li>);
                })}
            </ul>
        </Fragment>
    );
};

export default ComingSoon;