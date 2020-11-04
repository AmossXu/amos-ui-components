import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import classnames from 'classnames';

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface BaseButtonProps {
  /**
   * className 样式?
   */
  className?: string;
  /**
   * 是否可见?
   */
  disabled?: boolean;
  /**
   * 控制Button大小?
   */
  size?: ButtonSize;
  /**
   * Button的样式?
   */
  btnType?: ButtonType;
  /**
   * 子组件
   */
  children: React.ReactNode;
  /**
   * Link样式下的地址?
   */
  href?: string;
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLElement> & BaseButtonProps
type AnchorButtonProps = AnchorHTMLAttributes<HTMLElement> & BaseButtonProps
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props) => {
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
