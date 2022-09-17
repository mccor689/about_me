import { Fragment } from "react";
import classes from './PathInfo.module.css';
import umn from '../../resources/umn.png';

const PathInfo = () => {
    return (
        <Fragment>
            <h1>
                My Path Through College
            </h1>
            <div className={classes.containers}>
                <div className={classes.writeup}>
                    {/* Image taken from https://weareforeus.org/about/ */}
                    <img src={umn} alt='UMN Logo' />
                    <p>
                        I am on an accelerated path to graduate.
                        My strategy consists of using summers to take elective and liberal education requirements.
                    </p>
                    <p>
                        I came out of high school with college credit, but there are four colleges that I have taken courses through.
                    </p>
                    <p>
                        Averaging 16 credits a semester in the fall and spring, and an average of 6 credits in each summer semester,
                        I will graduate with my bachelor of science degree in Computer Science 2.5 years after I finished high school.
                    </p>
                </div>
                <div className={classes.colleges}>
                    <p>College List</p>
                    <ol className={classes.pathinfo}>
                        <li>
                            <a href="https://twin-cities.umn.edu/">University of Minnesota</a>
                        </li>
                        <li>
                            <a href="https://www.normandale.edu/">Normandale Community College</a>
                        </li>
                        <li>
                            <a href="https://www.inverhills.edu/">Inver Hills Community College</a>
                        </li>
                        <li>
                            <a href="https://und.edu/">University of North Dakota</a>
                        </li>
                    </ol>
                </div>
            </div>
        </Fragment>
    );
};

export default PathInfo;