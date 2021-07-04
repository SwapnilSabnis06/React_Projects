import React from "react";

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeofDay;

  const styles = {
    fontSize: 30,
  };

  if (hours < 12) {
    timeofDay = "Morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeofDay = "Afternoon";
    styles.color = "#8914A3";
  } else {
    timeofDay = "Night";
    styles.color = "#D90000";
  }

  return (
    <div>
      <h1 style={styles}>Good {timeofDay}</h1>
      <h1>It's {hours % 12} now</h1>
    </div>
  );
}

export default App;
