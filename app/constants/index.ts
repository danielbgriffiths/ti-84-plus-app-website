import {
  CurrencyCode,
  GroupName,
  LocaleCode,
  type QuestionItem,
  QuestionSlug,
  type SelectOption,
} from "~/types";

export function getPrettyGroupName(
  t: (key: string) => string,
  groupName: GroupName,
): string {
  return t(`groupNames.${groupName}`);
}

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  [CurrencyCode.USD]: "$", // US Dollar
  [CurrencyCode.EUR]: "€", // Euro
  [CurrencyCode.JPY]: "¥", // Japanese Yen
  [CurrencyCode.GBP]: "£", // British Pound Sterling
  [CurrencyCode.AUD]: "A$", // Australian Dollar
  [CurrencyCode.CAD]: "C$", // Canadian Dollar
  [CurrencyCode.CHF]: "CHF", // Swiss Franc
  [CurrencyCode.CNY]: "¥", // Chinese Yuan
  [CurrencyCode.SEK]: "kr", // Swedish Krona
  [CurrencyCode.NZD]: "NZ$", // New Zealand Dollar
  [CurrencyCode.KRW]: "₩", // South Korean Won
  [CurrencyCode.SGD]: "S$", // Singapore Dollar
  [CurrencyCode.NOK]: "kr", // Norwegian Krone
  [CurrencyCode.MXN]: "$", // Mexican Peso
  [CurrencyCode.INR]: "₹", // Indian Rupee
  [CurrencyCode.RUB]: "₽", // Russian Ruble
  [CurrencyCode.ZAR]: "R", // South African Rand
  [CurrencyCode.TRY]: "₺", // Turkish Lira
  [CurrencyCode.BRL]: "R$", // Brazilian Real
};

export function getCurrencyTexts(
  t: (key: string) => string,
): Record<CurrencyCode, string> {
  return {
    [CurrencyCode.USD]: t(`currencyTexts.${CurrencyCode.USD}`),
    [CurrencyCode.EUR]: t(`currencyTexts.${CurrencyCode.EUR}`),
    [CurrencyCode.JPY]: t(`currencyTexts.${CurrencyCode.JPY}`),
    [CurrencyCode.GBP]: t(`currencyTexts.${CurrencyCode.GBP}`),
    [CurrencyCode.AUD]: t(`currencyTexts.${CurrencyCode.AUD}`),
    [CurrencyCode.CAD]: t(`currencyTexts.${CurrencyCode.CAD}`),
    [CurrencyCode.CHF]: t(`currencyTexts.${CurrencyCode.CHF}`),
    [CurrencyCode.CNY]: t(`currencyTexts.${CurrencyCode.CNY}`),
    [CurrencyCode.SEK]: t(`currencyTexts.${CurrencyCode.SEK}`),
    [CurrencyCode.NZD]: t(`currencyTexts.${CurrencyCode.NZD}`),
    [CurrencyCode.KRW]: t(`currencyTexts.${CurrencyCode.KRW}`),
    [CurrencyCode.SGD]: t(`currencyTexts.${CurrencyCode.SGD}`),
    [CurrencyCode.NOK]: t(`currencyTexts.${CurrencyCode.NOK}`),
    [CurrencyCode.MXN]: t(`currencyTexts.${CurrencyCode.MXN}`),
    [CurrencyCode.INR]: t(`currencyTexts.${CurrencyCode.INR}`),
    [CurrencyCode.RUB]: t(`currencyTexts.${CurrencyCode.RUB}`),
    [CurrencyCode.ZAR]: t(`currencyTexts.${CurrencyCode.ZAR}`),
    [CurrencyCode.TRY]: t(`currencyTexts.${CurrencyCode.TRY}`),
    [CurrencyCode.BRL]: t(`currencyTexts.${CurrencyCode.BRL}`),
  };
}

export function getLocalCodes(
  t: (key: string) => string,
): Record<LocaleCode, string> {
  return {
    [LocaleCode.USEnglish]: t(`localeTexts.${LocaleCode.USEnglish}`),
    [LocaleCode.ESSpanish]: t(`localeTexts.${LocaleCode.ESSpanish}`),
    [LocaleCode.FRFrench]: t(`localeTexts.${LocaleCode.FRFrench}`),
    [LocaleCode.DEGerman]: t(`localeTexts.${LocaleCode.DEGerman}`),
    [LocaleCode.CNChinese]: t(`localeTexts.${LocaleCode.CNChinese}`),
    [LocaleCode.JPJapanese]: t(`localeTexts.${LocaleCode.JPJapanese}`),
    [LocaleCode.RURussian]: t(`localeTexts.${LocaleCode.RURussian}`),
    [LocaleCode.BRPortuguese]: t(`localeTexts.${LocaleCode.BRPortuguese}`),
  };
}

export const LOCAL_STORAGE_LOCALE_KEY = "ti-84-locale";

export function getPageSizeOptions(t: (key: string) => string): SelectOption[] {
  return [
    { value: 3, label: "3" },
    { value: 6, label: "6" },
    { value: 9, label: "9" },
    { value: 12, label: "12" },
    { value: -1, label: t("all") },
  ];
}

export const GITHUB_URL =
  "https://github.com/danielbgriffiths/ti-84-plus-python-applications";

export function getFrequentlyAskedQuestions(
  t: (key: string) => string,
): Map<QuestionSlug, QuestionItem> {
  return new Map([
    [
      QuestionSlug.HowToUsePythonApplications,
      {
        question: t(
          `landing.info.faqQuestions.${QuestionSlug.HowToUsePythonApplications}`,
        ),
        answer: t(
          `landing.info.faqAnswers.${QuestionSlug.HowToUsePythonApplications}`,
        ),
      },
    ],
    [
      QuestionSlug.SizeLimitPythonApplications,
      {
        question: t(
          `landing.info.faqQuestions.${QuestionSlug.SizeLimitPythonApplications}`,
        ),
        answer: t(
          `landing.info.faqAnswers.${QuestionSlug.SizeLimitPythonApplications}`,
        ),
      },
    ],
    [
      QuestionSlug.DependenciesPythonApplications,
      {
        question: t(
          `landing.info.faqQuestions.${QuestionSlug.DependenciesPythonApplications}`,
        ),
        answer: t(
          `landing.info.faqAnswers.${QuestionSlug.DependenciesPythonApplications}`,
        ),
      },
    ],
    [
      QuestionSlug.UploadApplications,
      {
        question: t(
          `landing.info.faqQuestions.${QuestionSlug.UploadApplications}`,
        ),
        answer: t(`landing.info.faqAnswers.${QuestionSlug.UploadApplications}`),
      },
    ],
    [
      QuestionSlug.UseApplicationsInClass,
      {
        question: t(
          `landing.info.faqQuestions.${QuestionSlug.UseApplicationsInClass}`,
        ),
        answer: t(
          `landing.info.faqAnswers.${QuestionSlug.UseApplicationsInClass}`,
        ),
      },
    ],
    [
      QuestionSlug.VerifyAccuracyPythonApplications,
      {
        question: t(
          `landing.info.faqQuestions.${QuestionSlug.VerifyAccuracyPythonApplications}`,
        ),
        answer: t(
          `landing.info.faqAnswers.${QuestionSlug.VerifyAccuracyPythonApplications}`,
        ),
      },
    ],
  ]);
}
