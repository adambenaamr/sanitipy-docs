import type { Metadata } from 'next';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import Image from 'next/image';
import Logo from '../../img/logo.png';

export const metadata: Metadata = {
  title: 'SanitiPy Docs',
  description: 'Created by Adam Ben-Aamr',
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={
      <Image src={Logo} alt="SanitiPy logo" height={150} width={150}></Image>
    }
    // ... Your additional navbar options
  />
);
const footer = <Footer>{new Date().getFullYear()} © Adam Ben-Aamr.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/adambenaamr/sanitipy-docs/tree/main"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
