import classes from "./Button.module.css";

const Button = (props) => {
  let cssClassname = '';

  if( props.btnType === 'Login' ) {
    cssClassname = 'LoginButton';
  }

  if( props.btnType === 'CreateAccount' ) {
    cssClassname = 'CreateButton';
  }

  return (
      <div>
          <button className={classes[cssClassname]} type={props.type} onClick={props.clicked}>{props.children}</button>
      </div>
  );
};

export default Button;


