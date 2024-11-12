export const annexes = [
  "Annex 1 PERSONNEL LICENSING",
  "Annex 2 RULES OF THE AIR",
  "Annex 3 METEOROLOGICAL SERVICE FOR INTERNATIONAL AIR NAVIGATION PART I - CORE SARPs",
  "Annex 4 AERONAUTICAL CHARTS",
  "Annex 5 UNITS OF MEASUREMENT TO BE USED IN AIR AND GROUND OPERATIONS",
];
export const Chapters = [
  "ABBREVIATIONS",
  "FOREWORD",
  "INTERNATIONAL STANDARDS AND RECOMMENDED PRACTICES",
  "CHAPTER 1.    DEFINITIONS AND GENERAL RULES CONCERNING LICENCES",
  "CHAPTER 2.    LICENCES AND RATINGS FOR PILOTS",
];
export const Provisions = [
  "Title 1.0 | ABBREVIATIONS (used in this Annex) AFIS Aerodrome flight information service",
  "Title 1.0 | ABBREVIATIONS (used in this Annex) AFISAerodrome flight information service ",
];
export const ancProgresBarContents = [
  {
    index: 1,
    content: "Document Type",
    icon: <i className="fas fa-shopping-basket"></i>,
  },
  {
    index: 2,
    content: "Select Annex",
    icon: <i className="fas fa-shopping-basket"></i>,
  },
  {
    index: 3,
    content: "Annex Version",
    icon: <i className="fas fa-map-marker-alt"></i>,
  },
  {
    index: 4,
    content: "Chapters",
    icon: <i class="fas fa-dollar-sign"></i>,
  },
  {
    index: 5,
    content: "Provisions",
    icon: <i class="fas fa-dollar-sign"></i>,
  },
  {
    index: 6,
    content: "Confirm",
    icon: <i class="fas fa-check-square"></i>,
  },
  {
    index: 7,
    content: "Send",
    icon: <i class="fas fa-mail-bulk"></i>,
  },
];

export const states = [
  {
    index: 1,
    state: "UK",
  },
  {
    index: 2,
    state: "Aus",
  },
  {
    index: 3,
    state: "IND",
  },
];

const annexDemodata = [
  {
    annexId: 1,
    annexName: "annex 1",
    stateLetters: [
      {
        stateLetterId: 1,
        stateLetterName: "state letter 1",
        anwpNumber: ["test001", "test002", "test003"], //dropown
        stateLetterNo: "AN-WP/8498 test",
        stateLetterTitle: "sample title",
        stateLetterDate: "2022-01-01",
        proposeAmendment: "sample amendment",
        actionDeadline: "2022-01-01",
        contact: ["1234567890987", "1234567890987", "1234567890987"], //dropdown
        chapters: [
          {
            chapterId: 1,
            chapterName: "Chapter 1",
            provisions: [
              {
                provisionId: 1,
                provisionName: "Provision 1.1",
                pdfPath: require("../assests/p2.pdf"),
              },
              {
                provisionId: 2,
                provisionName: "Provision 1.2",
                pdfPath: require("../assests/p3.pdf"),
              },
            ],
          },
          {
            chapterId: 2,
            chapterName: "Chapter 2",
            provisions: [
              {
                provisionId: 3,
                provisionName: "Provision 2.1",
                pdfPath: require("../assests/ticket.pdf"),
              },
              {
                provisionId: 4,
                provisionName: "Provision 2.2",
                pdfPath: require("../assests/p4.pdf"),
              },
              {
                provisionId: 5,
                provisionName: "Provision 2.3",
                pdfPath: require("../assests/p2.pdf"),
              },
            ],
          },
        ],
      },
    ],
  },
];

