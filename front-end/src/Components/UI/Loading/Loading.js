import logo from '../../../Assets/Images/Logo.png';

import classes from './Loading.module.css';

const Loading = () => (
    <div className={classes.Loading}>
      <header className={classes.LoadingHeader}>
        <img src={logo} className={classes.LoadingLogo} alt="logo" /> 
        <h1 className={classes.Dokan}>DOKAN</h1>
      </header>
    </div>
  );


export default Loading;
