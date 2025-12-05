import ToolCard from "./ToolCard";
import {
  AnalyticsIcon,
  ContactIcon,
  CoSellNetworkIcon,
  EmailsIcon,
  EnterpriseIcon,
  NewslettersIcon,
  PagesIcon,
  PaymentsIcon,
} from "./ToolIcons";

const EssientialTools = () => {
  const tools = [
    {
      title: "Payments",
      description:
        "Responsibly sourced woods and eco-friendly fabrics for a better tomorrow.",
      icon: <PaymentsIcon />,
    },
    {
      title: "Analytics",
      description: "Understand your growth with smart, built-in analytics.",
      icon: <AnalyticsIcon />,
    },
    {
      title: "Newsletters",
      description: "build your audience with engaging, branded newsletter.",
      icon: <NewslettersIcon />,
    },
    {
      title: "Pages",
      description:
        "Showcase your expertise with a personal profile that sells for you.",
      icon: <PagesIcon />,
    },
    {
      title: "Contact",
      description:
        "Organize your contacts and turn them into your most valuable asset.",
      icon: <ContactIcon />,
    },
    {
      title: "Emails",
      description:
        "Showcase your expertise with a personal profile that sells for you.",
      icon: <EmailsIcon />,
    },
    {
      title: "Co-sell network",
      description:
        "Collaborate with others to sell more without ad spend or extra effort.",
      icon: <CoSellNetworkIcon />,
    },
    {
      title: "Enterprise plan",
      description:
        "Full white-label platform hosted on a dedicated, auto-scaling server. Includes branding freedom, private content protection, and 24/7 service availability.",
      icon: <EnterpriseIcon />,
      isEnterprise: true,
    },
  ];

  return (
    <section className="bg-[#f5f5f0] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Pill Label */}
          <div className="inline-block px-4 py-1.5 bg-gray-800 text-white text-xs font-medium rounded-full mb-4">
            ESSENTIAL TOOLS
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Essential Tools
            <br />
            Zero Distractions
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Create diverse products on the platform and leverage our powerful
            tools to drive sales within and beyond GrowHubs.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard
              key={`${tool.title}-${index}`}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              isEnterprise={tool.isEnterprise}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssientialTools;
