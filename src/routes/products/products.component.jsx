import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryDropDown from "../../components/categories-dropdown/categories-dropdown.component";
import CategoriesList from "../../components/categories-list/categories-list.component";
import Footer from "../../components/footer/footer.component";
import ProductsList from "../../components/products-list/products-list.component";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { fetchProductsAsync } from "../../store/products/products.action";
import "./products.styles.scss";

const Products = () => {
  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoriesCopy, setCategoriesCopy] = useState([]);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategoriesAsync());
    }
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    let result = [...categories];
    categories.map((category) => {
      category.isSelected = false;
    });
    setCategoriesCopy(result);
  }, [categories]);

  const selectCategoryHandler = (category) => {
    let shallowCopy = [...categoriesCopy];
    shallowCopy.map((categoryCopy) => {
      if (categoryCopy.id == category.id) {
        if (categoryCopy.isSelected == true) {
          categoryCopy.isSelected = false;
          setCategoriesCopy(shallowCopy);
          setFilteredProducts(products);
        } else {
          shallowCopy.map((categoryCopy) => (categoryCopy.isSelected = false));
          categoryCopy.isSelected = true;
          setCategoriesCopy(shallowCopy);
          let result = products.filter(
            (product) => category.id === product.category
          );
          setFilteredProducts(result);
        }
      }
    });
  };

  return (
    <>
      <div className="mobile-dropdown">
        <CategoryDropDown
          categories={categoriesCopy}
          selectCategory={selectCategoryHandler}
        />
      </div>
      <div className="products-container">
        <div className="categories-list">
          {categoriesCopy &&
            categoriesCopy.map((category) => (
              <CategoriesList
                key={category.id}
                category={category}
                selectCategory={selectCategoryHandler}
              />
            ))}
        </div>
        {filteredProducts.length > 0 ? (
          <div className="products-list">
            {filteredProducts.map((product) => (
              <ProductsList key={product.id} product={product} />
            ))}
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Products;
