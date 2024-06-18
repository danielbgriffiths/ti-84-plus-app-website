export enum GroupName {
  Calculus = "calculus",
  Trigonometry = "trigonometry",
  PreCalculus = "pre_calculus",
}

export interface AppItem {
  name: string;
  title: string;
  description: string;
  uri: string;
}

export type AppGroup = Map<GroupName, AppItem>;

export enum QuestionSlug {
  HowToUsePythonApplications = "howToUsePythonApplications",
  SizeLimitPythonApplications = "sizeLimitPythonApplications",
  DependenciesPythonApplications = "dependenciesPythonApplications",
  UploadApplications = "uploadApplications",
  UseApplicationsInClass = "useApplicationsInClass",
  VerifyAccuracyPythonApplications = "verifyAccuracyPythonApplications",
}

export enum CurrencyCode {
  USD = "USD",
  EUR = "EUR",
  JPY = "JPY",
  GBP = "GBP",
  AUD = "AUD",
  CAD = "CAD",
  CHF = "CHF",
  CNY = "CNY",
  SEK = "SEK",
  NZD = "NZD",
  KRW = "KRW",
  SGD = "SGD",
  NOK = "NOK",
  MXN = "MXN",
  INR = "INR",
  RUB = "RUB",
  ZAR = "ZAR",
  TRY = "TRY",
  BRL = "BRL",
}

export enum LocaleCode {
  USEnglish = "en_US",
  ESSpanish = "es_ES",
  FRFrench = "fr_FR",
  DEGerman = "de_DE",
  CNChinese = "zh_CN",
  JPJapanese = "ja_JP",
  RURussian = "ru_RU",
  BRPortuguese = "pt_BR",
}

export interface SelectOption {
  value: number | string;
  label: string;
}

export type QuestionItem = {
  question: string;
  answer: string;
};
