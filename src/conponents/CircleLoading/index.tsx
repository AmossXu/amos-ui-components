import React from 'react';

const CircleLoading: React.FC<any> = (props) => {
  const {
    index,
    
  } = props
  // const classes = classNames('menu', className, {
  //   'menu-vertical': mode === 'vertical'
  // })
  return(
    <div className="circle-loading">{index}%</div>
  )
}

export default CircleLoading