import React, {useState} from 'react';
import wework from "../assets/new-web/wework.png";
class Wework extends React.Component {
    render() {
        return (
            <div className="content-wework text-center">
                <img src={wework} className="wework-img"/>
                <h2 className="title-wework">
                    Prenons un café ensemble à Wework
                </h2>
            </div>
        )
    }
}

export default Wework

