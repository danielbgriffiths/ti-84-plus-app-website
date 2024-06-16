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
