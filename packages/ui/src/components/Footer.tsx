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
    className="size-6"
    viewBox="0 0 30 30"
  >
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-6"
    viewBox="0 0 50 50"
  >
    <path d="M9 4C6.25 4 4 6.25 4 9v32c0 2.75 2.25 5 5 5h32c2.75 0 5-2.25 5-5V9c0-2.75-2.25-5-5-5H9zM14 12c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2zm-2 6v18h4V18h-4zm7 0v18h4v-9.6c0-2.3 1.6-3.4 3.7-3.4 2 0 2.8 1.2 2.8 3.2V36h4V25.4c0-4.5-2.6-6.6-6.1-6.6-3 0-4.3 1.7-5 2.8V18h-4z"></path>
  </svg>
);
