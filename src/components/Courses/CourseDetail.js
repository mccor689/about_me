import { Fragment } from "react";
import { useParams } from "react-router-dom";
import ListOfCourses from "../../store/ListOfCourses";
import LightBox from "../UI/LightBox";
import SmallCard from "../UI/SmallCard";

const CourseDetail = (props) => {
    const params = useParams();
    let course = {};
    ListOfCourses.map(c => {
        if (params.key === c.key) {
            course = c;
        }
    });
    return (
        <Fragment>
            <SmallCard linkTo='/about_me/courses'>Back</SmallCard>
            <LightBox>
                <section>
                    <h1>{course.name}</h1>
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                </section>
            </LightBox>
        </Fragment>
    );
};

export default CourseDetail;