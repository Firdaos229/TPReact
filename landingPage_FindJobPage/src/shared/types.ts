/*export enum SelectedPage {
  FindJobs = "findjobs",
  BrowseCompanies = "browsecompanies",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
  Home = "Home",
}*/

export interface CategoryType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface JobType {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  button1Text: string;
  button2Text: string;
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
export type SelectedPage = "findjobs" | "browsecompanies" | "login" | "signup";
