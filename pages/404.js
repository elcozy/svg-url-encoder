// pages/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <h1>
      404 - Page Not Found,
      <Link href="/">
        <a>← return to home</a>
      </Link>
    </h1>
  );
}
