import React from 'react';

const TeacupLoading: React.FC<any> = (props) => {
  const {
    index,
    
  } = props
  // const classes = classNames('menu', className, {
  //   'menu-vertical': mode === 'vertical'
  // })
  return(
    <div className="teacup-loading">{index}%</div>
  )
}

export default TeacupLoading