export const annexData = [
  {
    annexId: 1,
    annexName: "Annex 1 - PERSONNEL LICENSING",
    chapters: [
      {
        chapterId: 1,
        chapterName: "Chapter 1",
        provisions: [
          {
            provisionId: 1,
            provisionName: "Provision 1.1",
            pdfPath: require("../assests/p2.pdf"),
          },
          {
            provisionId: 2,
            provisionName: "Provision 1.2",
            pdfPath: require("../assests/p3.pdf"),
          },
        ],
      },
      {
        chapterId: 2,
        chapterName: "Chapter 2",
        provisions: [
          {
            provisionId: 3,
            provisionName: "Provision 2.1",
            pdfPath: require("../assests/ticket.pdf"),
          },
          {
            provisionId: 4,
            provisionName: "Provision 2.2",
            pdfPath: require("../assests/p4.pdf"),
          },
          {
            provisionId: 5,
            provisionName: "Provision 2.3",
            pdfPath: require("../assests/p2.pdf"),
          },
        ],
      },
    ],
  },
  {
    annexId: 2,
    annexName: "Annex 2 - OPERATIONAL STANDARDS",
    chapters: [
      {
        chapterId: 3,
        chapterName: "Chapter 3",
        provisions: [
          {
            provisionId: 6,
            provisionName: "Provision 3.1",
            pdfPath: require("../assests/p3.pdf"),
          },
          {
            provisionId: 7,
            provisionName: "Provision 3.2",
            pdfPath: require("../assests/ticket.pdf"),
          },
          {
            provisionId: 8,
            provisionName: "Provision 3.3",
            pdfPath: require("../assests/p4.pdf"),
          },
        ],
      },
      {
        chapterId: 4,
        chapterName: "Chapter 4",
        provisions: [
          {
            provisionId: 9,
            provisionName: "Provision 4.1",
            pdfPath: require("../assests/p3.pdf"),
          },
          {
            provisionId: 10,
            provisionName: "Provision 4.2",
            pdfPath: require("../assests/ticket.pdf"),
          },
          {
            provisionId: 11,
            provisionName: "Provision 4.3",
            pdfPath: require("../assests/p4.pdf"),
          },
        ],
      },
      {
        chapterId: 5,
        chapterName: "Chapter 5",
        provisions: [
          {
            provisionId: 12,
            provisionName: "Provision 5.1",
            pdfPath: require("../assests/p3.pdf"),
          },
          {
            provisionId: 13,
            provisionName: "Provision 5.2",
            pdfPath: require("../assests/ticket.pdf"),
          },
          {
            provisionId: 14,
            provisionName: "Provision 5.3",
            pdfPath: require("../assests/p4.pdf"),
          },
          {
            provisionId: 15,
            provisionName: "Provision 5.4",
            pdfPath: require("../assests/ticket.pdf"),
          },
        ],
      },
    ],
  },
];

// this is for demo purpose

export const DocumentData = [
  {
    DocType: "Annex",
    docID: 1,
    docTitle:
      "Annex 3 METEOROLOGICAL SERVICE FOR INTERNATIONAL AIR NAVIGATION PART",
  },
  {
    DocType: "Annex",
    docID: 2,
    docTitle: "Annex 11 - AIR TRAFFIC SERVICES",
  },
  // {
  //   DocType: "PANS",
  //   docID: 3,
  //   docTitle:
  //     "Annex 3 METEOROLOGICAL SERVICE FOR INTERNATIONAL AIR NAVIGATION PART",
  // },
  // {
  //   DocType: "PANS",
  //   docID: 4,
  //   docTitle: "Annex 11 - AIR TRAFFIC SERVICES",
  // },
];

