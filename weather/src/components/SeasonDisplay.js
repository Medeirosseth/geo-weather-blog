import React from "react";

const getSeason = (lat, month) => {
if(month > 2 && month < 9){
 return  lat > 0 ? 'summer' : "winter";
} else { 
  return lat < 0 ? 'winter' : 'summer';
}
}



const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const text = season === 'winter' ? 'Burr, its chilly' : 'Lets hit the beach!';

  return (
    <div>
      <h1> {text}</h1> 
    </div>)
}

export default SeasonDisplay 

//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />