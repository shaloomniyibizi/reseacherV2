import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p>Welcome to the home page</p>
      <Link href='/sign-in'>Get Started</Link>
    </div>
  );
}
