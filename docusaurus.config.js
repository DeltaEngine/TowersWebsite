// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Towers RTS',
  tagline: 'Free Real Time Strategy (RTS) game',
  url: 'https://towersgame.net/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Towers RTS',
        logo: {
          alt: 'Towers Logo',
          src: 'img/TowersLogo.png',
        },
        items: [
              {to: '/blog', label: 'News', position: 'left'},
          {
            href: 'https://store.steampowered.com/app/1673670/TowersRTS/',
            label: 'Steam',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'News',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Towersrts-102022492160942',
              },
              {
                label: 'Twitch',
                href: 'https://www.twitch.tv/towersdev',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/RtsTowers',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Steam',
                href: 'https://store.steampowered.com/app/1673670/TowersRTS/',
              },
			  {
                label: 'Privacy Policy',
                href: 'https://towersgame.net/PrivacyPolicy',
              },
              {
                label: 'Imprint',
                href: 'https://deltaengine.net/about/imprint',
              },
              {
                label: 'Support',
                href: 'mailto:support@towersgame.net',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Delta Engine`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
