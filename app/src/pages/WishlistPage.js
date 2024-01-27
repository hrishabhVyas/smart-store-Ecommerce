// WishlistPage.jsx
import React from "react";
import Layout from "../components/Layout/Layout";
import { useWishlist } from "../context/wishlist";

const WishlistPage = () => {
  const { wishlist, clearWishlist } = useWishlist();

  return (
    <Layout title="Wishlist - Ecommerce App">
      <div className="container">
        <h4 className="mt-5 d-flex justify-content-between align-items-center">
          WISHLIST
          {wishlist.length > 0 && (
            <button
              className="btn btn-danger"
              onClick={clearWishlist}
            >
              Remove All
            </button>
          )}
        </h4>
        {wishlist.length === 0 ? (
          <p className="mb-4">Your wishlist is empty.</p>
        ) : (
          <div className="row row-cols-3 g-4 mt-4">
            {wishlist.map((p) => (
              <div key={p.id} className="col">
                <div className="card">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    height="200"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0, 30)}</p>
                    <p className="card-text">Price: {p.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WishlistPage;
