import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const postData = async () => {
      const rawResponse = await fetch("http://localhost:5000/addToCart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Fresho Kiwi - Green, 3 pcs",
          imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
          description:
            "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
          price: 87,
          stock: 50,
          category: "5b6899953d1a866534f516e2",
          sku: "fnw-kiwi-3",
          id: "5b6c6a7f01a7c38429530883",
        }),
      });

    //  const rawResponse = await fetch('http://localhost:5000/products',{
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //  })
      
      const content = await rawResponse.json();
      console.log(content);
      
    };
    postData()
  }, []);

  return (
    <div>
      <h2>Hello world</h2>
    </div>
  );
};

export default App;
