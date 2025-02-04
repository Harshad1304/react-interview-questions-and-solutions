import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]); // State to store API data
  const [currentPage, setCurrentPage] = useState(0); // State to track the current page

  const pageSize = 10; // Number of products per page
  const totalProducts = data.length; // Total number of products available

  // Calculate the total number of pages needed
  const noOfPages = Math.ceil(totalProducts / pageSize);

  // Calculate the start and end index for slicing the data array
  const start = currentPage * pageSize; // Starting index for slicing
  const end = start + pageSize; // Ending index for slicing

  // Function to handle clicking on a page number
  function handleUserClick(num) {
    setCurrentPage(num); // Update the current page when a number is clicked
  }

  // Function to handle clicking the left arrow (previous page)
  function handleLeftArrow() {
    setCurrentPage((prev) => {
      if (prev <= 0) return 0; // Prevent going below page 0
      return prev - 1; // Move to the previous page
    });
  }

  // Function to handle clicking the right arrow (next page)
  function handleRightArrow() {
    setCurrentPage((prev) => {
      if (prev >= noOfPages - 1) return noOfPages - 1; // Prevent going beyond the last page
      return prev + 1; // Move to the next page
    });
  }

  // Fetch data from API
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=300'); // Fetching 300 products
    const result = await response.json();
    setData(result.products); // Store fetched data in state
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return (
    <>
      <h1 style={{ marginLeft: 10, padding: 10 }}>Fetch data from API with pagination</h1>
      <div>
        {/* Left arrow button to navigate pages */}
        <button disabled={currentPage === 0} onClick={handleLeftArrow} className='page-num'>{'<'}</button>
        
        {/* Generating page numbers dynamically */}
        {[...Array(noOfPages).keys()].map((num) => (
          <button
            onClick={() => handleUserClick(num)}
            className='page-num'
            style={{ backgroundColor: currentPage === num ? 'skyBlue' : null }}
            key={num}
          >
            {num}
          </button>
        ))}
        
        {/* Right arrow button to navigate pages */}
        <button disabled={currentPage === noOfPages - 1} onClick={handleRightArrow} className='page-num'>{'>'}</button>
      </div>
      
      <div className='product-list'>
        {/* Displaying products based on current page */}
        {data.slice(start, end).map((product) => (
          <ProductCard image={product.thumbnail} key={product.id} title={product.title} />
        ))}
      </div>
    </>
  );
}

export default App;

// Product Card Component
const ProductCard = ({ image, title }) => {
  return (
    <div className='product-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

// comments added for understanding Using ChatGpt