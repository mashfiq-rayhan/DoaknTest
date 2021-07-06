import logo from '../../../Assets/Images/Logo.png';

import classes from "./LogoTag.module.css";


const LogoTag = () => (
      <div className={classes.LogoTag}>
          <img src={logo} alt="Logo" className={classes.Logo}/>
          <h1 className={classes.DokanName}>DOKAN</h1>
          <p className={classes.DokanMotto}>Dokan helps you for your purchasing and to create your own shop.</p>
      </div>
  );


export default LogoTag;
