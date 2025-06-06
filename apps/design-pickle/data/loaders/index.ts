import client from "~/lib/sdk";

export async function getGlobalPageData(): Promise<any> {
  const globalPage = await client.single("global").find({
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
