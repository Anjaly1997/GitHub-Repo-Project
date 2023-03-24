import React from "react";
import { MdInsertEmoticon } from "react-icons/md";

type LeftProps = {
 avatarUrl: string;
 name: string;
};

function LeftComponent({ avatarUrl, name }: LeftProps): JSX.Element {
 return (
  <div className="left">
   <div className="image">
    <img src={avatarUrl} alt="" />
    <div className="emoticonBox">
     <MdInsertEmoticon className="emoticon" />
    </div>
   </div>
   <div className="leftDetails">
    <h2>{name}</h2>
    <button>Follow</button>
   </div>
  </div>
 );
}

export default LeftComponent;
