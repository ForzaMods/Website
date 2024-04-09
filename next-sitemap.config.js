/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://forzamods.dev',
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, '/tools/aio'),
    await config.transform(config, '/tools/mod-manager'),
    await config.transform(config, '/tools/fov-menu'),
    await config.transform(config, '/tools/car-table'),
  ],
}