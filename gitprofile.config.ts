// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kandelucky', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['kandelucky/Elevator', 'kandelucky/Timer', 'kandelucky/Adaptive-Level-Manager-wiki', 'kandelucky/widget_test'],
      },
    },
    currentProjects: {
      header: 'Current Projects',
      projects: [
        {
          title: 'CTk Visual Builder',
          description: 'Desktop visual designer for CustomTkinter — drag and drop widgets onto a canvas, edit properties live, export as runnable Python. Qt Designer-style workflow with multi-document canvas, full undo/redo, and WYSIWYG layout presets.',
          imageUrl: '/portfolio/projects/ctk_visual_builder/hero.png',
          link: '/portfolio/projects/ctk_visual_builder/',
        },
        {
          title: 'MathPrint',
          description: 'Math learning app for children — generates printable worksheets dynamically. Custom math engine with configurable operations, difficulty levels, missing operands, and comparison exercises. Built for parents and educators.',
          imageUrl: '/portfolio/projects/mathprint/icon.png',
          link: '/portfolio/projects/mathprint/',
        },
        {
          title: 'Codyssey',
          description: 'Interactive educational puzzle system — children learn geography, language, and logical thinking through cipher-based puzzles. Printable cards + web app. Scalable across countries and languages.',
          imageUrl: '/portfolio/projects/codyssey/hero.png',
          link: '/portfolio/projects/codyssey/',
        },
      ],
    },
    external: {
      header: 'Published Apps (Google Play)',
      projects: [
        {
          title: 'Wheel of Fortune (Geo)',
          description: 'Georgian Wheel of Fortune word game',
          imageUrl: 'https://image.winudf.com/v2/image/Y29tLmthbmRlbHVja3kuYmVkdWthX2ljb25fMTUwOTQ3NzM0NF8wNzI/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/wheel-of-fortune-geo/com.kandelucky.beduka',
        },
        {
          title: 'Hangman - Rustaveli GEO',
          description: 'Hangman game based on Rustaveli\'s poetry',
          imageUrl: 'https://image.winudf.com/v2/image/Y29tLmthbmRlbHVja3kucnVzdGF2ZWxpX2ljb25fMTUxOTIyNzg0OF8wNTE/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/hangman-rustaveli-geo/com.kandelucky.rustaveli',
        },
        {
          title: 'Hangman - Proverbs (ჩამოხრჩობა)',
          description: 'Georgian proverbs hangman game',
          imageUrl: 'https://image.winudf.com/v2/image/Y29tLmthbmRlbHVja3kuYW5kYXplYmlfaWNvbl8xNTIxMDc5ODcxXzA2Mg/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/hangman-proverbs-%E1%83%A9%E1%83%90%E1%83%9B%E1%83%9D%E1%83%AE%E1%83%A0%E1%83%A9%E1%83%9D%E1%83%91%E1%83%90/com.kandelucky.andazebi',
        },
        {
          title: 'Guess the GEO Movies!',
          description: 'Guess Georgian movies from screenshots',
          imageUrl: 'https://image.winudf.com/v2/image1/Y29tLmthbmRlbHVja3kua2FkcmlfaWNvbl8xNTYyNjA4NDA5XzA1MQ/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/guess-the-geo-movies-%E1%83%92%E1%83%90%E1%83%9B%E1%83%9D%E1%83%98%E1%83%AA%E1%83%90/com.kandelucky.kadri',
        },
        {
          title: 'კენწერო',
          description: 'Georgian punctuation learning app',
          imageUrl: 'https://image.winudf.com/v2/image1/Y29tLmthbmRlbHVja3kua2Vud2Vyb19pY29uXzE1NTAyNjA3NzJfMDAy/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/%E1%83%99%E1%83%94%E1%83%9C%E1%83%AC%E1%83%94%E1%83%A0%E1%83%9D/com.kandelucky.kenwero',
        },
        {
          title: 'გვირილა',
          description: 'Georgian educational game',
          imageUrl: 'https://image.winudf.com/v2/image/Y29tLmthbmRlbHVja3kuZ3ZpcmlsYV9pY29uXzE1MTAwODA4MDJfMDA1/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/%E1%83%92%E1%83%95%E1%83%98%E1%83%A0%E1%83%98%E1%83%9A%E1%83%90/com.kandelucky.gvirila',
        },
        {
          title: 'გამოიცანი ფილმი 2',
          description: 'Guess the Georgian Movie — Part 2',
          imageUrl: 'https://image.winudf.com/v2/image1/Y29tLkthbmRlbHVja3lEZXYuR3Vlc3NNb3ZpZXNHZW9faWNvbl8xNTg1NTIzMzE0XzAzMw/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/%E1%83%92%E1%83%90%E1%83%9B%E1%83%9D%E1%83%98%E1%83%AA%E1%83%90%E1%83%9C%E1%83%98-%E1%83%A4%E1%83%98%E1%83%9A%E1%83%9B%E1%83%98-2/com.KandeluckyDev.GuessMoviesGeo',
        },
        {
          title: 'Dyktando po Polsku',
          description: 'Polish spelling & dictation practice app',
          imageUrl: 'https://image.winudf.com/v2/image1/Y29tLkthbmRlbHVja3kuQ2hlY2tXcml0aW5nX2ljb25fMTYwNzM3MjQ4OF8wMTg/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/dyktando-po-polsku/com.Kandelucky.CheckWriting',
        },
        {
          title: 'To be EXERCISES',
          description: 'English grammar exercises — verb "to be"',
          imageUrl: 'https://image.winudf.com/v2/image1/Y29tLkthbmRlbHVja3lEZXYuVG9iZV9pY29uXzE1OTc1Nzg1MTNfMDA3/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/to-be-exercises/com.KandeluckyDev.Tobe',
        },
        {
          title: 'Sunny\'s Touch',
          description: 'Fun touch game for kids',
          imageUrl: 'https://image.winudf.com/v2/image/Y29tLmthbmRlbHVja3lkZXYuc3VubnlzdG91Y2hfaWNvbl8xNTM3Nzc1NDg1XzA2MA/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/sunny-s-touch/com.kandeluckydev.sunnystouch',
        },
        {
          title: 'Magic APPi',
          description: 'Magic tricks app',
          imageUrl: 'https://image.winudf.com/v2/image1/Y29tLkthbmRlbHVja3lEZXYuTWFnaWNBUFBpX2ljb25fMTYzODEwNTEwMV8wMTQ/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/magic-appi/com.KandeluckyDev.MagicAPPi',
        },
        {
          title: 'Simple Interval Timer',
          description: 'Minimalist interval timer for workouts',
          imageUrl: 'https://image.winudf.com/v2/image1/Y29tLkthbmRlbHVja3kuRGV2LlNpbXBsZUludGVydmFsVGltZXJfaWNvbl8xNjQ0MTUyMjE5XzAyNA/icon.webp?w=156&fakeurl=1&type=.webp',
          link: 'https://apkpure.net/simple-interval-timer/com.Kandelucky.Dev.SimpleIntervalTimer',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Lasha Kandelaki',
    description: 'Indie Mobile Developer & Manual QA Tester — 8+ years with Unity3D, 10+ published apps on Google Play, crowdsource testing on uTest & Testbirds, based in Warsaw, Poland',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://assetstore.unity.com/packages/tools/gui/adaptive-level-manager-307019',
    phone: '',
    email: 'kandelakilasha@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Unity3D',
    'C#',
    'Android',
    'Game Design',
    'UX/UI',
    'Manual Testing',
    'Bug Reporting',
    'Chrome DevTools',
    'Git/GitHub',
    'Photoshop',
    'Inkscape',
    'Audacity',
    'Product Photography',
    'AI / Prompt Engineering',
    'Claude Code',
  ],
  experiences: [
    {
      company: 'Testbirds, uTest',
      position: 'Manual QA Tester',
      from: 'March 2026',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Indie Mobile Developer',
      position: 'Founder & Developer',
      from: 'January 2017',
      to: 'Present',
      companyLink: 'https://github.com/kandelucky',
    },
    {
      company: 'SQRT3 Games',
      position: 'Game Designer',
      from: 'January 2022',
      to: 'March 2022',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev',
    username: '', // to hide blog section, keep it empty
    limit: 2,
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
