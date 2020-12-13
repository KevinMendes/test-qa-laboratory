import * as React from 'react';
import {ChangeEvent} from "react";
import classNames from 'classnames';

import './Input.scss';

interface Props {
  type: string;
  id?: string;
  name: string;
  required?: boolean;
  value: string | number;
  className: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = (props) => {

  let inputClass = classNames('input', props.className)

  return <div className={"input--container"}>
    <input
      type={props.type}
      id={props.id ? props.id : 'none'}
      name={props.name}
      required={props.required ? props.required : true}
      className={inputClass}
      value={props.value}
      onChange={(e) => props.onChange(e) }
    />
  </div>
}
