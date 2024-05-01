import { getClient } from '@/services/client';
import { getSettings } from '@/services/queries';
import { FooterLink } from '~/devlink';
import { Footer } from '../../devlink/Footer';
import "../../devlink/global.css";

export const metadata = {
  title: {
    template: '%s | Vitrinekast Boilerplate',
    default: 'Vitrinekast Boilerplate',
  },
  canonical: "TODO",
  generator: 'Next.js',
  applicationName: 'TODO',
  keywords: ['TODO'],
  authors: "TODO",
  manifest: './manifest.json',
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  openGraph: {
    images: ['@/ogimage.png'],
    type: "website",
    locale: "TODO",
    url: "TODO",
    title: {
      template: '%s | Vitrinekast Boilerplate',
      default: 'Vitrinekast Boilerplate',
    },
  }
}




export default async function RootLayout({ children }) {
  const { data } = await getClient().query({ query: getSettings });
  const settings = data.navigationCollection.items[0];

  return (
    <html lang="en">
      <body>
        {children}
        <Footer
          description={settings.aboutText}
          // generalInquiries={settings.address.json}
          // address={settings.getInTouchInfo.json}
          menuSlot={settings.footerMenuCollection.items.map((link, index) => {
            return <FooterLink key={index} label={link.title} />
          })}
          legalMenuSlot={
            settings.footerLegalMenuCollection.items.map((link, index) => {
              return <FooterLink key={index} label={link.title}>
              </FooterLink>
            })
          }
        />
      </body>

    </html>
  );
}
