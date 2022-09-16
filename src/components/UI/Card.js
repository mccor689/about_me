import { NavLink } from 'react-router-dom';
import classes from './Card.module.css';

const Card = (props) => {
    if (props.course) {
        return (
            <div className={classes.card}>
                <NavLink
                    to={`/courses/${props.course.key}`}
                    style={{color: '#455351', textDecoration: 'none'}}
                >
                    {props.children}
                </NavLink>
            </div>  
        );
    }
    return (
        <div className={classes.card}>
            {props.children}
        </div>  
    );
    
};

export default Card;
