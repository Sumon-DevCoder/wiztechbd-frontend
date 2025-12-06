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
import SectionHeader from "../../Shared/SectionHeader";

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
      description:
        "Understand your growth with smart, built-in analytics tools here.",
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
    <section className="bg-[#FDF6E8] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <SectionHeader
          badgeText="ESSENTIAL TOOLS"
          badgeGradient="linear-gradient(84deg, rgba(188, 179, 160, 1) 0%, rgba(224, 216, 201, 1) 80%)"
          title={
            <>
              Essential Tools
              <br />
              Zero Distractions
            </>
          }
          titleAs="h2"
          titleColor="text-gray-800"
          description="Create diverse products on the platform and leverage our powerful tools to drive sales within and beyond GrowHubs."
          descriptionColor="text-gray-700"
          className="mb-12"
          titleClassName="text-4xl md:text-5xl"
          descriptionClassName="text-lg"
        />

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={`${tool.title}-${index}`}
              className={tool.isEnterprise ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <ToolCard
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                isEnterprise={tool.isEnterprise}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EssientialTools;
