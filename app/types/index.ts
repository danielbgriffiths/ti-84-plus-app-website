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
  DEGerman = "de_DE",
  CNChinese = "zh_CN",
  RURussian = "ru_RU",
}

export interface SelectOption {
  value: number | string;
  label: string;
}

export type QuestionItem = {
  question: string;
  answer: string;
};

export interface ApplicationMeta {
  id: number;
  name: string;
  groupName: GroupName;
  views: number;
  downloads: number;
  ratingsCount: number;
  ratingsSum: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApplicationMetaApi {
  id: number;
  name: string;
  group_name: GroupName;
  views: number;
  downloads: number;
  ratings_count: number;
  ratings_sum: number;
  created_at: Date;
  updated_at: Date;
}

export type SqlLiteErrorCallback = (error: Error | null) => void;

export interface UseApplicationMetaApiBindings {
  data: Ref<ApplicationMeta | undefined>;

  getApplicationMeta: () => Promise<void>;
  updateViews: () => Promise<void>;
  updateDownloads: () => Promise<void>;
  updateRatings: (rating: number) => Promise<void>;
}
