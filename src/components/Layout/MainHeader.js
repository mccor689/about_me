import classes from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';

const MainHeader = (props) => {
    return (
        <header className={classes.header}>
            {/* <div className={classes.logo} >Ryan McCormick</div> */}
            <nav className={classes.nav}>
                  <ul>
                    <li>
                        <NavLink to='/about_me' activeClassName={`${classes.active} ${classes.logo}`}>
                            Ryan McCormick
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about_me/path' activeClassName={classes.active}>
                            Path
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about_me/courses' activeClassName={classes.active}>
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about_me/skills' activeClassName={classes.active}>
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about_me/links' activeClassName={classes.active}>
                            Links
                        </NavLink>
                    </li>
                </ul>
            </nav>
      </header>
    )
};

export default MainHeader;