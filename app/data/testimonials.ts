export interface Testimonial {
  id: number;
  name: string;
  title: string;
  profileImage: string;
  videoThumbnail: string;
  rating: number;
  tags: string[];
  testimonial: string;
  achievement: {
    amount: string;
    period: string;
  };
  companyLogo?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Iva Ryan",
    title: "Marketing manager at Adobe",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    tags: ["Content Creator", "Youtuber", "Growth Expert"],
    testimonial:
      "I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!",
    achievement: {
      amount: "$2M",
      period: "EARNED IN HELENUIL",
    },
    companyLogo:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Content Strategist at Microsoft",
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    rating: 5,
    tags: ["Digital Marketer", "Influencer", "Business Coach"],
    testimonial:
      "The platform has transformed how I manage my content and connect with my audience. The analytics tools are incredibly powerful!",
    achievement: {
      amount: "$1.5M",
      period: "REVENUE GENERATED",
    },
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Creative Director at Google",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    rating: 5,
    tags: ["Designer", "Brand Strategist", "Creative Lead"],
    testimonial:
      "This platform streamlined our entire workflow. The collaboration features make working with teams seamless and efficient.",
    achievement: {
      amount: "$3M",
      period: "PROJECT VALUE",
    },
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "Social Media Manager at Meta",
    profileImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
    rating: 5,
    tags: ["Social Media Expert", "Content Creator", "Community Builder"],
    testimonial:
      "The automation features have saved me countless hours. My engagement rates have increased by 300% since using this platform!",
    achievement: {
      amount: "$2.5M",
      period: "ENGAGEMENT GROWTH",
    },
    companyLogo:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop",
  },
  {
    id: 5,
    name: "David Kim",
    title: "E-commerce Specialist at Amazon",
    profileImage:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    tags: ["E-commerce Expert", "Sales Strategist", "Growth Hacker"],
    testimonial:
      "The integration capabilities are outstanding. We've seen a 250% increase in conversion rates after implementing this solution.",
    achievement: {
      amount: "$4.2M",
      period: "SALES INCREASE",
    },
    companyLogo:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=100&h=100&fit=crop",
  },
  {
    id: 6,
    name: "Jessica Martinez",
    title: "Brand Ambassador at Nike",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=400&h=400&fit=crop",
    rating: 5,
    tags: ["Brand Ambassador", "Influencer", "Fitness Coach"],
    testimonial:
      "As a brand ambassador, this platform has helped me manage multiple campaigns effortlessly. The ROI tracking is phenomenal!",
    achievement: {
      amount: "$1.8M",
      period: "CAMPAIGN REVENUE",
    },
    companyLogo:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop",
  },
  {
    id: 7,
    name: "Robert Taylor",
    title: "Product Manager at Apple",
    profileImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
    rating: 5,
    tags: ["Product Manager", "Tech Innovator", "Startup Advisor"],
    testimonial:
      "The user experience is second to none. Our team productivity has doubled, and customer satisfaction scores are at an all-time high.",
    achievement: {
      amount: "$5M",
      period: "PRODUCT GROWTH",
    },
    companyLogo:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=100&h=100&fit=crop",
  },
  {
    id: 8,
    name: "Lisa Anderson",
    title: "CEO at StartupHub",
    profileImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
    rating: 5,
    tags: ["CEO", "Entrepreneur", "Business Leader"],
    testimonial:
      "This platform has been instrumental in scaling our business. The insights and analytics have transformed our decision-making process.",
    achievement: {
      amount: "$6.5M",
      period: "COMPANY VALUATION",
    },
    companyLogo:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop",
  },
];
