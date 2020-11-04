import React from 'react';
import classnames from 'classnames';

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface BaseButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  className?: string;
  /**
   * Is this the principal call to action on the page?
   */
  disabled?: boolean;
  /**
   * Is this the principal call to action on the page?
   */
  size?: ButtonSize;
  /**
   * Is this the principal call to action on the page?
   */
  btnType?: ButtonType;
  /**
   * Is this the principal call to action on the page?
   */
  children: React.ReactNode;
  /**
   * Is this the principal call to action on the page?
   */
  href?: string;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseButtonProps
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseButtonProps
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classnames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
  size: 'sm'
}

export default Button;