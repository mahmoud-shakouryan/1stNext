import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();

  const productId = router.query.productId;
  //send request to the backend to fetch the single product detail

  return <h1>ProductDetail {productId}</h1>;
}

export default ProductDetail;
