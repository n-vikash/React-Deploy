import "../App.css";
import { useParams } from "react-router-dom";
// import { students } from "../data/data";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cartCount=useSelector((state)=>state.shoppingCart.cartCount)
  console.log(cartCount)
  const products=useSelector((state) => state.products.product);
  const product = products.find((item) => item.id === Number(id));
  const dispatch = useDispatch();
  if (!product) {
    return (
      <main className="products-details-page">
        <div className="product-not-found">
          <h1>product Not Found</h1>
          <p>No product exists with ID {id}.</p>
        </div>
      </main>
    );
  }
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
      <main className="product-details-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Products
        </button>

        <div className="product-details-container">
          <div className="product-image-section">
            <div className="product-image-box">
              <img
                src={product.image}
                alt={product.title}
                className="product-details-image"
              />
            </div>
          </div>

          <div className="product-information">
            <span className="product-category">{product.category}</span>

            <h1>{product.title}</h1>

            <div className="product-rating">
              <span className="stars">★</span>
              <strong>{product.rating.rate}</strong>
              <span className="review-count">
                ({product.rating.count} reviews)
              </span>
            </div>

            <div className="product-price">${product.price}</div>

            <p className="product-description">{product.description}</p>

            <div className="product-meta">
              <div className="meta-item">
                <span>Product ID</span>
                <strong>#{product.id}</strong>
              </div>

              <div className="meta-item">
                <span>Category</span>
                <strong>{product.category}</strong>
              </div>

              <div className="meta-item">
                <span>Rating</span>
                <strong>{product.rating.rate} / 5</strong>
              </div>

              <div className="meta-item">
                <span>Reviews</span>
                <strong>{product.rating.count}</strong>
              </div>
            </div>

            <button
              className="buy-button"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default StudentDetails;
