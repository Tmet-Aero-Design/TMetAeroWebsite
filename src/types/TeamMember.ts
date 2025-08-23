import { Socials } from "@/types/Socials";

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  subteam: string;
  social?: Socials;
}