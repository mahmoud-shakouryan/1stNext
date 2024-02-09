import { Fragment } from "react";
import Link from "next/link";

function Products() {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href="/products/1">1</Link>
        </li>
        <li>
          <Link href="/products/2">2</Link>
        </li>
        <li>
          <Link href="/products/3">3</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default Products;
