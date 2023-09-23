import React from "react";
import {Chart} from 'react-google-charts'

export const data_bar_2 = [
    ["Funcionários", "Região", {role: "style"},
    {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
    },
    {role: "annotation"}
],
["Noroeste", 1500, "#0F4F6D", null, 1500], 
["Nordeste", 2000, "#0F4F6D", null, 2000], 
["Central", 2500, "#0F4F6D", null, 2500], 
["Sul", 4800, "#0F4F6D", null, 4800], 
["Norte", 5000, "#0F4F6D", null, 5000], 
["Sudeste", 3700, "#0F4F6D", null, 3700], 
["Centro - Oeste", 4000, "#0F4F6D", null, 4000], 
]; 

export const options_bar_2 = { 
title: "Funcionários ativos", 
chartArea: { width: "75%"}, 
colors: ["#0F4F6D", "#0F4F6D"], 
legend: 'none', 
hAxis: { 
minValue: 0, 
}, 
vAxis: { 
title: "Região", 
}, 
}; 

export function bar_2(){ 
return(   
<Chart 
  chartType="BarChart" 
  width="100%" 
  height="700px" 
  data={data_bar_2} 
  options={options_bar_2} 
/> 
) 
} 

export default bar_2