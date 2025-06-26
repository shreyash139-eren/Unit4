import React from "react"

function ProfileCard({name,age,bio}){
    const Name=name.trim()===""?"Anonymous":name;
    const Bio=bio.trim()===""?"Working On It!":bio;
    const Size=Bio.length>100
    const Final=Size?Bio.slice(0,100):Bio;

    

    return(

        <>
        <div>
        <h2>Name : {Name}</h2>
        <h2>Age : {age}</h2>
        <p style={{display:"inline"}}>Bio : {Final} {Size && <p style={{display:"inline"}}>...Read More</p>}</p>
        </div>
        </>
    )

}
export default ProfileCard