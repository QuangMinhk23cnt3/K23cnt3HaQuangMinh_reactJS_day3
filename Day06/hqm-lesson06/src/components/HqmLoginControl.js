import React from 'react'
import HqmLoginComp from './HqmLoginComp';
import HqmLogoutComp from './HqmLogoutComp';

export default function HqmLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var HqmLoginControl = isLoggedIn?<HqmLoginComp />: <HqmLogoutComp />;
  return (
    <div>
        {HqmLoginControl}
    </div>
  )
}
