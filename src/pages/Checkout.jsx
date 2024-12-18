import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();
  const [form, setForm] = useState({
    name: "",
    address: "",
    paymentMethod: "cash",
    cardDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Заказ отправлен:", form);
    alert("Ваш заказ успешно оформлен!");
  };

  return (
    <div>
      <h1>Оформление заказа</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            ФИО:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              required
              style={{ display: "block", margin: "10px 0" }}
            />
          </label>
        </div>
        <div>
          <label>
            Адрес:
            <textarea
              name="address"
              value={form.address}
              onChange={handleInputChange}
              required
              style={{ display: "block", margin: "10px 0", width: "300px", height: "100px" }}
            />
          </label>
        </div>
        <div>
          <label>
            Способ оплаты:
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleInputChange}
              style={{ display: "block", margin: "10px 0" }}
            >
              <option value="cash">Наличные</option>
              <option value="card">Картой</option>
            </select>
          </label>
        </div>
        {form.paymentMethod === "card" && (
          <div>
            <label>
              Данные карты:
              <input
                type="text"
                name="cardDetails"
                value={form.cardDetails}
                onChange={handleInputChange}
                required
                style={{ display: "block", margin: "10px 0" }}
              />
            </label>
          </div>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Оформить заказ
        </button>
      </form>
      <h2>Ваш заказ:</h2>
      <ul>
        {state?.cart?.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
