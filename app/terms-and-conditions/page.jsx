import PolicyPage from "../components/PolicyPage";

export default function TermsPage() {
  const sections = [
    {
      heading: "1. Overview of Services",
      content:
        "Priyanka’s Atelier operates as a bespoke designer label providing custom-stitched couture and fashion wear. All product specifications, including stitching seam strength, colors, tints, and handwork details mentioned on our digital interfaces or at our studio, are approximate values. As every piece is custom-fit, final results may differ based on fabric quality and unique client measurements."
    },
    {
      heading: "2. Eligibility to Contract",
      content:
        "Use of our services is available only to persons who can legally enter into contracts under the Indian Contract Act, 1872. Persons recognized as 'incompetent to contract,' including minors under the age of 18 or un-discharged insolvents, are not eligible to use Priyanka’s Atelier interfaces. We reserve the right to terminate access if eligibility requirements are not met."
    },
    {
      heading: "3. Registration & Account Integrity",
      content:
        "To access certain services, users must register with accurate and complete information. You agree to maintain the currency of this data. Priyanka’s Atelier reserves the right to revoke or terminate your registration at any time, without notice, for any breach of these terms."
    },
    {
      heading: "4. Handcrafted & Dyed Fabric Disclaimer",
      content:
        "Due to the nature of customized artisanal work, dyed fabrics and hand embroidery (such as Zardosi, Aari, or Chikankari) may have a shade or design variance of 10% to 15% from the discussed illustrations. The customer acknowledges that the final design outcome may vary from reference images as couture is a visualized creative process."
    },
    {
      heading: "5. Free Alterations Policy",
      content:
        "We offer complimentary basic size and measurement alterations for garments stitched by us if notified within 7 days of delivery. The decision of our technical team regarding the possibility of an alteration is final. Please note that style changes, design modifications, or alterations to fit a different individual are not covered. Service charges will apply for any pickup or delivery of garments for alteration purposes."
    },
    {
      heading: "6. Orders, Payments & Retention",
      content:
        "Orders are processed only after a confirmed advance payment. Any changes requested after the advance is paid will be treated as a new order. Garments will only be delivered after the full balance is cleared. Priyanka’s Atelier reserves the right to retain stitched garments in case of non-payment of dues. Unclaimed garments after 15 days of completion will no longer be the responsibility of the studio."
    },
    {
      heading: "7. Cancellation Policy",
      content:
        "Orders cannot be cancelled once: (a) the fabric has been sourced or picked up for styling, (b) the cutting of the fabric has commenced, or (c) any embroidery or handwork has been initiated. For bridal couture, the initial booking deposit is non-refundable due to the specialized procurement involved."
    },
    {
      heading: "8. Delivery Timelines",
      content:
        "Standard delivery for Prêt collections is 7–14 working days. Complex Couture or Bridal designs require 30–60 days. While we strive for timely delivery, we are not liable for delays caused by logistics, procurement of specialized fabrics, or 'Acts of God' such as extreme weather or government-mandated lockdowns."
    },
    {
      heading: "9. Electronic Communications",
      content:
        "By using our digital interfaces or sending us emails/messages, you consent to receive communications from us electronically. We will communicate with you via email, SMS, or WhatsApp regarding order updates, consultations, and promotional insights."
    },
    {
      heading: "10. Returns & Gift Vouchers",
      content:
        "As all garments are specifically customized to unique specifications, returns and cash refunds are not admissible. If a grievance is cleared by our audit team, any refund will be issued strictly in the form of a Gift Voucher or Boutique Credit with a limited validity period. No cash or online reversals will be issued."
    },
    {
      heading: "11. Right to Erasure (Right to be Forgotten)",
      content:
        "In compliance with data protection principles, registered users may request the deletion of their personal data if it is no longer necessary for the purpose it was collected. We will process 'right to erasure' requests within 30 days, provided there is no overriding legal or financial obligation to retain the data."
    },
    {
      heading: "12. Jurisdiction",
      content:
        "All disputes arising out of or in connection with Priyanka’s Atelier services, interfaces, or order fulfillment shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India."
    },
    {
      heading: "Contact & Grievance Officer",
      content:
        "For queries or grievances, please contact our Grievance Officer: \n\n Name: [Priyanka] \n Phone: +91 [81869 62340] \n Email: [care@priyankasatelier.in] \n Address: Priyanka’s Atelier Studio, Telangana, India."
    }
  ];

  return <PolicyPage title="Terms of Usage" sections={sections} />;
}