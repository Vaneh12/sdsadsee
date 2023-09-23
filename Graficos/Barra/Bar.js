import React from 'react' 
 import {Chart} from 'react-google-charts'; 
  
 export const  options_bar = { 
     title: "Metas e Vendas dos Produtos", 
     chartArea: { width: "70%"}, 
     colors: ["#0F4F6D", "#178ABE"], 
     hAxis: { 
       minValue: 0, 
       width: "10px", 
     }, 
     vAxis: { 
       width: "10px", 
     }, 
  
 }; 
  
 export const data_bar = [ 
     ["Produtos", "Vendas", "Metas"], 
     ["Produto 01", 1000, 1200], 
     ["Produto 02", 500, 600], 
     ["Produto 03", 700, 500], 
     ["Produto 04", 300, 600], 
 ]; 
  
 export function bar(){ 
   return( 
     <Chart 
       chartType="BarChart" 
       width="100%" 
       height="700px" 
       data={data_bar} 
       options={options_bar} 
     /> 
   ) 
 } 
  
 export default bar