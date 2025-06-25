import React from "react";
import ThemeApp from "./ThemeApp";

    function ThemedBox({theme}){
        let styles;
       { if(theme==="light"){
            styles={
                backgroundColor:"beige",
                color:"maroon",
                width:"200px",
                height:"200px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                border:"3px solid maroon",
                margin:"20px 0"
            }
        }
        
        else{
            styles={
                width:"200px",
                height:"200px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                margin:"20px 0",
                border:"1px solid white"
            }
        }
    }

        return(
            <>
            <div style={styles}>
            <h3>This is {theme} box</h3>
            </div>
            </>
        )
    }

export default ThemedBox