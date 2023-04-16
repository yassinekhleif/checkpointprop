import React from "react";

import HandleName from "./handleName";
//import { PropTypes } from "prop-types";
const Profile=({fullName,bio,profession})=>{
    
    return(
    
        <div>
            <h1>{fullName[0]}<span> {fullName[1]}</span></h1>
            <h2><span>Bio :</span>{bio}</h2>
            <h2><span>profession :</span>{profession}</h2>
            <HandleName name={fullName}/>
            <GetImage><img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/323925871_5545067835616140_9081449258188654850_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KeHS-9f6mUsAX9u3foY&_nc_ht=scontent.ftun1-2.fna&oh=00_AfDzTr71l2GWDeKpmvgqNuD6YEgvOCwrgyl9If-8Jvk2Jg&oe=6440AACB"alt=""></img></GetImage>
        </div>
        
    );
}

const GetImage=props=>{
    return <div>{props.children}</div>
}

export default Profile;