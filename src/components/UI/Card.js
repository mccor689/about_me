import { NavLink } from 'react-router-dom';
import classes from './Card.module.css';

const Card = (props) => {
    if (props.courseLink) {
        return (
            <div className={classes.card}>
                <NavLink
                    to={props.courseLink}
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
