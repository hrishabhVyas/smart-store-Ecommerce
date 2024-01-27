import React from "react";
import { useWishlist } from "../context/wishlist"; // Import the useWishlist hook

const ProductComponent = ({ product }) => {
  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.success("Item Added to Wishlist");
  };

  return (
    <div className="card m-2" key={product._id}>
      {/* ... Other card elements */}
      <div className="card-body">
        {/* ... Other card body elements */}
        <div className="card-name-price">
          <button
            className="btn btn-danger ms-1"
            onClick={() => handleAddToWishlist(product)}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
