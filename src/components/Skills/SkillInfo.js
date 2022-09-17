import ListOfSkills from "../../store/ListOfSkills";
import classes from './SkillInfo.module.css';

const SkillInfo = () => {
    return (
        <div className={classes.skill}>
            <h1>Programming Languages</h1>
            <ul>
                {ListOfSkills.map(skill => {
                    return <li><img
                        src={skill}
                        alt="programming language"
                    /></li>
                })}
            </ul>
        </div>
    );
};

export default SkillInfo;