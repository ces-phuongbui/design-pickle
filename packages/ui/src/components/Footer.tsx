import Link from "next/link";

export interface FooterProps {
  id: number;
  socialLinks: {
    id: number;
    text: string;
    href: string;
    isExternal: boolean;
    isPrimary: boolean;
  }[];
  legalLinks: {
    id: number;
    text: string;
    href: string;
    isExternal: boolean;
    isPrimary: boolean;
  }[];
  footerItems: {
    id: number;
    title: string;
    items: {
      id: number;
      title: string;
      link: {
        href: string;
        id: number;
        isExternal: boolean;
        isPrimary: boolean;
      };
    }[];
  }[];
}

export const Footer = ({ footer }: { footer: FooterProps }) => {
  const { socialLinks = [], legalLinks = [], footerItems = [] } = footer || {};

  return (
    <footer id="footer">
      <hr className="mx-auto w-11/12" />

      <section className="container grid grid-cols-5 gap-y-8 gap-x-12 py-20">
        {Array.isArray(footerItems) &&
          footerItems.map((footerItem) => (
            <div key={footerItem.id} className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">{footerItem.title}</h3>
              {footerItem.items.map((item) => (
                <Link
                  key={item.id}
                  href={item.link.href}
                  className="opacity-60 hover:opacity-100"
                  target={item.link.isExternal ? "_blank" : "_self"}
                  rel={item.link.isExternal ? "noopener noreferrer" : ""}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
      </section>

      <section className="container flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="flex items-center gap-5">
          {Array.isArray(legalLinks) &&
            legalLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-muted-foreground hover:text-foreground"
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : ""}
              >
                {link.text}
              </Link>
            ))}
        </div>

        <div className="flex items-center gap-5">
          {Array.isArray(socialLinks) &&
            socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                {renderIcon(link.text.toLowerCase())}
              </Link>
            ))}
        </div>
      </section>
    </footer>
  );
};

function renderIcon(text: string) {
  switch (text) {
    case "facebook":
      return <FacebookIcon />;
    case "linkedin":
      return <LinkedinIcon />;
    default:
      return null;
  }
}

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-6 fill-gray-700 dark:fill-white"
    viewBox="0 0 30 30"
  >
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-6 fill-gray-700 dark:fill-white"
    viewBox="0 0 30 30"
  >
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
  </svg>
);
