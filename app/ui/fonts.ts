import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';


// optimzes font and remove exteral network requests for improved privacy and perforance
// built-in self hosting for fonts - optimally load web fonts with no layout shifts.

export const inter = Inter({
  subsets: ['latin'], });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

// why optimize images?
// to improve performance and user experience by reducing load times and bandwidth usage
