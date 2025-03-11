/* eslint-disable react/prop-types */
import React, {useState,useRef} from "react"

const Accordion = ({ data }) => {


  const [showImg,setShowImg]=useState(true)
  const extraContentRef = useRef(null); // Create a ref to target the extra content
  
  const ViewAllBtn = ()=>{
    if(showImg==false){

      setTimeout(() => {
        extraContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0); // Small delay to ensure DOM updates before scrolling
      setShowImg(!showImg)
      

    }
    else{
      setShowImg(!showImg)

    }
  }


  return (
    <div>
       
      
         <div className='ShowHeader'>
         <h2>Last Works</h2>
         <button className="ViewAllBtn" onClick={()=>ViewAllBtn(!showImg)}> View all Works</button>
          </div>
          <div className="ShowWorks">
        <div className="ShowCard">
          {data[0] && (
            <>
              <img src={data[0].url} alt="" />
              <p className="CardHeader">{data[0].header}</p>
              <p className="CardName">{data[0].name}</p>
            </>
          )}
        </div>
        <div className="ShowCard">
          {data[1] && (
            <>
              <img src={data[1].url} alt="" />
              <p className="CardHeader">{data[1].header}</p>
              <p className="CardName">{data[1].name}</p>
            </>
          )}
        </div>
        <div className="ShowCard" ref={extraContentRef}>
          {data[2] && (
            <>
              <img src={data[2].url} alt="" />
              <p className="CardHeader">{data[2].header}</p>
              <p className="CardName">{data[2].name}</p>
            </>
          )}
        </div>
        <div className="ShowCard">
          {data[3] && (
            <>
              <img src={data[3].url} alt="" />
              <p className="CardHeader">{data[3].header}</p>
              <p className="CardName">{data[3].name}</p>
            </>
          )}
         
        </div>
        {showImg && <div className="ShowCard"  >
          {data[4] && (
            <>
              <img src={data[4].url} alt="" />
              <p className="CardHeader">{data[4].header}</p>
              <p className="CardName">{data[4].name}</p>
            </>
          )}
         
        </div>}
        {showImg && <div className="ShowCard">
          {data[5] && (
            <>
              <img src={data[5].url} alt="" />
              <p className="CardHeader">{data[5].header}</p>
              <p className="CardName">{data[5].name}</p>
            </>
          )}
         
        </div>}

      </div>
    </div>
  );
};

export default Accordion;