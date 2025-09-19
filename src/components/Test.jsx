import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function ProductPagination() {
  const products = [
    { id: 1, img: "/5.png", title: "Discover 2step-Thru", brand: "Spacialized", oldPrice: "$1000", price: "$899" },
    { id: 2, img: "/6.png", title: "Folding Electric Bike", brand: "Orbea", oldPrice: "$1500", price: "$1270" },
    { id: 3, img: "/7.png", title: "Parkwood Electric Bike", brand: "Cannondale", oldPrice: "$1000", price: "$980" },
    { id: 4, img: "/8.png", title: "Special Roar Bike CE", brand: "Cannondale", price: "$675" },
    { id: 5, img: "/9.png", title: "Vega CE Low-Step", brand: "Cannondale", price: "$805" },
    { id: 6, img: "/10.png", title: "Hybrid Electric Bike", brand: "Bianchi", price: "$999" },
    { id: 7, img: "/11.png", title: "Pro City Rider", brand: "Trek", price: "$1200" },
    { id: 8, img: "/12.png", title: "Urban Fold X", brand: "Orbea", price: "$950" },
    { id: 9, img: "/13.png", title: "All-Mountain Pro", brand: "Specialized", price: "$1400" },
    { id: 10, img: "/14.png", title: "Cruiser Step-Thru", brand: "Giant", price: "$890" },
    { id: 11, img: "/15.png", title: "E-Speedster 500", brand: "Scott", price: "$1100" },
    { id: 12, img: "/16.png", title: "Trail Blazer", brand: "Cannondale", price: "$1250" },
  ];

  const [page, setPage] = useState(0); // 0 = first 6, 1 = next 6
  const perPage = 6;
  const totalPages = Math.ceil(products.length / perPage);

  const start = page * perPage;
  const visible = products.slice(start, start + perPage);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {visible.map((p) => (
          <div
            key={p.id}
            className="Card bg-zinc-900 w-[350px] h-[450px] p-6 rounded-tr-[180px] text-white hover:text-orange-500 hover:bg-zinc-800 transition-colors duration-200"
          >
            <div className="w-[365px] h-[280px] md:w-[400px] md:h-[280px] mx-auto">
              <img className="w-full h-[95%] object-contain" src={p.img} alt={p.title} />
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-semibold">{p.title}</h2>
              <span className="text-gray-500">{p.brand}</span>
              <div className="flex space-x-6 items-center">
                <span className="text-orange-500">
                  {p.oldPrice && <del className="text-xs mr-1">{p.oldPrice}</del>}
                  {p.price}
                </span>
                <button className="bg-zinc-700 px-6 py-2 rounded-full text-white hover:bg-orange-500 flex items-center gap-2">
                  <MdOutlineShoppingCart />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-10 h-10 rounded-full font-semibold ${
              page === i ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
