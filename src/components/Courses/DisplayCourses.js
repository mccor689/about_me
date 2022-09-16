import ListOfCourses from "../../store/ListOfCourses";
import CourseItem from "./CourseItem";

const DisplayCourses = (props) => {
    return (ListOfCourses.map(course => (
        <CourseItem course={course} />
    )));
};

export default DisplayCourses;