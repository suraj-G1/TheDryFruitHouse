import { useEffect, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductReviewModal from "../../../pages/ProductReviewModal";
import { getUserPurchasedProduct } from "../../../services/operations/profileAPI";
export default function PurchasedProduct() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [purchasedProduct, setPurchasedProduct] = useState(null);
  const [reviewModal, setReviewModal] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const res = await getUserPurchasedProduct(token); // Getting all the published and the drafted courses

        console.log("Purchased Product by User", res);
        setPurchasedProduct(res);
      } catch (error) {
        console.log("Could not fetch enrolled courses.");
      }
    })();
  }, []);

  return (
    <>
      <div className="text-3xl text-richblack-5 font-bold">
        Purchased Products
      </div>
      {!purchasedProduct ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !purchasedProduct.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
          You have not Purchased any Product yet.
          {/* TODO: Modify this Empty State */}
        </p>
      ) : (
        <div className="my-8 text-richblack-5">
          {/* Headings */}
          <div className="flex rounded-t-lg bg-richblack-500 ">
            <p className="w-[45%] px-5 py-3">Product Name</p>
          </div>
          {/* Product Names */}
          {purchasedProduct.map((product, i, arr) => (
            <div
              className={`flex items-center border border-richblack-700 shadow-2xl justify-between ${
                i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
              }`}
              key={i}
            >
              <div className="flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3">
                <img
                  src={product.image}
                  alt="Prduct Image"
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="flex max-w-xs flex-col gap-2">
                  <p className="font-bold ">{product.productName}</p>
                  <p className="text-xs text-richblack-25">
                    {product.description.length > 50
                      ? `${product.description.slice(0, 50)}...`
                      : product.description}
                  </p>
                </div>
              </div>
              <div className="pr-4">
                <Link to={"/dashboard/purchased-products/add-review"}>
                  <button
                    className="yellowButton"
                    onClick={() => setReviewModal((prev) => prev !== prev)}
                  >
                    Add Review
                  </button>
                </Link>
                {reviewModal && (
                  <ProductReviewModal
                    setReviewModal={setReviewModal}
                    product={product}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
