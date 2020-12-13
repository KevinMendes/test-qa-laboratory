import * as React from 'react';

import './Button.scss'

interface Props {

}

export const Button: React.FC<Props> = (props) => {
  return <div className={"button--container"}>
    <button className={"button"}>
      {props.children}
    </button>
  </div>
}
