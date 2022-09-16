import classes from './LightBox.module.css';

const LightBox = (props) => {
    return (
        <div className={classes.box}>
            {props.children}
        </div>
    );
};

export default LightBox;