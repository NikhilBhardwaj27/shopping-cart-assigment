import React, { Fragment, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchBannerAsync } from "../../store/banners/banner.action";
import "./home.styles.scss";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import HomePreview from "../../components/home-preview/home-preview.component";
import Footer from "../../components/footer/footer.component";

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 50,
  height: 30,
  cursor: "pointer",
  background: "black",
  color: "white",
  border: "none",
  opacity: 0.5,
};

const Home = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.banner);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchBannerAsync());
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <>
      <div className="home-container">
        <Carousel
          showThumbs={false}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: 15 }}
              >
                Next
              </button>
            )
          }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: 15 }}
              >
                Prev
              </button>
            )
          }
        >
          {banners &&
            banners.map((banner) => {
              const { bannerImageAlt, bannerImageUrl, id } = banner;
              return (
                <div key={id}>
                  <img
                    alt={bannerImageAlt}
                    src={require(`../../assets${bannerImageUrl}`)}
                  />
                </div>
              );
            })}
        </Carousel>

        {categories &&
          categories.map((category) => (
            <HomePreview key={category.id} category={category} />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
