import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const topics = [
  "AI Marketing",
  "AI in Social Media",
  "Best Times to Post on Social Media",
  "Business Intelligence",
  "Competitive Analysis",
  "Crisis Communications",
  "Customer Care",
  "Employee Advocacy",
  "Facebook Analytics",
  "Facebook Marketing",
  "Hashtags",
  "Influencer Marketing",
  "Instagram Analytics Tools",
  "Instagram Marketing",
  "LinkedIn Marketing",
  "Reputation Management",
  "Sentiment Analysis",
  "Social Media Advertising",
  "Social Media Analytics",
  "Social Media Audit",
  "Social Media Content",
  "Social Media Customer Service",
  "Social Media Engagement",
  "Social Media Listening",
  "Social Media Management",
  "Social Media Marketing",
  "Social Media Planning",
  "Social Media ROI",
  "Social Media Reporting",
  "Social Media Scheduling",
  "Social Media Search",
  "Social Media Statistics",
  "Social Media for Healthcare",
  "TikTok Analytics",
  "TikTok Marketing",
  "UK Influencers",
  "X (Twitter) Analytics",
  "X (Twitter) Marketing",
  "YouTube Marketing",
];

const TopicHubs = () => (
  <div className="space-y-20 bg font-sans text-slate-900">
    <section className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="border-2 border-slate-200 bg-white p-10 md:p-16">
        <h2 className="mb-12 text-2xl font-black tracking-tight">Topic Hubs</h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-5">
          {topics.map((topic) => (
            <div key={topic} className="group cursor-pointer">
              <span className="border-b-2 border-blue-700/30 text-[13px] font-bold leading-relaxed text-blue-700 transition-all group-hover:border-blue-700">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default TopicHubs;
