import { Fragment } from "react";
import DisplayCourses from "../components/Courses/DisplayCourses";

const Courses = (props) => {
    return (
        <Fragment>
            <h1>Relevant Courses Taken</h1>
            <DisplayCourses />
        </Fragment>
    );
};

export default Courses;