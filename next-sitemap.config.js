/** @type {import('next-sitemap').IConfig} */

const siteURL = "https://infruit.vercel.app/";

const nextSitemapConfig = {
    siteUrl: "https://infruit.vercel.app/",
    changefreq: "daily",
    exclude: ["/404"],
    priority: 0.7,
    generateRobotsTxt: true,
    sitemapSize: 1000,
    robotsTxtOptions: {
        additionalSitemaps: [
            `${siteURL}server-sitemap.xml`,
            `${siteURL}sitemap-0.xml`
        ], policies: [
            { userAgent: "*", allow: "/" },
        ],

    },
};

module.exports = nextSitemapConfig;