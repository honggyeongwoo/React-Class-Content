import React from "react";
import ProductFeed from "./component/ProductFeed";
//ProductPage.jsx

export default function ProductPage() {
  return (
    <div>
      <h2>오늘의 추천 상품</h2>

      <ProductFeed 
        path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAArFQQB_Vx4KM5o8j1Zi3YAzoVHcBK_GY11p71Cd7g&s=10"
        name = "아디다스 운동화"
        price = "69,000원"
      />
      <ProductFeed 
        path = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZvShZHlKiGqNb4qkKx42JBlVWCi6pvder4OUU92qnBvuMl4_RVOfSKW6c&s=10"
        name = "나이키 운동화"
        price = "79,000원"
      />
      <ProductFeed 
        path = "https://image2.lotteimall.com/goods/54/03/67/2922670354_1.jpg/dims/resizemc/550x550/optimize"
        name = "뉴발란스 운동화"
        price = "69,000원"
      />
      <ProductFeed 
        path = "https://gero.co.kr/shopimages/killer709/021001000157.jpg?1740562351"
        name = "아식스 운동화"
        price = "69,000원"
      />      

          </div>
  );
}