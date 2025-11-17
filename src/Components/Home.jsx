import React, { useState } from "react";



const Home = () => {
    
  let product=[
    {id:1, name:'Ram', age:23, city:"mumbai"},
    {id:2, name:'Mukesh kumar', age:25, city:"Pune"},
    {id:3, name:'Deepak', age:26, city:"Delhi"}
  ]
  return (
    <>
      <div className="text-center font-semibold flex gap-2 justify-center">
        {product.map((data)=>(<div key={data.id}>
             <h2>Name={data.name}</h2>
             <h2>age={data.age}</h2>
             <h2>city={data.city}</h2>
             <h2>Name={data.id}</h2>
        </div>
       ) )}
      </div>

    </>
  );
};

export default Home;
