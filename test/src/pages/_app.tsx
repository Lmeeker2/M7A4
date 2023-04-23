import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
      </nav>
      <Component {...pageProps} />
    </div>
  );
}