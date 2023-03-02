// pages/404.js -> https://localhost:3000/some-random-route/123

import Link from 'next/link';

const PageNotFound = () => {
  return (
    <div>
      <h2>Oops! Looks like this page does not exist!</h2>
      <Link href="/">Return back to Home page...</Link>
    </div>
  );
};

export default PageNotFound;