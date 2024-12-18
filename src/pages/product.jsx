import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const ProductList = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const products = [
      { id: 1, name: "Классический костюм", price: "25,000 KGS", image: `https://stockmann.ru/istk/ifkAPeFSF5PvNWDQ0551-1qsDoKeKhA-_iUONwm_XHo/rs:fill:747::1/g:no/bG9jYWw6Ly8vdXBsb2FkLy9jbXMvc3RhdGljL2Zhc2hpb24tYmxvZy9hcnRpY2xlLzYzZTllZDA3NDI4MzBkNDA2ZDA1MWM1NC9ibG9jay82M2U5ZjMyOWU4YWVhODg0N2IwZWFhZjYvRFVHTGU1bVkycnFHQ3NIM2R1ZVJabk4zVlFoU0hGNDVPSkxJQUZpTi5qcGc.jpg` },
      { id: 2, name: "Футболка Basic", price: "800 KGS", image:`https://shop.vogue.com/cdn/shop/files/Vogue_T-Shirt_black_1.png?v=1686347297&width=800`},
      { id: 3, name: "Джинсы Slim Fit", price: "3,500 KGS", image: `https://cdn01.sela.ru/wa-data/public/shop/products/92/47/134792/images/662776/662776.932x1242.jpg` },
      { id: 4, name: "Спортивный костюм", price: "6,000 KGS", image: `https://inter-sport.s3.amazonaws.com/products/521043/black_01/521043-1_resized_400X400.png` },
      { id: 5, name: "Куртка-пуховик", price: "12,000 KGS", image: `data:image/jpeg;base64,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` },
      { id: 6, name: "Кожаная куртка", price: "15,000 KGS", image: `https://st13.styapokupayu.ru/images/product/012/744/554_original.jpg` },
      { id: 7, name: "Худи Oversized", price: "2,000 KGS", image: `https://vidak.me/images/product/main/big/z69danvJ4bTfGNkh.jpg` },
      { id: 8, name: "Спортивная обувь", price: "7,500 KGS", image:`https://meest-shop.com/imgproxy/insecure/rs:fill:600:600/g:sm/aHR0cDovL2d3LmFsaWNkbi5jb20vYmFvL3VwbG9hZGVkL2kzLzIyNzE3MjI0MzgvTzFDTjAxYVVUZTRvMVRzZVhnajF4eUhfISEwLWl0ZW1fcGljLmpwZ182MDB4NjAwcTkwLmpwZw==.jpg` },
      { id: 9, name: "Классическая рубашка", price: "1,500 KGS", image: `https://usmall.ru/image/000/00/00/47fdc506eb5074e5e15d8c785be48acb.jpeg` },
      { id: 10, name: "Трикотажный свитер", price: "3,000 KGS", image:`https://tvoe.ru/img/2ld61n3/product/754/1005/8/4660303146643.jpg` },
      { id: 11, name: "Кепка", price: "500 KGS", image: `https://amazingred.ru/upload/resize_cache/iblock/ab3/500_500_1/15zh16ssik7c5ikrqk95fryhg7sl6k9h.jpg` },
      { id: 12, name: "Шорты", price: "1,200 KGS", image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZJzaV8uUdOFBkbuNWDc5QBdUnNzYYRKDnw&s` },
      { id: 13, name: "Поло", price: "1,800 KGS", image: `https://arfashion.ru/upload/resize_cache/iblock/41f/400_600_1/aogp9dstbi735yeahzejbq1djh3cb28h.jpg` },
      { id: 14, name: "Шерстяное пальто", price: "18,000 KGS", image: `https://keyman.by/image/cache/catalog/Catalog/Misha_Beatles/September%2024/keym-1168-780x1201.jpg` },
      { id: 15, name: "Рубашка в клетку", price: "2,200 KGS", image: `https://media.ultra-shop.com/images/a1/cc/b4ceff996a03850a7b706483a922.jpg` },
      { id: 16, name: "Шапка", price: "400 KGS", image: `https://unaffected.ru/wp-content/uploads/2020/10/01-839x839.jpg` },
      { id: 17, name: "Классические брюки", price: "3,800 KGS", image: `https://yarmich.store/image/cache/catalog/image/cache/catalog/image1c/klasichni-cholovichi-bryuki-chorni_id762/8ae45ad6-48e4-11ef-ab8e-bc2411eca16f-850x1214.webp` },
      { id: 18, name: "Джемпер", price: "2,500 KGS", image: `https://azbukamoda.ru/wp-content/uploads/2023/08/63f4fcbc-ce21-11ed-80f2-0c9d9264b88f_4f55aabe-a63e-11ee-80f7-0c9d9264b88f-600x976.jpg`},
      { id: 19, name: "Бомбер", price: "10,000 KGS", image: `https://images.prom.ua/5401162265_w600_h600_5401162265.jpg` },
      { id: 20, name: "Рюкзак", price: "4,000 KGS", image:`https://ralf.ru/upload/resize_cache/iblock/8c4/1500_1500_1/8c4a126a5a8793d76261375984fee4c0.jpg` },
      { id: 21, name: "Футболка с принтом", price: "1,000 KGS", image:`https://averi.ru/wa-data/public/shop/products/25/50/5025/images/18223/18223.1200x0.jpg` },
      { id: 22, name: "Пуховый жилет", price: "8,000 KGS", image:`https://fromjapan.kg/uploads/catalog/products/full/1676973890_07547700.jpg` },
      { id: 23, name: "Сандалии", price: "1,500 KGS", image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvZnIlt7NFFLgfeWvkVXLTw_SXBHYvFjACw&s` },
      { id: 24, name: "Кроссовки для бега", price: "9,000 KGS", image: `https://img5.lalafo.com/i/posters/api/f6/dc/63/krossovki-i-sportivnaa-obuv-id-39261187-801695118.jpeg` },
      { id: 25, name: "Парка", price: "14,000 KGS", image: `https://dresscode.kg/image/cache/catalog/парка/FCA6DCAF-7831-4EFD-A7D7-39C1E82E0B2F-600x764.jpeg`},
      { id: 26, name: "Шелковая рубашка", price: "3,800 KGS", image: `https://i.ebayimg.com/thumbs/images/g/ivIAAOSw5ptmKjng/s-l1200.jpg` },
      { id: 27, name: "Домашний халат", price: "5,000 KGS", image: `https://images.shafastatic.net/951763182` },
      { id: 28, name: "Костюм-тройка", price: "30,000 KGS", image: `https://smartcasuals.ru/wp-content/uploads/2022/06/IMG_1340.jpg` },
      { id: 29, name: "Поясная сумка", price: "1,200 KGS", image: `https://files.gifts.ru/reviewer/tb/51/12699.41_1_500.jpg` },
      { id: 30, name: "Зимние ботинки", price: "12,500 KGS", image: `https://img5.lalafo.com/i/posters/api/25/23/e5/a88992d25d0412e018a835c030.jpeg`},
      { id: 31, name: "Майка", price: "500 KGS", image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pziiBcM_q70QPU_ENcs4kYFQ1z6crs9mpg&s` },
      { id: 32, name: "Пальто из кашемира", price: "22,000 KGS", image: `https://basket-02.wbbasket.ru/vol169/part16936/16936253/images/big/1.webp`},
      { id: 33, name: "Лоферы", price: "6,500 KGS", image: `https://sun1-16.userapi.com/impg/lx7duT9zVWkgol4rlnWKUWxUGuvFJuElEPlg1w/gsmImU0Fygo.jpg?size=520x0&quality=95&sign=401aadf367c189632e6107d483b77be5` },
      { id: 34, name: "Термобелье", price: "2,500 KGS", image: `https://img5.lalafo.com/i/posters/original/05/b6/37/b16e0fb667660cceb9203cba3d.jpeg`},
      { id: 35, name: "Кроссовки унисекс", price: "7,000 KGS", image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBLDAgEg9dtHu5K6Spq-3egBWfzJ8LDisxQ&s` },
      { id: 36, name: "Спортивные шорты", price: "1,300 KGS", image: `https://ae04.alicdn.com/kf/S118e0a333cf649cfb60e0568be288b96V.jpg` },
      { id: 37, name: "Кожаный ремень", price: "900 KGS", image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xSN9IY8G4N3sLRAVODyiEEAcW2cryRxV8Q&s` },
      { id: 38, name: "Флисовая кофта", price: "2,700 KGS", image: `https://basket-12.wbbasket.ru/vol1900/part190010/190010895/images/big/1.webp` },
      { id: 39, name: "Бейсболка", price: "600 KGS", image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUP7V7bqjDUscTXHa__GzZtbH32DfyS4Qm9A&s` },
      { id: 40, name: "Ветровка", price: "4,500 KGS", image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7zj6t5vFuVcxdoL7wwZwVVT9ZiD1qNzuNQ&s` },
      { id: 41, name: "Спортивные носки", price: "250 KGS", image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yZI3pAo2pTDLibuAbgBVDbZ9Y8eTiWFvdQ&s` },
      { id: 42, name: "Шарф из шерсти", price: "1,800 KGS", image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSb_I2JQWaMz44LYtDe7EF3UlHfNX44RGv-A&s` },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} добавлен в корзину!`);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Список товаров</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />

            <Link to={`/product/${product.id}`} style={{textDecoration: "none", color: "white"}}>
            <h3>{product.name}</h3>
            </Link>
            
            <p>{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Корзина</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span>
                  {item.name} - {item.price}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/checkout", { state: { cart } })}
            style={{
              marginTop: "20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "15px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Перейти к оформлению заказа
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
