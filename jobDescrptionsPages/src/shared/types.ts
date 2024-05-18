export enum SelectedPage {
  FindJobs = "FindsJobs",
  BrowseCompagnies = "BrowseCompagnies",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
export interface JobsType {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  button1Text: string;
  button2Text: string;
  button3Text: string;
}