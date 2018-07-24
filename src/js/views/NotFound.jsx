import React from "react";
//include images into your bundle
import rigoImage from '../../img/login-banner.png';

export default class NotFound extends React.Component {
  render() {
    return (
        <div className="text-center mt-5">
            <h1>Whooops!!!</h1>
            <h2>It seems that this page does not exists, check your url</h2>
            <img src={rigoImage} />
        </div>
    );
  }
}
