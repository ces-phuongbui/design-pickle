import client from "~/lib/sdk";

export async function getGlobalPageData(): Promise<any> {
  const globalPage = await client.single("/global").find({
    populate: {
      navBar: {
        populate: {
          navItems: {
            populate: {
              menuItems: {
                populate: {
                  items: {
                    populate: "*",
                  },
                },
              },
            },
          },
          logo: true,
          cta: true,
        },
      },
      footer: {
        populate: {
          footerItems: {
            populate: {
              items: {
                populate: "*",
              },
            },
          },
          socialLinks: true,
          legalLinks: true,
        },
      },
    },
  });
  return globalPage;
}

export async function getGraphicPageData(): Promise<any> {
  const graphicPage = await client.single("/graphic-design").find({
    populate: {
      blocks: {
        on: {
          "section.introduce-header": {
            populate: "*",
          },
          "section.social-carousel": {
            populate: {
              bannerImage: { fields: ["url", "alternativeText", "name"] },
              logos: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText", "name"],
                  },
                },
              },
            },
          },
          "section.features": {
            populate: {
              cards: {
                populate: {
                  backgroundImage: {
                    fields: ["url", "alternativeText", "name"],
                  },
                },
              },
            },
          },
          "section.start": {
            populate: "*",
          },
        },
      },
    },
  });
  return graphicPage;
}
