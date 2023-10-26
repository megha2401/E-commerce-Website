import React, { useEffect } from "react";
import { Product } from "../products/ProductList";

interface ViewWishlistProps {
  wishlist: number[];
  products: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<number[]>>;
}

const ViewWishlist: React.FC<ViewWishlistProps> = ({
  wishlist,
  products,
  setWishlist,
}) => {
  useEffect(() => {
    const storedWishListItem = localStorage.getItem("favitemlist");
    if (storedWishListItem) {
      setWishlist(JSON.parse(storedWishListItem));
    }
  }, []);

  const renderWishlistItems = () => {
    if (wishlist.length === 0) {
      return <p>Your wishlist is empty.</p>;
    }

    return wishlist.map((productId) => {
      const product = products.find((p) => p.id === productId);
      if (product) {
        return (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={150}
            />
            <p>Price: ${product.price}</p>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <h2>Wishlist</h2>
      {renderWishlistItems()}
    </div>
  );
};

export default ViewWishlist;
