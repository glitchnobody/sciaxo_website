import { Be_Vietnam_Pro, Atkinson_Hyperlegible } from 'next/font/google';
import './globals.scss';
import GlobalNav from './GlobalNav';

export const metadata = {
  title: 'Sciaxo',
  description: 'sciaxo.com',
};

const BeVietnam = Be_Vietnam_Pro({
  weight: ['400', '500'],
  subsets: ['latin'],
  style: 'normal',
  variable: '--heading',
  display: 'swap',
});

const Atkinson = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: 'normal',
  variable: '--paragraph',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html className={`${BeVietnam.variable} ${Atkinson.variable} `} lang='en'>
      <body>
        <nav>
          <GlobalNav />
        </nav>
        {children}
      </body>
    </html>
  );
}
