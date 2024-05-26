
// import React from 'react';
// const ProductList = ({ products, addToCart }) => {
//   return (
//     <>
//       <h1 className='Header'>All Data</h1>
//      <div className='Container'>
//       <section className="main-cointainer">
//         {products.map((curElem) => {
//           const { id, name, category, image, description } = curElem;

//           return (
//             <div className="card-container" key={id}>
//               <div className="card">
//                 <div className="card-body">
//                   <img src={image} alt="images" className="card-media" />
//                   <h2 className="card-title"> {name} </h2>
//                   {/* <p>Category: {category}</p> */}
//                   <span className="card-description subtitle">
//                     {description}
//                   </span>
//                 </div>

//                 <button className="addToCart_btn" onClick={() => addToCart(curElem)}>I'm Intrested</button>
//               </div>
//             </div>
//           );
//         })}
//       </section>
//     </div>
//    </>
//   );
// };

// export default ProductList;

// import React, { useState } from 'react';

// const ProductList = ({ products, addToCart }) => {
//   // State to track the current page
//   const [currentPage, setCurrentPage] = useState(1);
//   // Number of items to display per page
//   const itemsPerPage = 4;

//   // Calculate the index of the first and last item of the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   // Slice the products array to display only the items for the current page
//   const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

//   // Function to handle pagination
//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       <h1 className='Header'>All Data</h1>
//       <div className='Container'>
//         <section className="main-cointainer">
//           {currentProducts.map((curElem) => {
//             const { id, name, category, image, description } = curElem;

//             return (
//               <div className="card-container" key={id}>
//                 <div className="card">
//                   <div className="card-body">
//                     <img src={image} alt="images" className="card-media" />
//                     <h2 className="card-title"> {name} </h2>
//                     {/* <p>Category: {category}</p> */}
//                     <span className="card-description subtitle">
//                       {description}
//                     </span>
//                   </div>
//                   <button className="addToCart_btn" onClick={() => addToCart(curElem)}>I'm Interested</button>
//                 </div>
//               </div>
//             );
//           })}
//         </section>
//       </div>

//       {/* Pagination buttons */}
//       <div className="pagination">
//         {Array.from({ length: Math.ceil(products.length / itemsPerPage) }, (_, index) => (
//           <button key={index} onClick={() => paginate(index + 1)}>{index + 1}</button>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductList;

import React, { useState } from 'react';

const ProductList = ({ products, addToCart }) => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of items to display per page
  const itemsPerPage = 4;

  // Calculate the index of the first and last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the products array to display only the items for the current page
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <h1 className='Header'>All Data</h1>
      <div className='Container'>
        <section className="main-cointainer">
          {currentProducts.map((curElem) => {
            const { id, name, category, image, description } = curElem;

            return (
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <img src={image} alt="images" className="card-media" />
                    <h2 className="card-title"> {name} </h2>
                    {/* <p>Category: {category}</p> */}
                    <span className="card-description subtitle">
                      {description}
                    </span>
                  </div>
                  <button className="addToCart_btn" onClick={() => addToCart(curElem)}>I'm Interested</button>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* Pagination buttons */}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={prevPage}>Previous</button>
        <button disabled={indexOfLastItem >= products.length} onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

export default ProductList;
