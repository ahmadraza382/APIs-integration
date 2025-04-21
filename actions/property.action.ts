import { headers } from "next/headers";
import { GetServerSideProps } from "next";

 
 
export  async function fetchProperties() {

    // const url = 'https://dummyjson.com/products'
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        return { data:data, error: null };        // return { data: res.json(), error: null }
    } 
    catch (error) {
        return  {error: "error"}
    }
}

export const postContacts = async (firstName: string, email: string) => {
    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST", // ✅ Fix the extra spaces
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, email }),
      });
  
      if (res.ok) {
        const data = await res.json(); // ✅ await the result properly
        return { data, error: null };
      } else {
        return { data: null, error: "Failed to submit" };
      }
    } catch (error) {
      return { data: null, error: "Something went wrong" };
    }
  };
  

  // Delete handler
//  export const deleteProperties = async ({id , setProducts}:{id ?:number }) => {
//     try {
//        const res =await fetch(`https://dummyjson.com/products/${id}`, {
//         method: "DELETE",
//       });
//       const data = res.json()
//       // Update UI after delete
//       data((prev: { id: number }[]) => prev.filter((p: { id: number }) => p.id !== id));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };
