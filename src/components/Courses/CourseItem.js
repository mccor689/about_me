import Card from "../UI/Card";

const CourseItem = (props) => {
    return (
        <Card course={props.course}>
            <h1>{props.course.name}</h1>
            <h2>{props.course.title}</h2>
        </Card>
    );
};

export default CourseItem;