export const StateLetters = [
  {
    docID: 1,
    stateLetterId: 1,
    stateLetterName: "State Letter 2024 : Amendment 53",
    anwpNumber: ["AN-WP/8490", "AN-WP/8491", "AN-WP/8492"], //dropown
    stateLetterNo: "AN-WP/8498 SL01",
    stateLetterTitle: "sample title",
    stateLetterDate: "2022-01-01",
    proposeAmendment: "Amendment 10",
    actionDeadline: "2022-01-01",
    contact: ["Stephane", "Jerome", "Mincheol"], //dropdown
    chapters: [
      {
        chapterId: 1,
        chapterName: "CHAPTER 2.    GENERAL PROVISIONS",
        provisions: [
          {
            provisionId: 1,
            provisionNo: 89848,
            provisionName: "2.2.10",
            pdfPath: require("../assests/p2.pdf"),
          },
          {
            provisionId: 2,
            provisionNo: 30259,
            provisionName: "2.2",
            pdfPath: require("../assests/p2.pdf"),
          },
        ],
      },
      {
        chapterId: 2,
        chapterName: "CHAPTER 3.    GENERAL PROVISIONS",
        provisions: [
          {
            provisionId: 3,
            provisionNo: 89849,
            provisionName: "3.1",
            pdfPath: require("../assests/p2.pdf"),
          },
          {
            provisionId: 4,
            provisionNo: 89850,
            provisionName: "3.2",
            pdfPath: require("../assests/p2.pdf"),
          },
        ],
      },
    ],
  },

  {
    docID: 2,
    stateLetterId: 2,
    stateLetterName: "state letter 2",
    anwpNumber: ["test001", "test002", "test003"], //dropown
    stateLetterNo: "AN-WP/8498 test",
    stateLetterTitle: "sample title",
    stateLetterDate: "2022-01-01",
    proposeAmendment: "Amendment 10",
    actionDeadline: "2022-01-01",
    contact: ["Stephane", "Jerome", "Mincheol"], //dropdown
    chapters: [
      {
        chapterId: 3,
        chapterName: "CHAPTER 1. DEFINITIONS",
        provisions: [
          {
            provisionId: 5,
            provisionNo: 89849,
            provisionName: "5.1 CPL",
            pdfPath: require("../assests/p2.pdf"),
          },
          {
            provisionId: 6,
            provisionNo: 89850,
            provisionName: "5.54 Flight Plan",
            pdfPath: require("../assests/p2.pdf"),
          },
        ],
      },
      {
        chapterId: 4,
        chapterName: "Chapter 5 ALERTING SERVICE",
        provisions: [
          {
            provisionId: 7,
            provisionNo: 89851,
            provisionName: "5.1.2",
            pdfPath: require("../assests/p3.pdf"),
          },
          {
            provisionId: 8,
            provisionNo: 89852,
            provisionName: "5.1.3",
            pdfPath: require("../assests/p2.pdf"),
          },
          {
            provisionId: 9,
            provisionNo: 89853,
            provisionName: "5.1.3.1",
            pdfPath: require("../assests/p4.pdf"),
          },
          {
            provisionId: 10,
            provisionNo: 89854,
            provisionName: "5.1.4",
            pdfPath: require("../assests/p2.pdf"),
          },
          {
            provisionId: 11,
            provisionNo: 89855,
            provisionName: "5.1.4.1",
            pdfPath: require("../assests/p2.pdf"),
          },
          {
            provisionId: 12,
            provisionNo: 89856,
            provisionName: "5.2.1",
            pdfPath: require("../assests/p2.pdf"),
          },
          {
            provisionId: 13,
            provisionNo: 89857,
            provisionName: "5.2.2.1",
            pdfPath: require("../assests/p2.pdf"),
          },
        ],
      },
    ],
  },
];

export const comments = [
  {
    provisionId: 1,
    StateComments: [
      {
        StateId: "3166-2:IN",
        StateResponse: "Not Applicable", //
        comments: " 1 this  is the sample comment for provision 1",
        Proposal: " 1 this  is the sample proposal for provision 1",
      },
      {
        StateId: "3166-2:CA",
        StateResponse: "Disagree", //
        comments: "2 this  is the sample comment for provision 2",
        Proposal: "2 this  is the sample proposal for provision 2",
      },
      {
        StateId: "3166-2:RU",
        StateResponse: "Agree with/without comments", //
        comments: "3 this  is the sample comment for provision 3",
        Proposal: "3 this  is the sample proposal for provision 3",
      },
    ],
    SecretaryComments: {
      Analysis: "this is the sample secretary Analysis for provision 1",
      Recommendation:
        "this is sample secreatary recommendation for provision 1",
    }, //Single
  },
  {
    provisionId: 2,
    StateComments: [
      {
        StateId: "3166-2:IN",
        StateResponse: "Not Applicable", //
        comments: "1 this  is the sample comment for provision 1",
        Proposal: "1 this  is the sample proposal for provision 1",
      },
      {
        StateId: "3166-2:CA",
        StateResponse: "Disagree", //
        comments: "2 this  is the sample comment for provision 2",
        Proposal: "2 this  is the sample proposal for provision 2",
      },
      {
        StateId: "3166-2:RU",
        StateResponse: "Agree with/without comments", //
        comments: "3 this  is the sample comment for provision 3",
        Proposal: "3 this  is the sample proposal for provision 3",
      },
      {
        StateId: "3166-2:CN",
        StateResponse: "Agree subject to change", //
        comments: "4 this  is the sample comment for provision 4",
        Proposal: "4 this  is the sample provision for provision 4",
      },
      {
        StateId: "3166-2:US",
        StateResponse: "Disagree", //
        comments: "5 this  is the sample comment for provision 5",
        Proposal: "5 this  is the sample proposal for provision 5",
      },
    ],
    SecretaryComments: {
      Analysis: "this is the sample secretary comment for provision 2",
      Recommendation:
        "this is the sample secretary recommendation for provison 2",
    }, //Single
  },
];
