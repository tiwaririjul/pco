const comments = [
  {
    ProvisionId: 1,
    StateComments: [
      {
        StateId: "IND",
        StateResponse: "Not Applicable", //
        comments: "",
        Proposal: "",
      },
      {
        StateId: "CAN",
        StateResponse: "Disagree", //
        comments: "",
        Proposal: "",
      },
      {
        StateId: "RUSSIA",
        StateResponse: "Agree with/without comments", //
        comments: "",
        Proposal: "",
      },
    ],
    SecretaryComments: { Analysis: "", Recommendation: "" }, //Single
  },
  {
    ProvisionId: 2,
    StateComments: [
      {
        StateId: "IND",
        StateResponse: "Not Applicable", //
        comments: "",
        Proposal: "",
      },
      {
        StateId: "CAN",
        StateResponse: "Disagree", //
        comments: "",
        Proposal: "",
      },
      {
        StateId: "RUSSIA",
        StateResponse: "Agree with/without comments", //
        comments: "",
        Proposal: "",
      },
      {
        StateId: "CHINA",
        StateResponse: "Agree subject to change", //
        comments: "",
        Proposal: "",
      },
      {
        StateId: "US",
        StateResponse: "Disagree", //
        comments: "",
        Proposal: "",
      },
    ],
    SecretaryComments: { Analysis: "", Recommendation: "" }, //Single
  },
];

const StateLetters = [
  {
    annexId: 1,
    stateLetterId: 1,
    stateLetterName: "State Letter 2024 : Amendment 53",
    anwpNumber: ["test001", "test002", "test003"], //dropown
    stateLetterNo: "AN-WP/8498 test",
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
            provisionId: 89848,
            provisionName: "2.2.10",
          },
          {
            provisionId: 30259,
            provisionName: "2.2",
          },
        ],
      },
      {
        chapterId: 2,
        chapterName: "CHAPTER 3.    GENERAL PROVISIONS",
        provisions: [
          {
            provisionId: 89849,
            provisionName: "3.1",
          },
          {
            provisionId: 89850,
            provisionName: "3.2",
          },
        ],
      },
    ],
  },
  {
    annexId: 2,
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
            provisionId: 89849,
            provisionName: "5.1 CPL",
          },
          {
            provisionId: 89850,
            provisionName: "5.54 Flight Plan",
          },
        ],
      },
      {
        chapterId: 4,
        chapterName: "Chapter 5 ALERTING SERVICE",
        provisions: [
          {
            provisionId: 89851,
            provisionName: "5.1.2",
          },
          {
            provisionId: 89852,
            provisionName: "5.1.3",
          },
          {
            provisionId: 89853,
            provisionName: "5.1.3.1",
          },
          {
            provisionId: 89854,
            provisionName: "5.1.4",
          },
          {
            provisionId: 89855,
            provisionName: "5.1.4.1",
          },
          {
            provisionId: 89856,
            provisionName: "5.2.1",
          },
          {
            provisionId: 89857,
            provisionName: "5.2.2.1",
          },
        ],
      },
    ],
  },
];

const annexData = [
  {
    annexId: 1,
    annexTitle:
      "Annex 3 METEOROLOGICAL SERVICE FOR INTERNATIONAL AIR NAVIGATION PART",
  },
  {
    annexId: 2,
    annexTitle: "Annex 11 - AIR TRAFFIC SERVICES",
  },
];
