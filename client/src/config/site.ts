export const site = {
  name: "Studio Usług",
  legalName: "Studio Usług Jan Kowalski",
  city: "Warszawa",
  phone: "501 430 894",
  phoneHref: "tel:+48501430894",
  email: "kontakt@example.pl",
  emailHref: "mailto:kontakt@example.pl",
  address: {
    street: "ul. Przykładowa 12/lok. 3",
    postal: "00-001",
    city: "Warszawa",
    full: "ul. Przykładowa 12/lok. 3, 00-001 Warszawa",
  },
  hours: [
    { daysPl: "Pn–Pt", daysEn: "Mon–Fri", hours: "8:00–18:00" },
    { daysPl: "Sob", daysEn: "Sat", hours: "9:00–14:00" },
    { daysPl: "Ndz", daysEn: "Sun", hours: "nieczynne" },
  ],
  social: {
    facebook: "https://facebook.com",
  },
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=21.00%2C52.22%2C21.05%2C52.25&layer=mapnik",
  mapLink: "https://www.openstreetmap.org/#map=16/52.235/21.025",
  addPattern: {
    name: "AddPattern Marcin Krzysztoszek",
    url: "https://midnajt.github.io/AddPattern.github.io/",
  },
} as const;
