const servicesES = [
  {
    title: "Book keeping",
    description: "Systematically record, organize and maintain financial transactions and records of the business. We aim to maintain the accuracy and currency of financial records, enabling us present a well organized report.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#F0871A" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
        <path d="M3 10l18 0" />
        <path d="M7 15l.01 0" />
        <path d="M11 15l2 0" />
      </svg>`,
  },
  {
    title: "Invoice processing",
    description: "Processing the end-to-end management of vendor invoices, beginning with receipt and culminating with payment, followed y the recording in the general ledger.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-invoice" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#F0871A" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <path d="M9 7l1 0" />
        <path d="M9 13l6 0" />
        <path d="M13 17l2 0" />
      </svg>`,
  },
  {
    title: "Business Optimization",
    description: "We handle document management, including organizing vendor files and employee files. We provide assistance in the process of requesting, renewing and maintaining permits.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-opened" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#F0871A" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
        <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
        <path d="M3 19l6 -6" />
        <path d="M15 13l6 6" />
      </svg>`,
  },
  {
    title: "Project management ",
    description: "We assist in preparing project estimates to be delivered to clients, establish project timelines, budget and calendars.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-dots" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#F0871A" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <path d="M9 14v.01" />
        <path d="M12 14v.01" />
        <path d="M15 14v.01" />
      </svg>`,
  },
  {
    title: "Social media",
    description: "Create and establish social media platform page. Through research we identify and establish content strategies. ",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-receipt-2" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#F0871A" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
        <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
      </svg>`,
  },
  {
    title: "Consumer services",
    description: "Document Translation Assistance in completing government forms, Income Tax Preparation, Tax ID(ITIN) Application, USCIS Filings.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-bank" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#F0871A" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 21l18 0" />
        <path d="M3 10l18 0" />
        <path d="M5 6l7 -3l7 3" />
        <path d="M4 10l0 11" />
        <path d="M20 10l0 11" />
        <path d="M8 14l0 3" />
        <path d="M12 14l0 3" />
        <path d="M16 14l0 3" />
      </svg>`,
    },
{
  title: "Notary Public Services",
    description: "Notarization of document, Administering Oaths and Affirmations, Certified copies of original documents.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-wechat" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#F0871A" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z" />
        <path d="M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233" />
        <path d="M10 8h.01" />
        <path d="M7 8h.01" />
        <path d="M15 14h.01" />
        <path d="M18 14h.01" />
      </svg>`,
    }
];

import * as $ from 'jquery';

export { servicesES };