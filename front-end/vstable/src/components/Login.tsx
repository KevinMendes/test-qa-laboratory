import * as React from 'react';
import {ChangeEvent, useState} from "react";
import {Input} from "./Input/Input";

import {Users} from "../../../../models/model";

import './Login.scss';

interface Props {

}

export const Login: React.FC<Props> = (props) => {

  const [login, setLogin] = useState<Users.Login>({email: '', password: ''});

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  return <div className={"login--container"}>
    <div className={"login--w"}>
      <label className={"login--w--label"}>Saisissez votre email</label>
      <Input
        type={"email"}
        name={"email"}
        value={login.email}
        className={'login--w--email'}
        onChange={(e) => onChange(e)}/>
      <label className={"login--w--label"}>Saissez votre mot de passe</label>
      <Input
        type={"password"}
        name={"password"}
        value={login.password}
        className={'login--password'}
        onChange={(e) => onChange(e)}/>
    </div>
  </div>
}
