import { NavLink } from 'react-router-dom';
import classes from './SmallCard.module.css';

const SmallCard = (props) => {
    if (props.linkTo) {
        return (
            <div className={classes.smallcard}>
                <NavLink
                    to={props.linkTo}
                    style={{color: '#455351', textDecoration: 'none'}}
                >
                    {props.children}
                </NavLink>
            </div>
        )
    }
    return (
        <div className={classes.smallcard}>{props.children}</div>
    )
};

export default SmallCard;