import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialFollow = () => (
  <section className="mt-12 w-full rounded-t-[40px] bg-black px-4 pb-10 pt-20 text-white sm:px-6">
    <div className="mx-auto max-w-7xl">
      <h2 className="mb-12 text-xl font-bold tracking-tight">
        Learn more from Blucomtechnologies on social
      </h2>

      <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl bg-zinc-800">
          <div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-black/40" />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <FaTiktok className="h-14 w-14 text-white opacity-90 drop-shadow-lg transition-transform group-hover:scale-110" />
          </div>
          <div className="absolute bottom-6 left-0 right-0 z-20 px-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white">
              15 Years
            </p>
          </div>
        </div>

        <div className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl bg-zinc-700">
          <div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-black/40" />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <FaYoutube className="h-14 w-14 text-red-600 opacity-90 drop-shadow-lg transition-transform group-hover:scale-110" />
          </div>
          <div className="absolute bottom-6 left-0 right-0 z-20 px-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white">
              Brand or campaign right
            </p>
          </div>
        </div>

        <div className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl bg-zinc-800">
          <div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-black/40" />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="rounded-lg border-2 border-white p-2">
              <FaInstagram className="h-10 w-10 text-white opacity-90 transition-transform group-hover:scale-110" />
            </div>
          </div>
          <div className="absolute bottom-6 left-0 right-0 z-20 px-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white">
              I found our dream influencers
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-2 rounded-3xl bg-gradient-to-br from-purple-200 via-blue-200 to-emerald-200 p-6">
          <span className="self-start rounded bg-purple-100 px-4 py-1.5 text-[10px] font-bold uppercase text-purple-900">
            Your 5-step
          </span>
          <span className="self-start rounded bg-green-100 px-4 py-1.5 text-[10px] font-bold uppercase text-green-900">
            formula for
          </span>
          <span className="self-start rounded bg-purple-100 px-4 py-1.5 text-[10px] font-bold uppercase text-purple-900">
            securing social
          </span>
          <span className="self-start rounded bg-green-100 px-4 py-1.5 text-[10px] font-bold uppercase text-green-900">
            resource in 2026
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-end gap-8 border-t border-zinc-800 pt-10 md:flex-row">
        <span className="text-sm font-bold tracking-wide text-zinc-400">
          Follow us on social:
        </span>
        <div className="flex items-center gap-6 text-xl">
          <FaInstagram className="cursor-pointer transition-colors hover:text-pink-500" />
          <FaTiktok className="cursor-pointer transition-colors hover:text-cyan-400" />
          <FaYoutube className="cursor-pointer transition-colors hover:text-red-600" />
          <FaLinkedin className="cursor-pointer transition-colors hover:text-blue-600" />
          <FaPinterest className="cursor-pointer transition-colors hover:text-red-500" />
          <FaXTwitter className="cursor-pointer transition-colors hover:text-zinc-400" />
          <FaFacebook className="cursor-pointer transition-colors hover:text-blue-500" />
        </div>
      </div>
    </div>
  </section>
);

export default SocialFollow;
