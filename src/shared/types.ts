import Benefits from "@/scenes/benefits/Benefits";

 export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus'
}

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
}