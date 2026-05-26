import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://alkhatir.github.io/",
    title: "Pierre Hanna",
    description: "Personal website, projects, and notes by Pierre Hanna.",
    author: "Pierre Hanna",
    profile: "https://github.com/Alkhatir",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Vienna",
    dir: "auto",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/Alkhatir/Alkhatir.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/Alkhatir" },
    { name: "x",        url: "https://x.com/Peet_Alkhatir" },
    { name: "linkedin", url: "https://www.linkedin.com/in/peer-hanna/" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
