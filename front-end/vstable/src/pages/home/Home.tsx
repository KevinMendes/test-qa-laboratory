import * as React from 'react';

import './Home.scss';
import {Login} from "../../components/Login";
import {Inscription} from "../../components/Inscription";

interface Props {

}

export const Home: React.FC<Props> = (props) => {
  return <div className={"home--container"}>
    <Login />
    <Inscription />
  </div>
}
