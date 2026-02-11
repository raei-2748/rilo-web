export interface ConversationMessage {
  id: string;
  sender: "rilo" | "user";
  text: string;
  choices?: UserChoice[];
}

export interface UserChoice {
  id: string;
  text: string;
  nextStepId: string;
}

export interface ConversationStep {
  id: string;
  messages: ConversationMessage[];
  isTerminal?: boolean;
}

export interface WaitlistFormData {
  email: string;
  pay_frequency?: "fortnightly" | "weekly" | "monthly" | "not_sure";
  biggest_stress?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referred_by?: string;
}

export interface WaitlistResponse {
  status: "ok" | "error";
  referral_code?: string;
  message: string;
}
