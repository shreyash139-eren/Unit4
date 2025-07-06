import React, { useReducer } from "react";


function reducer(state,action){
    switch(action.type){
        case 'update':
            return {...state,[action.field]:action.value}

        case 'submit':
            return {...state, data:[...state.data,{
                college:state.college,
                year:state.year,
                building:state.building,
                street:state.street,
                city_name:state.city_name,
                pinCode:state.pinCode,
                landmark:state.landmark,
                state:state.state,
                latitude:state.latitude, 
                longitude:state.longitude,
                courses:state.courses.trim().split(",").map(ele=>ele.trim())
            }]}
        
        case 'reset':
            return {...state,
                college:"",
                year:"",
                building:"",
                street:"",
                city_name:"",
                pinCode:"",
                landmark:"",
                state:"",
                latitude:"", 
                longitude:"",
                courses:"",
            }
        
        default:
            return "Invalid action type"
    }
}

const initialValue={
    college:"",
    year:"",
    building:"",
    street:"",
    city_name:"",
    pinCode:"",
    landmark:"",
    state:"",
    latitude:"", 
    longitude:"",
    courses:[],
    data:[]
}

export default function Form(){
    const [state,dispatch]=useReducer(reducer, initialValue)

    function handleChange(e){
        const {name, value}=e.target
        dispatch({type:'update',field:name,value:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type:'submit'})
        dispatch({type:'reset'})
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>College : </label>
                <input type="text" placeholder="Enter College Name" name="college" value={state.college} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/>
            </div>
            <div>
                <label>Establishment Year : </label>
                <input type="number" placeholder="Enter Establishment Year" name="year" value={state.year} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/>
            </div>
            <div>
                <label>Address  </label><br />
                <label>Building : </label>
                <input type="number" placeholder="Enter Building Number" name="building" value={state.building} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/>
                <label>Street : </label>
                <input type="text" placeholder="Enter Street" name="street" value={state.street} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/><br />
                <label>City </label><br />
                <label>Name : </label>
                <input type="text" placeholder="Enter city" name="city_name" value={state.city_name} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/><br />
                <label>Locality </label><br />
                <label>Pincode : </label>
                <input type="number" placeholder="Enter Pincode" name="pinCode" value={state.pinCode} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/>
                <label>Landmark : </label>
                <input type="text" placeholder="Enter Landmark" name="landmark" value={state.landmark} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/><br />
                <label>State : </label>
                <input type="text" placeholder="Enter State" name="state" value={state.state} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/><br />
                <label> Coordinates </label><br />
                <label> Latitude : </label>
                <input type="text" placeholder="Enter latitude" name="latitude" value={state.latitude} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/>
                <label> Longitude : </label>
                <input type="text" placeholder="Enter longitude" name="longitude" value={state.longitude} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/><br />
                <label>Courses : </label>
                <input type="text" placeholder="Enter Courses with comma" name="courses" value={state.courses} onChange={handleChange} required style={{marginRight:"10px",marginBottom:"10px"}}/>
            </div>
            <button type="submit">Submit</button>
        </form>

        <div>
            {state.data.length>0?state.data.map((ele,i)=>(
                <div key={i}>
                    <h3>College : {ele.college}</h3>
                    <h3>Establishment Year : {ele.year}</h3>
                    <h3>Address : {ele.building}, {ele.landmark}, {ele.street}, {ele.city_name}, {ele.pinCode}, {ele.state}</h3>
                    <h3>Courses : {ele.courses.join(", ")}</h3>
                </div>
            )):(<h1>No data Available</h1>)}
        </div>
        </>
    )
}