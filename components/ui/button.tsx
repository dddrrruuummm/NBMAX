import * as React from "react";
type Props=React.ButtonHTMLAttributes<HTMLButtonElement>&{variant?:"default"|"outline"|"ghost"|"icon"};
export const Button=React.forwardRef<HTMLButtonElement,Props>(function Button({className="",variant="default",type="button",...props},ref){return <button ref={ref} type={type} className={`button button-${variant} ${className}`} {...props}/>;});
