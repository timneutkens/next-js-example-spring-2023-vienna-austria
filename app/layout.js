import './globals.scss';
import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import { CookieBanner } from './CookieBanner';
import style from './layout.module.scss';

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: { default: 'Next Example | UpLeveled', template: '%s | UpLeveled' },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={robotoMono.className}>
      <body style={{ backgroundColor: 'rgb(0, 31, 57)' }}>
        <CookieBanner />
        <nav className={style.navigator}>
          <Link href="/">home</Link> <Link href="/animals">animals</Link>{' '}
          <Link href="/fruits">fruits</Link>
          <Link href="/animals-admin">admin</Link>
          <Link href="/animals/paginated">paginated</Link>
          {Math.floor(Math.random() * 10)}
        </nav>
        {children}
      </body>
    </html>
  );
}
