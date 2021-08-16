export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611a473cfc2c0ba9086c6557",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-dpmykewz",
                  apiId: "7e922f94-4e2a-4156-8820-dfda417dfb59",
                },
                {
                  buildHookId: "611a473d52615b9b0bd870d0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-nnzaha5n",
                  apiId: "86172907-b171-460f-b98a-8a1b25a5c8ff",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ezelohar/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-nnzaha5n.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
