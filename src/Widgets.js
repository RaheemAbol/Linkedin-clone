import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
         <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
            <h4> {heading} </h4>
            <p> {subtitle} </p>
        </div>

    </div>
)

    return (
        <div className="widgets">
           <div className="widgets__header">
             <h2>LinkedIn News</h2>
             <InfoIcon />    
          </div>
          {newsArticle("Latest on Covid-19", "Top news - 15,648 readers")}
          {newsArticle("redux", "Code - 6,893 readers")}
          {newsArticle("Handling stress", "Health - 25,397 readers")} 
          {newsArticle("Finishing projects on time", "Code - 9,484 readers")}
          {newsArticle("java", "Code - 115,774 readers")}
        </div>
    );
}

export default Widgets;
