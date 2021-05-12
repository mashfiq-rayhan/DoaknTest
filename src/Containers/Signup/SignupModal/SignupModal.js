
import Aox from "../../../HOC/Aox/Aox";
import Backdrop from "../../../Components/UI/Backdrop/Backdrop";
import classes from "./SignupModal.module.css";


const SignupModal = (props) => {
    return (
      <Aox>
        <Backdrop show={props.show} clicked={props.closeModal} />
        <div
          className={classes.Modal}
          style={{
            transform: props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: props.show ? "1" : "0",
          }}
        >
          {props.children}
        </div>
      </Aox>
    );
}

export default SignupModal;
