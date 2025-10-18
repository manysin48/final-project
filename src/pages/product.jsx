import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      // .get("https://fakestoreapi.com/products")
      .get(`${import.meta.env.VITE_API_BASE_URL}/products`)
      .then((res) => setProducts(res.data))
      .catch((error) => {
        console.log("Fetch data is failed", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center bg-gray-200 py-8">
      {products.map((product) => (
        <div className="flex">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
            <a href="#">
              <span
                className="text-3xl font-bold text-gray-900 dark:text-white"
                text="500€"
              ></span>
              <div>
                <img
                  className="p-8 rounded-t-lg mx-auto h-68 object-contain"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5
                  className="text-xl font-semibold tracking-tight text-gray-900 truncate w-64"
                  title={product.title}
                >
                  {product.title}
                </h5>
              </a>
              <p className="line-clamp-2">{product.description}</p>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(product.rating.rate)
                          ? "text-yellow-300"
                          : "text-gray-200"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {product.rating.rate}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-600">
                  ${product.price}
                </span>
                <Link to={`/product/${product.id}`}>
                  <button className="button bg-blue-600 hover:bg-blue-800 text-white px-3 py-1.5 rounded-md cursor-pointer">
                    <span className="label">Details</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
