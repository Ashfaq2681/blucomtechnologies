import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { channelVideoCards, primarySocialLinks } from "../../../data/socialChannels";

const featuredSocialVideos = [
  {
    ...channelVideoCards[1],
    Icon: FaTiktok,
    iconClassName: "h-14 w-14 text-white opacity-90 drop-shadow-lg transition-transform group-hover:scale-110",
    label: "@blucommw",
  },
  {
    ...channelVideoCards[0],
    Icon: FaYoutube,
    iconClassName: "h-14 w-14 text-red-600 opacity-90 drop-shadow-lg transition-transform group-hover:scale-110",
    label: "@bctvm",
  },
  {
    title: "Blucomtechnologies reels",
    description: "Reels and short-form social content from Blucomtechnologies.",
    externalUrl: primarySocialLinks.instagram,
    Icon: FaInstagram,
    iconClassName: "h-10 w-10 text-white opacity-90 transition-transform group-hover:scale-110",
    label: "@blucomtechnologies",
  },
];

const socialIconLinks = [
  { label: "Instagram", href: primarySocialLinks.instagram, Icon: FaInstagram, className: "hover:text-pink-500" },
  { label: "TikTok", href: primarySocialLinks.tiktok, Icon: FaTiktok, className: "hover:text-cyan-400" },
  { label: "YouTube", href: primarySocialLinks.youtube, Icon: FaYoutube, className: "hover:text-red-600" },
  { label: "LinkedIn", href: primarySocialLinks.linkedin, Icon: FaLinkedin, className: "hover:text-blue-600" },
  { label: "Pinterest", href: primarySocialLinks.pinterest, Icon: FaPinterest, className: "hover:text-red-500" },
  { label: "X", href: primarySocialLinks.x, Icon: FaXTwitter, className: "hover:text-zinc-400" },
  { label: "Facebook", href: primarySocialLinks.facebook, Icon: FaFacebook, className: "hover:text-blue-500" },
];

const SocialFollow = () => (
  <section className="mt-12 w-full rounded-t-[40px] bg-black px-4 pb-10 pt-20 text-white sm:px-6">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-12 text-xl font-bold tracking-tight">
        Learn more from Blucomtechnologies on social
      </h2>

      <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredSocialVideos.map(({ title, description, externalUrl, Icon, iconClassName, label }) => (
          <a
            key={title}
            href={externalUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl bg-zinc-800"
            aria-label={`Open ${title}`}
          >
            <div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-black/40" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className={Icon === FaInstagram ? "rounded-lg border-2 border-white p-2" : ""}>
                <Icon className={iconClassName} />
              </div>
            </div>
            <div className="absolute bottom-6 left-0 right-0 z-20 px-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white">
                {label}
              </p>
              <p className="mt-2 line-clamp-2 text-xs font-medium leading-5 text-zinc-200">
                {description}
              </p>
            </div>
          </a>
        ))}

        <a
          href={channelVideoCards[2].externalUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col justify-center gap-2 rounded-3xl bg-gradient-to-br from-purple-200 via-blue-200 to-emerald-200 p-6 transition hover:brightness-95"
        >
          <span className="self-start rounded bg-purple-100 px-4 py-1.5 text-[10px] font-bold uppercase text-purple-900">
            AdagePK
          </span>
          <span className="self-start rounded bg-green-100 px-4 py-1.5 text-[10px] font-bold uppercase text-green-900">
            videos
          </span>
          <span className="self-start rounded bg-purple-100 px-4 py-1.5 text-[10px] font-bold uppercase text-purple-900">
            and media
          </span>
          <span className="self-start rounded bg-green-100 px-4 py-1.5 text-[10px] font-bold uppercase text-green-900">
            updates
          </span>
        </a>
      </div>

      <div className="flex flex-col items-center justify-end gap-8 border-t border-zinc-800 pt-10 md:flex-row">
        <span className="text-sm font-bold tracking-wide text-zinc-400">
          Follow us on social:
        </span>
        <div className="flex items-center gap-6 text-xl">
          {socialIconLinks.map(({ label, href, Icon, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`cursor-pointer transition-colors ${className}`}
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SocialFollow;
