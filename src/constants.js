import withBase from "./utils/withBase";

export const businessName = "De Parelvisser";
export const clientName = "Griet Ackerman";

export const address = {
  streetAddress: "Domien Geersstraat 11a",
  addressLocality: "Oostakker",
  postalCode: "9041",
  addressCountry: "BE",
};

export const contact = {
  phoneText: "0469 73 72 23",
  phoneHref: "tel:+32469737223",
  email: "deparelvisser@telenet.be"
};

export const geo = {
  latitude: 51.09721479987742,
  longitude: 3.763584383598638
};

export const navigationLinks = [
  { href: withBase(""), label: "Home" },
  { href: withBase("werkwijze"), label: "Werkwijze" },
  { href: withBase("aanbod"), label: "Aanbod" },
  { href: withBase("praktisch"), label: "Praktisch" },
  { href: withBase("over-mij"), label: "Over mij" },
  { href: withBase("contact"), label: "Contact" },
];