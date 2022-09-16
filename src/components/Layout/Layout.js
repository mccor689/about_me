import { Fragment } from 'react';
import classes from './Layout.module.css';
import MainHeader from './MainHeader';

const Layout = (props) => {
    return (
        <div className={classes.back}>
            <MainHeader />
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
};

export default Layout;