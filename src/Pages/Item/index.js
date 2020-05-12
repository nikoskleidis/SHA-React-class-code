import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../api";
import { BasketContext } from "../../providers/BasketProvider";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { dispatch } = useContext(BasketContext);

  useEffect(() => {
    getItem(id).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <span> Loading item details... </span>
      ) : (
        <div>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
          <b>{item.price}</b>
          <button onClick={() => dispatch({ type: "ADD_TO_BASKET", item })}>
            add to basket
          </button>
          <p>{item.description}</p>
        </div>
      )}
    </div>
  );
}

export default Item;
