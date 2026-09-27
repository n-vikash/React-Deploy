import "../App.css";
import { map } from "lodash-es";
import { Link } from "react-router-dom";
import { fetchproduct } from "../features/product/ProductSlice";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../features/cart/CartSlice";
import Loading from "../components/Suspense";
const Shopping = () => {
  const dispatch = useDispatch();
  const { product, loading, err } = useSelector((state) => state.products);
  const cartCount = useSelector((state) => state.shoppingCart.cartCount);

  useEffect(() => {
    dispatch(fetchproduct());
  }, [dispatch]);

  return (
    <>
      <div className="page-navbar">
        <p className="cartCount">{cartCount}</p>
        <p>Shopping Page</p>
        <img
          src={`${import.meta.env.BASE_URL}/assets/shopping-cart-2.png`}
          alt=""
        />
      </div>
      {loading ? (
        <Loading />
      ) : err ? (
        <Err err={err} />
      ) : (
        <Card product={product} dispatch={dispatch} />
      )}
    </>
  );
};

const Card = ({ product, dispatch }) => {
  return (
    <div className="products-page">
      <ul className="products">
        {map(product, (ele) => (
          <div key={ele.id} className="details-card">
            <img src={ele.image} alt="image" className="img" />
            <div className="details-card2">
              <p className="title">{`${ele.title.slice(0, 10)}...`}</p>
              <section className="rating">
                <p className="rating">{ele.rating.rate}/5</p>
                <p>{ele.rating.count}+</p>
              </section>
              <section className="view-details">
                <li className="product-name" key={ele.id}>
                  <Link to={`/Shopping/${ele.id}`} className="link">
                    view
                  </Link>
                </li>
                <img
                  src={`${import.meta.env.BASE_URL}assets/add-to-cart.png`}
                  alt=""
                  className="add-cart"
                  onClick={() => dispatch(addToCart(ele))}
                />
              </section>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

const Err = ({ err }) => {
  return (
    <>
    <div className="error-page">

    <h1>
      something went wrong
    </h1>
    <h2 className="err">{err}..</h2>
    <h3>try after sometime....</h3>
    </div>
    </>
  );
};
export default Shopping;
