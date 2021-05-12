import React from 'react';

import classes from './Input.module.css';

export const Input = ( props ) => {
    let inputElement = null;
    let inputClasses = [];
    if( props.elementId === 'login' ) {
        inputClasses = [classes.InputInfo];
    }
    

     if( props.elementId === 'signup' ) {
        if(props.elementConfig.placeholder === 'First Name'){
            inputClasses = [classes.InputName];
        }else if(props.elementConfig.placeholder === 'Last Name'){
            inputClasses = [classes.InputName];
        }else if(props.elementConfig.placeholder === 'Email'){
            inputClasses = [classes.InputInfos];
        }else if(props.elementConfig.placeholder === 'Password'){
            inputClasses = [classes.InputInfos];
        }else if(props.elementConfig.placeholder === 'Phone Number'){
            inputClasses = [classes.InputInfos];
        }else if(props.elementConfig.placeholder === 'NID'){
            inputClasses = [classes.InputInfos];
        }else if(props.elementConfig.name === 'gender'){
            inputClasses = [classes.InputInfos];
        }else if(props.elementConfig.name === 'birthday'){
            inputClasses = [classes.InputInfos];
        }
    }



    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break; 
        case ( 'radio' ):
            inputElement= <input />
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />; 
    }

    return (
        <div>
            {inputElement}
        </div>
    );

};

