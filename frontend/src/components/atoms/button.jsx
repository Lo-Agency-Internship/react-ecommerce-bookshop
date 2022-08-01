import React  from "react";
const Button = ({nameButton,typeButton,classButton})=> 
{
    return(<button type={typeButton} class={classButton}>{nameButton}</button>)
}
export default Button