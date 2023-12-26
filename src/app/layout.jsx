import './globals.scss';
import GlobalNav from './GlobalNav';

export const metadata = {
  title: 'Sciaxo',
  description: 'sciaxo.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Be+Vietnam+Pro:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </head>

      <body>
        <nav>
          <GlobalNav />
        </nav>
        <div className='bg'></div>
        {children}
      </body>
    </html>
  );
}
