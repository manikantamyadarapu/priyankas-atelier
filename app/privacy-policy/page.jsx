import PolicyPage from "../components/PolicyPage";
import Navbar from "../components/Navbar";
import BookAConsult from "../components/book-a-consult";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  const sections = [
    {
      heading: "1. Privacy Commitment",
      content: "Priyanka’s Atelier is committed to protecting the personal data of our clients. By using our website or studio services, you consent to the collection and use of your information as outlined in this policy."
    },
    {
      heading: "2. Data Collection",
      content: "We collect personal identifiers (name, contact info), bespoke measurements, and style preferences. We also collect anonymous technical data like IP addresses and cookies to improve your user experience."
    },
    {
      heading: "3. Usage of Information",
      content: "Your data is used to provide custom styling, process orders, and communicate updates. We strictly do not sell your personal data to third parties."
    },
    {
      heading: "4. Payment Security",
      content: "Priyanka’s Atelier does not store your credit/debit card details. All payments are redirected to secure, encrypted third-party payment gateways for processing."
    },
    {
      heading: "5. Children's Privacy",
      content: "We do not offer services directly to minors. Any data concerning children is collected exclusively through parents or guardians for the purpose of custom garment fitting."
    },
    {
      heading: "6. Data Subject Rights (GDPR)",
      content: "You have the right to access, rectify, or request the erasure of your personal data. Requests for data deletion will be processed within 30 days."
    },
    {
      heading: "7. Cookies & Logs",
      content: "We use cookies to personalize your journey. While not mandatory, they help our server recognize you to save time during repeat visits."
    },
    {
      heading: "8. Security Protocols",
      content: "Your information is stored on secure, encrypted servers. We maintain physical and procedural safeguards to prevent unauthorized access."
    },
    {
      heading: "9. Policy Revisions",
      content: "Our business evolves, and this policy may change. We recommend checking this page frequently to stay informed about how we protect your data."
    },
    {
      heading: "10. Contact Information",
      content: "For privacy-related inquiries, contact us at: [care@priyankasatelier.in]. Jurisdiction: Hyderabad, Telangana."
    }
  ];

  return (
    <main>
      <Navbar />
      <PolicyPage title="Privacy Policy" sections={sections} />
      <BookAConsult />
      <Footer />
    </main>
  );
}