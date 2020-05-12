import React, { useContext, useEffect, useMemo, useState } from "react";
import { getItems } from "../../api";
import { Link } from "react-router-dom";
import "./styles.css";
import { BasketContext } from "../../providers/BasketProvider";

function ItemListing() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { dispatch } = useContext(BasketContext);

  useEffect(() => {
    // load data from the server
    getItems().then((items) => {
      setLoading(false);
      setItems(items);
    });
  }, []);

  const filteredItems = useMemo(() => items.filter((item) => item.stock > 0), [
    items,
  ]);

  return (
    <div>
      <h1>Items of SHA eShop</h1>
      {loading ? (
        <span>Loading</span>
      ) : (
        <div className="ItemListing_itemTable">
          {filteredItems.map((item) => (
            <div className="ItemListing_item" key={item.id}>
              <div>
                <Link to={`item/${item.id}`}>{item.name}</Link>
              </div>
              <div>{item.category}</div>
              <div>
                <b>{item.price}</b>
              </div>
              <div>
                <b>{item.stock}</b>
              </div>
              <div>
                <button
                  onClick={() => dispatch({ type: "ADD_TO_BASKET", item })}
                >
                  add to basket
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemListing;
