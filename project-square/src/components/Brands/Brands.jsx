import { useState, useEffect } from "react";
import './Brands.css';

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [originalBrands, setOriginalBrands] = useState([]);
  const [filterPublished, setFilterPublished] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5001/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setOriginalBrands(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  //sort brands
  const sortBrands = () => {
    const sortedBrands = [...brands].sort((a, b) => a.name.localeCompare(b.name));
    setBrands(sortedBrands);
  };

  const clearSort = () => {
    setBrands(originalBrands);
  };

  // Function to filter brands by the 'isPublished' field
  const filterByPublished = () => {
    setFilterPublished(!filterPublished);
    if (!filterPublished) {
      const publishedBrands = originalBrands.filter((brand) => brand.isPublished);
      setBrands(publishedBrands);
    } else {
      setBrands(originalBrands);
    }
  };

  return (
    <div className="brands">
      <h2>Trusted by Leading Brands</h2>
      <button onClick={sortBrands}>Sort by Name (A-Z)</button>
      <button onClick={clearSort}>Clear Sort</button>
      <button onClick={filterByPublished}>
        {filterPublished ? "Show All Brands" : "Show Published Brands"}
      </button>
      <div className="images">
        <ul>
          {brands.map((brand) => (
            <li className="brands-container" key={brand._id}>
              <img src={brand.logoUrl} alt={brand.name} />
              <h3>{brand.name}</h3>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Brands;