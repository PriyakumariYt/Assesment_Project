
import React, { useState } from 'react';

const ProductList = ({ products }) => {
 
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
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
                  <button className="IntrestedBtn">I'm Interested</button>
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
