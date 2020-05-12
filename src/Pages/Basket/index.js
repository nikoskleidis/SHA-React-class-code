import React, { useContext } from "react";
import { BasketContext } from "../../providers/BasketProvider";

function Basket() {
  const { basketItems, dispatch } = useContext(BasketContext);

  return (
    <div>
      <h1>Basket</h1>
      {basketItems.length > 0 ? (
        <div>
          {basketItems.map((item) => (
            <div key={item.id}>
              <div>name: {item.name}</div>
              <div>
                quantity:{" "}
                <input
                  defaultValue={item.quantity}
                  onBlur={(e) =>
                    dispatch({
                      type: "EDIT_BASKET_ITEM",
                      itemId: item.id,
                      quantity: Number(e.target.value),
                    })
                  }
                />
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_BASKET_ITEM", itemId: item.id })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <span>Basket is empty</span>
      )}
    </div>
  );
}

export default Basket;
