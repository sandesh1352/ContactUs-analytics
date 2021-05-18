import React, { useState } from "react";
import {Line} from 'react-chartjs-2'

import axios from 'axios'


function Analytics(){


    const [startdate, setStartDate] = useState("")
    const [enddate, setEndDate] = useState("")
  

    const [fetchData,setFetchData] = useState([])
    const getDate = fetchData.map((item)=>{
        return item.date
    })

    const getCount = fetchData.map((item)=>{
        return item.Count
    })

    const data = {
        labels:getDate,
        datasets:[{
            label:'number of contact us details (C)',
            data:getCount,
            fill: false,
            backgroundColor: "rgb(0, 74, 94)",
            borderColor: "rgba(	0, 135, 170, 0.2)",
        }]
    }
    const options = {
        title:{
            display:true,
            text:'Line Chart'
        },
        scales:{
            yAxes:[{
                ticks:{
                    min:0,
                    max:6,
                    stepSize:1
                }
            }]
        }
    }
    

    const handleClick = () => {
     
        axios({
          method: "POST",
          url: "http://127.0.0.1:8000/ContactAPI/Analytics/",
          data: {
            start_date : startdate,
            end_date: enddate
           
          },
        })
          .then((res) => setFetchData(res.data))
          .catch((e) => console.log(e));
      };
    return(
        <div>

        <div style={{justifyContent:"center"}}>
        <input
          type="date"
          value={startdate}
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />
        <input
          type="date"
          value={enddate}
          onChange={(e) => {setEndDate(e.target.value)}}
        />
        <input type="submit" style={{marginTop:"30px",width:"100px",height:"40px"}} onClick={()=>{handleClick()}}/>
      </div >
          <div style={{width:"50%",height:"50%",margin:"50px"}}>
            <Line data={data} options={options} />
            </div>
        </div>
        

    )
}
export default Analytics