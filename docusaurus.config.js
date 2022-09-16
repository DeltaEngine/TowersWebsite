// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Towers',
  url: 'https://towersrts.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DeltaEngine',
  projectName: 'TowersWebsite',

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
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/DeltaEngine/TowersWebsite/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Our News',
            items: [
              {
                label: 'News',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/Towersrts-102022492160942',
              },
              {
                label: 'Twitch',
                to: 'https://www.twitch.tv/towersdev',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/RtsTowers',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Steam',
                to: 'https://store.steampowered.com/app/1673670/TowersRTS/',
              },
			  {
                label: 'Privacy Policy',
                to: 'https://towersgame.net/PrivacyPolicy',
              },
              {
                label: 'Imprint',
                to: 'https://deltaengine.net/about/imprint',
              },
              {
                label: 'Support',
                to: 'mailto:support@towersgame.net',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://deltaengine.net">Delta Engine</a>`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
