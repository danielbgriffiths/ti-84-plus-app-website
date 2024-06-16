import { CurrencyCode, LocaleCode, QuestionSlug } from "~/types";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: LocaleCode.USEnglish,
  messages: {
    [LocaleCode.USEnglish]: {
      landing: {
        featuredApplications: {
          title: "Featured Applications",
          caption:
            "A featured set of applications for the TI-84 Plus CE calculator.",
        },
        groupLink: {
          tooltipText: "{size} {label} Applications",
        },
        overview: {
          title: "Learn Faster",
          caption: "A better workflow",
          description:
            "Leverage Python scripts in your calculator to solve problems, double check work, and learn faster.",
          tested: {
            title: "Tested",
            description: "Unit Test coverage with open source visibility",
          },
          lean: {
            title: "Lean",
            description: "Small downloaded file sizes with no dependencies",
          },
          comprehensive: {
            title: "Comprehensive",
            description:
              "The largest archive of Python scripts for the TI-84 Plus CE",
          },
        },
        info: {
          highlight: {
            applications: "Highlight",
            fields: "Fields of Mathematics",
            users: "of Users",
            applicationsTooltip: "Over {value} Applications in the Library",
            fieldsTooltip:
              "The Applications Span at Least {value} Fields of Mathematics",
            usersTooltip:
              "{value}'s of people are using the applications right now!",
          },
          faqTitle: "Frequently Asked Questions",
          faqQuestions: {
            [QuestionSlug.HowToUsePythonApplications]:
              "How do I use the Python applications with my TI-84 Plus CE calculator?",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Is there a size limit to the Python applications?",
            [QuestionSlug.DependenciesPythonApplications]:
              "Is it possible to use Python package dependencies in the applications?",
            [QuestionSlug.UploadApplications]:
              "How many applications can I upload onto my computer?",
            [QuestionSlug.UseApplicationsInClass]:
              "Am I allowed to use these applications in class?",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "How are you able to verify the accuracy of the Python applications?",
          },
        },
        donate: {
          title1: "Help grow the library.",
          title2: "Share your insights.",
          caption:
            "Donate today or access the Github repository to contribute to the library.",
          donate: "Donate",
          repository: "Repository",
        },
        contact: {
          title: "Get Connected",
          caption:
            "Have questions or suggestions? Enter your email and be updated with information about releases and projects!",
          email: "Email",
          highlight: {
            openSource: {
              title: "Open Source",
              caption: "Contribute to the open source repository.",
            },
            requests: {
              title: "Feature Requests",
              caption: "Offer requests for applications or features.",
            },
          },
          form: {
            send: "Send",
          },
        },
      },
      group: {
        calculus: "Calculus",
        trigonometry: "Trigonometry",
        preCalculus: "Pre Calculus",
      },
      footer: {
        copyRight: "Copyright © {year} - All right reserved by",
      },
      hero: {
        blurb: "Understand how your TI-84 can serve you better",
        title: "TI PY",
        subTitle:
          "Collections of tested and verified Python applications for your TI-84.",
      },
      navigation: {
        applications: "Applications",
        info: "Info",
        donate: "Donate",
        compiler: "Compiler",
      },
      donate: {
        title: "Donate",
        caption: "Help support the development of these applications.",
        secondary: {
          title: "Supporting Developers",
          caption:
            "Support for the time and effort attended towards these projects is forever appreciated. It facilitates more open work with the aim of benefiting everyone.",
        },
        content: {
          title: "Discover the Why",
          future: "Enable Future Projects",
          speed: "Speed Up Development",
          visibility: "Enhance Project Visibility",
          openSource: "Support Open Source Development",
        },
        chooseYourDonation: "Choose your donation",
        donate: "Donate",
        policyText:
          "Refunds are not available except in circumstances granted.",
      },
      currencyTexts: {
        [CurrencyCode.USD]: "US Dollar",
        [CurrencyCode.EUR]: "Euro",
        [CurrencyCode.JPY]: "Japanese Yen",
        [CurrencyCode.GBP]: "British Pound Sterling",
        [CurrencyCode.AUD]: "Australian Dollar",
        [CurrencyCode.CAD]: "Canadian Dollar",
        [CurrencyCode.CHF]: "Swiss Franc",
        [CurrencyCode.CNY]: "Chinese Yuan",
        [CurrencyCode.SEK]: "Swedish Krona",
        [CurrencyCode.NZD]: "New Zealand Dollar",
        [CurrencyCode.KRW]: "South Korean Won",
        [CurrencyCode.SGD]: "Singapore Dollar",
        [CurrencyCode.NOK]: "Norwegian Krone",
        [CurrencyCode.MXN]: "Mexican Peso",
        [CurrencyCode.INR]: "Indian Rupee",
        [CurrencyCode.RUB]: "Russian Ruble",
        [CurrencyCode.ZAR]: "South African Rand",
        [CurrencyCode.TRY]: "Turkish Lira",
        [CurrencyCode.BRL]: "Brazilian Real",
      },
      localeTexts: {
        [LocaleCode.USEnglish]: "English (United States)",
        [LocaleCode.ESSpanish]: "Spanish (Spain)",
        [LocaleCode.FRFrench]: "French (France)",
        [LocaleCode.DEGerman]: "German (Germany)",
        [LocaleCode.CNChinese]: "Chinese (Simplified, China)",
        [LocaleCode.JPJapanese]: "Japanese (Japan)",
        [LocaleCode.RURussian]: "Russian (Russia)",
        [LocaleCode.BRPortuguese]: "Portuguese (Brazil)",
      },
      seeMore: "See More",
      getApplication: "Get Application",
      readMore: "Read more",
      getStarted: "Get started",
      learnMore: "Learn more",
    },
    fr: {
      welcome: "Bienvenue",
    },
  },
}));
