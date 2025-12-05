import React from 'react';

// Payments Icon - Red shopping bag with white tag
export const PaymentsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8h12l-1 10H7L6 8z" fill="#ef4444" />
    <path d="M8 6a2 2 0 012-2h4a2 2 0 012 2" stroke="#ef4444" strokeWidth="1.5" fill="none" />
    <rect x="10" y="11" width="4" height="3" rx="0.5" fill="white" />
    <path d="M12 11v3" stroke="#ef4444" strokeWidth="1" />
  </svg>
);

// Analytics Icon - Purple and blue bar chart
export const AnalyticsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="12" width="4" height="6" rx="1" fill="#8b5cf6" />
    <rect x="8" y="8" width="4" height="10" rx="1" fill="#3b82f6" />
    <rect x="13" y="6" width="4" height="12" rx="1" fill="#8b5cf6" />
    <rect x="18" y="10" width="4" height="8" rx="1" fill="#3b82f6" />
  </svg>
);

// Newsletters Icon - Yellow envelope with blue paper
export const NewslettersIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6l8 5 8-5v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" fill="#fbbf24" />
    <path d="M4 6l8 5 8-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="9" y="11" width="6" height="3" rx="0.5" fill="#3b82f6" />
  </svg>
);

// Pages Icon - Yellow document with green ribbon
export const PagesIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2h10l4 4v14a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" fill="#fbbf24" />
    <path d="M14 2v4h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="8" y="2" width="2" height="8" rx="0.5" fill="#10b981" />
  </svg>
);

// Contact Icon - Dark gray person with address book
export const ContactIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" fill="#4b5563" />
    <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" fill="#4b5563" />
    <rect x="16" y="6" width="4" height="5" rx="1" fill="#4b5563" />
    <path d="M17 8h2M17 10h2" stroke="white" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Emails Icon - Yellow envelope with pink heart
export const EmailsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6l8 5 8-5v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" fill="#fbbf24" />
    <path d="M4 6l8 5 8-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 15.5c-1 0-2-0.5-2-1.5s1-1.5 2-1.5 2 0.5 2 1.5-1 1.5-2 1.5z" fill="#ec4899" />
    <path d="M12 13.5l-0.5 1 0.5 0.5 0.5-0.5-0.5-1z" fill="#ec4899" />
  </svg>
);

// Co-sell Network Icon - Yellow icon with two connected people
export const CoSellNetworkIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="2.5" fill="#fbbf24" />
    <path d="M7 10.5c0 1.5 1 2.5 2 2.5s2-1 2-2.5" fill="#fbbf24" />
    <circle cx="17" cy="7" r="2.5" fill="#fbbf24" />
    <path d="M17 10.5c0 1.5 1 2.5 2 2.5s2-1 2-2.5" fill="#fbbf24" />
    <path d="M9.5 8.5l5 0" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="6" r="1" fill="#fbbf24" />
  </svg>
);

// Enterprise Plan Icon - Colorful city skyline
export const EnterpriseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="12" width="3" height="8" rx="0.5" fill="#3b82f6" />
    <rect x="6" y="8" width="3" height="12" rx="0.5" fill="#8b5cf6" />
    <rect x="10" y="10" width="3" height="10" rx="0.5" fill="#10b981" />
    <rect x="14" y="6" width="3" height="14" rx="0.5" fill="#f59e0b" />
    <rect x="18" y="9" width="3" height="11" rx="0.5" fill="#ef4444" />
    <circle cx="3.5" cy="9" r="1" fill="#fbbf24" />
    <circle cx="7.5" cy="5" r="1" fill="#fbbf24" />
    <circle cx="11.5" cy="7" r="1" fill="#fbbf24" />
    <circle cx="15.5" cy="3" r="1" fill="#fbbf24" />
    <circle cx="19.5" cy="6" r="1" fill="#fbbf24" />
  </svg>
);

