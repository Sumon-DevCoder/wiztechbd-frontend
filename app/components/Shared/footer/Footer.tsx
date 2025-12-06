"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="text-white relative overflow-hidden min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] pb-[80px] sm:pb-[100px] md:pb-[120px] lg:pb-[150px]"
      style={{
        background: "linear-gradient(180deg, #251621 0%, #42233A 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-8 md:py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* About Us Column */}
          <div className="md:ml-0 lg:ml-20">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources"
                  className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/property"
                  className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
                >
                  Property
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors text-sm md:text-base"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="text-white/70 text-sm md:text-base">
                hello abc@gmail.com
              </p>
              <p className="text-white/70 text-sm md:text-base">
                +012233455667
              </p>
            </div>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* Custom 'a' icon */}
              <a
                href="#"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Social Media"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="white"
                  />
                  <path
                    d="M25.6921 19.1235C25.5887 19.074 25.4837 19.0263 25.3774 18.9806C25.1921 15.5673 23.327 13.6131 20.1952 13.5931C20.181 13.593 20.1669 13.593 20.1528 13.593C18.2795 13.593 16.7216 14.3926 15.7628 15.8476L17.4851 17.0291C18.2014 15.9423 19.3257 15.7106 20.1536 15.7106C20.1631 15.7106 20.1727 15.7106 20.1822 15.7107C21.2134 15.7173 21.9915 16.0171 22.4951 16.6018C22.8616 17.0274 23.1067 17.6156 23.2281 18.358C22.3139 18.2026 21.3251 18.1548 20.2681 18.2154C17.2906 18.3869 15.3764 20.1235 15.505 22.5365C15.5702 23.7605 16.18 24.8135 17.2219 25.5014C18.1028 26.0829 19.2374 26.3673 20.4165 26.3029C21.9738 26.2175 23.1954 25.6234 24.0476 24.537C24.6949 23.712 25.1042 22.6429 25.285 21.2957C26.0271 21.7436 26.5771 22.333 26.8809 23.0415C27.3974 24.2459 27.4275 26.225 25.8126 27.8385C24.3978 29.252 22.697 29.8635 20.1267 29.8824C17.2755 29.8612 15.1192 28.9469 13.7173 27.1646C12.4044 25.4958 11.726 23.0852 11.7006 20C11.726 16.9147 12.4044 14.5042 13.7173 12.8353C15.1192 11.0531 17.2755 10.1388 20.1266 10.1176C22.9985 10.1389 25.1924 11.0577 26.648 12.8485C27.3618 13.7267 27.8999 14.8311 28.2546 16.1188L30.273 15.5803C29.843 13.9953 29.1664 12.6295 28.2456 11.4968C26.3795 9.20084 23.6503 8.02439 20.1337 8H20.1196C16.6102 8.02431 13.9115 9.20522 12.0985 11.5099C10.4852 13.5608 9.65305 16.4145 9.62509 19.9916L9.625 20L9.62509 20.0084C9.65305 23.5855 10.4852 26.4393 12.0985 28.4901C13.9115 30.7948 16.6102 31.9757 20.1196 32H20.1337C23.2538 31.9784 25.453 31.1615 27.2647 29.3514C29.6351 26.9832 29.5637 24.0149 28.7825 22.1926C28.222 20.8859 27.1534 19.8245 25.6921 19.1235ZM20.3051 24.1884C19.0001 24.2619 17.6443 23.6761 17.5774 22.4215C17.5279 21.4913 18.2395 20.4532 20.3851 20.3296C20.6309 20.3154 20.872 20.3085 21.1089 20.3085C21.8883 20.3085 22.6174 20.3842 23.2802 20.5291C23.033 23.6169 21.5828 24.1182 20.3051 24.1884Z"
                    fill="white"
                  />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center md:text-right -mt-2 md:-mt-10 md:mr-0 lg:mr-20 mb-4 md:mb-0">
          <p className="text-white/70 text-sm md:text-base">
            © 2025 Havenix. All rights reserved.
          </p>
        </div>
      </div>

      {/* Large WiztecBD Text */}
      <div className="absolute bottom-0 left-0 right-0 text-center pb-2 md:pb-4">
        <h1
          className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[180px] xl:text-[220px] 2xl:text-[250px] font-bold leading-none select-none tracking-tight"
          style={{
            background:
              "linear-gradient(90deg, #8A7384 28.67%, #CAC3C3 46.17%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          WiztecBD
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
