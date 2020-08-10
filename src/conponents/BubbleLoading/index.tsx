import React from 'react';

const BubbleLoading: React.FC<any> = (props) => {
  const {
    index,
    
  } = props
  // const classes = classNames('menu', className, {
  //   'menu-vertical': mode === 'vertical'
  // })
  return(
    <div className="bubble-loading">{index}%</div>
  )
}

export default BubbleLoading