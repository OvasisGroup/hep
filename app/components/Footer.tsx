import Link from "next/link";

export default function Footer() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Market Opportunity", href: "/market-opportunity" },
    { name: "Contacts", href: "/contacts" },
  ];

  return (
    <footer className="bg-background text-gray-300 py-8 px-6 mt-auto border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <div className="flex justify-center items-center gap-8 mb-6 pb-6 border-b border-gray-700">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm leading-relaxed text-center">
          © 2026. HEP and its associated trademarks, branding, and digital assets are the intellectual property of MUUIA Ltd. Unauthorized reproduction, distribution, or modification of any content, including but not limited to text, graphics, logos, platform code, and user-generated content, is strictly prohibited. HEP is a community-driven real estate management platform. It does not constitute professional or financial advice. Users are responsible for ensuring compliance with applicable regulations, including data protection laws and any relevant guidelines issued by regulatory authorities in their jurisdiction. For inquiries, collaborations, or regulatory concerns, please contact:{" "}
          <a href="tel:+254718540760" className="text-blue-400 hover:text-blue-300 transition-colors">
            +254-718-540-760
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
