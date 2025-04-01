import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function AdminCategories() {

    const token = localStorage.getItem("token")

    if(token==null){
        window.location.href="/login"
    }

   



  const [categories, setCategories] = useState([]);

  const [categoryIsLoaded, setCategoryIsLoaded] = useState(false);

  useEffect(() => {
    if (!categoryIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
        .then((res) => {
          console.log(res);
          setCategories(res.data.categories);
          setCategoryIsLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [categoryIsLoaded]);


  function handleDelete(name){
    axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/category/"+name,{

        headers:{
            Authorization : "Bearer "+token
        }

    }).then ((res)=>{
        setCategoryIsLoaded(false)
        toast.success("category deleted successfully ")

    })
}

  return (
    <div className="w-full bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      <table className="w-full table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Features</th>
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index} className="border-b">
              <td className="p-3">{category.name}</td>
              <td className="p-3">${category.price}</td>
              <td className="p-3">
                <ul className="list-disc list-inside">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </td>
              <td className="p-3">{category.description}</td>
              <td className="p-3">
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                ) : (
                  "No image"
                )}
              </td>
              <td className="p-3 text-center">
                <button
                  onClick={() => {}}
                  className="text-blue-500 hover:text-blue-700 mx-1"
                  aria-label="Edit Category"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {handleDelete(category.name)}}
                  className="text-red-500 hover:text-red-700 mx-1"
                  aria-label="Delete Category"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
