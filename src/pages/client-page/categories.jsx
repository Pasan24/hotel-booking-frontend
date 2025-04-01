import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CategoriesPage(){

        const[categories, setCategories] = useState([])
        const[isCategoryLoaded, setCategoryLoaded]= useState(false)
    
    useEffect(
        ()=>{

        if(!isCategoryLoaded){
          
                axios.get(import.meta.env.VITE_BACKEND_URL+ "/api/category").then(
                    (res)=>{
                   setCategories(res.data.categories)
                    setCategoryLoaded(true)
                })
            }
            
          },[isCategoryLoaded]

      
    )


    function DeleteItem(name){
        axios.delete(import.meta.env.VITE_BACKEND_URL+ "/api/category/"+name).then
        ((res)=>{
            setCategoryLoaded(false)
        })


    }

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-semibold text-center mb-4">Hotel Categories</h1>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left font-semibold">Name</th>
                <th className="py-2 px-4 border-b text-left font-semibold">Price</th>
                <th className="py-2 px-4 border-b text-left font-semibold">Features</th>
                <th className="py-2 px-4 border-b text-left font-semibold">Description</th>
                <th className="py-2 px-4 border-b text-left font-semibold">Image</th>
                <th className="py-2 px-4 border-b text-left font-semibold">Action</th>
             
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id}>
                  <td className="py-2 px-4 border-b">{category.name}</td>
                  <td className="py-2 px-4 border-b">${category.price}</td>
                  <td className="py-2 px-4 border-b">
                    <ul className="list-disc ml-4">
                      {category.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-2 px-4 border-b">{category.description}</td>
                  <td className="py-2 px-4 border-b">
                    {category.image ? (
                      <img src={category.image} alt={category.name} className="w-20 h-20 object-cover" />
                    ) : (
                      "No Image"
                    )}


                  </td>

                  <td className="py-2 px-4 border-b">
                    <button onClick={
                        ()=>{
                            DeleteItem(category.name)
                        }
                    } className=" bg-red-500 text-white px-4 py-1 rounded-md ml-2 ">
                         Delete
                         
                    </button> 


                  </td>


                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
      

