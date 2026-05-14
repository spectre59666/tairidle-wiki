import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tairidle Wiki',
  description: 'Community wiki for Tairidle — the Pokémon idle game',
  lang: 'en-US',

  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'Tairidle Wiki',

    nav: [
      { text: 'Play', link: 'https://tairidle.com' },
      { text: 'Discord', link: 'https://discord.gg/tairidle' },
    ],

    sidebar: [
      {
        text: 'Game Mechanics',
        items: [
          { text: 'Home', link: '/' },
        ],
      },
      {
        text: 'Items',
        items: [
          { text: 'TM Locations', link: '/tms' },
          { text: 'Shop Items Locations', link: '/shop' },
        ],
      },
      {
        text: 'Pokémon',
        items: [
          { text: 'Pokémon List', link: '/evolution' },
        ],
      },
      {
        text: 'Meta',
        items: [
          { text: 'Contributing', link: '/contributing' },
        ],
      },
    ],

    search: { provider: 'local' },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/tairidle' },
    ],

    footer: {
      message: 'Tairidle is a fan-made Pokémon idle game.',
    },

    editLink: {
      pattern: 'https://github.com/Wapbamboogie/tairidle-wiki/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
})
