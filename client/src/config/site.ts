export const site = {
  name: "Dorota & Marcin",
  legalName: "Dorota i Marcin — strona ślubna (demo)",
  city: "Piwniczna-Zdrój",
  couple: {
    bride: "Dorota",
    groom: "Marcin",
    initials: "D & M",
  },
  weddingDate: "2024-09-28",
  phone: "500 100 200",
  phoneHref: "tel:+48500100200",
  email: "dorota@example.pl",
  emailHref: "mailto:dorota@example.pl",
  contacts: {
    bride: {
      name: "Dorota",
      phone: "500 100 200",
      phoneHref: "tel:+48500100200",
      email: "dorota@example.pl",
      emailHref: "mailto:dorota@example.pl",
    },
    groom: {
      name: "Marcin",
      phone: "500 100 201",
      phoneHref: "tel:+48500100201",
      email: "marcin@example.pl",
      emailHref: "mailto:marcin@example.pl",
    },
  },
  ceremony: {
    namePl: "Kościół pw. Narodzenia NMP",
    nameEn: "Church of the Nativity of the Blessed Virgin Mary",
    time: "14:00",
    street: "ul. Krakowska 6",
    postal: "33-350",
    city: "Piwniczna-Zdrój",
    full: "ul. Krakowska 6, 33-350 Piwniczna-Zdrój",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.28217815426063!2d20.715344806996143!3d49.440924486859124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e0b0039dd08df%3A0x86df6d421f00e482!2sKo%C5%9Bci%C3%B3%C5%82%20pw.%20Narodzenia%20Naj%C5%9Bwietszej%20Marii%20Panny!5e0!3m2!1spl!2spl!4v1786894118643!5m2!1spl!2spl",
    mapLink:
      "https://www.google.com/maps/place/Ko%C5%9Bci%C3%B3%C5%82+pw.+Narodzenia+Naj%C5%9Bwietszej+Marii+Panny/@49.4409245,20.7153448,17z",
  },
  reception: {
    namePl: "Rezydencja Las Vegas",
    nameEn: "Las Vegas Residence",
    time: "16:30",
    street: "Barcice 550",
    postal: "33-342",
    city: "Barcice",
    full: "Barcice 550, 33-342 Barcice",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4699.215960255234!2d20.65486946848505!3d49.52735932243198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de2e5bbce2627%3A0x40a9266d0934df62!2sRezydencja%20Las%20Vegas%20-%20Sala%20weselna%2C%20Hotel%20%2C%20SPA!5e0!3m2!1spl!2spl!4v1786894070247!5m2!1spl!2spl",
    mapLink:
      "https://www.google.com/maps/place/Rezydencja+Las+Vegas+-+Sala+weselna,+Hotel+,+SPA/@49.5273593,20.6548695,17z",
  },
  witnesses: [
    {
      id: "maid",
      initials: "AK",
      name: "Anna Kowalska",
      phone: "500 100 210",
      phoneHref: "tel:+48500100210",
      email: "anna@example.pl",
      emailHref: "mailto:anna@example.pl",
    },
    {
      id: "bestMan",
      initials: "TN",
      name: "Tomasz Nowak",
      phone: "500 100 211",
      phoneHref: "tel:+48500100211",
      email: "tomasz@example.pl",
      emailHref: "mailto:tomasz@example.pl",
    },
  ],
  social: {
    facebook: "https://facebook.com",
  },
  addPattern: {
    name: "AddPattern Marcin Krzysztoszek",
    url: "https://midnajt.github.io/AddPattern.github.io/",
  },
} as const;
