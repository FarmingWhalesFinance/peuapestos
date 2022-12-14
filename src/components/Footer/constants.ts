import { t } from "@lingui/macro";
import "./Footer.css";
import twitterIcon from "img/ic_twitter.svg";
import discordIcon from "img/ic_discord.svg";
import telegramIcon from "img/ic_telegram.svg";
import githubIcon from "img/ic_github.svg";
import mediumIcon from "img/ic_medium.svg";

type Link = {
  text: string;
  link: string;
  external?: boolean;
  isAppLink?: boolean;
};

type SocialLink = {
  link: string;
  name: string;
  icon: string;
};

export const FOOTER_LINKS: { home: Link[]; app: Link[] } = {
  home: [
    { text: t`Terms and Conditions`, link: "/terms-and-conditions" },
    { text: t`Referral Terms`, link: "/referral-terms" },
    { text: t`Media Kit`, link: "https://gmxio.gitbook.io/gmx/media-kit", external: true },
    // { text: "Jobs", link: "/jobs", isAppLink: true },
  ],
  app: [
    { text: t`Website`, link: "https://www.tradefiswap.com/", external: true },
    // { text: "Jobs", link: "/jobs" },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  { link: "https://twitter.com/tradefi_swap", name: "Twitter", icon: twitterIcon },
  // { link: "https://medium.com/@gmx.io", name: "Medium", icon: mediumIcon },
  { link: "https://tradefi.gitbook.io/tradefi-the-future-of-trading/getting-started/what-is-tradefi", name: "Gitbook", icon: githubIcon },
  { link: "https://t.me/tradefichannel", name: "Telegram", icon: telegramIcon },
  // { link: "https://t.me/tradefichannel", name: "Telegram", icon: discordIcon },
  
];
