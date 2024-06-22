import { CurrencyCode, GroupName, LocaleCode, QuestionSlug } from "~/types";

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
          tabs: {
            pageSize: "Page Size",
          },
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
          faqAnswers: {
            [QuestionSlug.HowToUsePythonApplications]:
              "Using Python applications with your TI-84 Plus CE is straightforward. First, ensure your calculator is updated with the latest operating system that supports Python. Then, download the Python scripts from our website, transfer them to your calculator using TI Connect CE software, and follow the instructions provided with each script.",
            [QuestionSlug.SizeLimitPythonApplications]:
              "Yes, there is a size limit imposed by the calculator's memory. However, our Python applications are optimized to be compact while delivering powerful functionality. Each script's size is indicated on our website for transparency.",
            [QuestionSlug.DependenciesPythonApplications]:
              "Due to the calculator's limited environment, Python applications for the TI-84 Plus typically do not support external dependencies like traditional Python packages. However, our scripts are self-contained and designed to operate independently on the calculator.",
            [QuestionSlug.UploadApplications]:
              "You can upload multiple Python applications to your calculator as long as they fit within the available memory. We recommend managing your applications based on your calculator's storage capacity to ensure optimal performance.",
            [QuestionSlug.UseApplicationsInClass]:
              "Generally, the use of calculator applications in class depends on your school's policies. Our Python scripts are educational tools designed to aid in learning pre-calculus, trigonometry, and calculus. Check with your teacher or school administration for specific guidelines on calculator use during class.",
            [QuestionSlug.VerifyAccuracyPythonApplications]:
              "Ensuring accuracy is paramount to us. Our Python applications undergo rigorous testing and verification by experienced mathematics educators and software developers. We also encourage user feedback to continuously improve and refine our scripts.",
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
        title: "Improving the Scientific Calculator Experience",
        subTitle:
          "The largest and most developer-friendly collection of continuously growing, open-source, and tested and verified Python applications for your TI-84.",
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
        createDonation: "Create Donation",
        grateful: "We are grateful for your support.",
        privacy: "No personal information is collected during donations.",
      },
      404: {
        pageNotFound: "Page Not Found",
        pageNotFoundDescription:
          "Sorry, we couldn’t find the page you’re looking for.",
        backToHome: "Go back home",
      },
      donateReturn: {
        thankYou: "Thank You!",
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
      all: "All",
      createDownload: "Create Download",
      category: "Category",
      description: "Description",
      testCoverage: "Test Coverage",
      files: "Files",
      showing: "Showing",
      to: "to",
      of: "of",
      results: "results",
      views: "{count} views",
      downloads: "{count} downloads",
      created: "Created {date}",
      ratings: "{count} ratings",
      share: "Share",
      github: "Github",
      groupNames: {
        [GroupName.Calculus]: "Calculus",
        [GroupName.Trigonometry]: "Trigonometry",
        [GroupName.PreCalculus]: "Pre Calculus",
      },
      application: {
        info: {
          applicationInformation: "Application Information",
          documentationCaption: "Documentation for {name} application.",
        },
      },
    },
  },
}));
