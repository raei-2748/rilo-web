export interface ChatMessage {
  id: string;
  sender: "rilo" | "user";
  text: string;
}

export interface ChatChoice {
  text: string;
  nextStepId: string;
}

export interface ChatStep {
  id: string;
  messages: ChatMessage[];
  choices?: ChatChoice[];
  isTerminal?: boolean;
  pathName?: string;
}

export const conversationFlow: Record<string, ChatStep> = {
  step0: {
    id: "step0",
    messages: [
      {
        id: "s0m1",
        sender: "rilo",
        text: "Hey! 💰 $2,400 just hit your account from work. After rent ($850) and your Optus + AGL bills ($187), you've got $1,363 for the next 14 days.",
      },
      {
        id: "s0m2",
        sender: "rilo",
        text: "That's about $97 a day. Want to see how the fortnight's looking?",
      },
    ],
    choices: [
      { text: "Yeah, sounds good 👍", nextStepId: "step1" },
      { text: "That's pretty tight honestly...", nextStepId: "step2" },
    ],
  },

  step1: {
    id: "step1",
    messages: [
      {
        id: "s1m1",
        sender: "rilo",
        text: "Nice one! Quick heads up — your mate Jake's birthday dinner is this Saturday. Last time you went to that Thai place it was around $65.",
      },
      {
        id: "s1m2",
        sender: "rilo",
        text: "Want me to set that aside so it doesn't sneak up on you? That'd bring your daily pace to about $93 for the rest of the fortnight.",
      },
    ],
    choices: [
      { text: "Good idea, set it aside", nextStepId: "step3" },
      { text: "Nah, I'll wing it", nextStepId: "step4" },
    ],
  },

  step2: {
    id: "step2",
    messages: [
      {
        id: "s2m1",
        sender: "rilo",
        text: "No stress, let's work with what you've got. I had a look at your last fortnight — you spent $186 on UberEats and takeaway. That's the biggest chunk after bills.",
      },
      {
        id: "s2m2",
        sender: "rilo",
        text: "Not saying you can't eat out at all — but even cooking 3 extra nights could save you around $70 this fortnight. What do you reckon?",
      },
    ],
    choices: [
      { text: "Yeah, I can cook more 🍳", nextStepId: "step5" },
      { text: "Show me what else I'm spending on", nextStepId: "step6" },
    ],
  },

  step3: {
    id: "step3",
    messages: [
      {
        id: "s3m1",
        sender: "rilo",
        text: "Done! $65 set aside for Saturday. Your daily pace is now $93 across 14 days. You've been smashing it this week — you're actually $12 ahead of pace 🙌",
      },
      {
        id: "s3m2",
        sender: "rilo",
        text: "I'll check in on Wednesday to see how you're tracking. Have a good one, mate!",
      },
    ],
    isTerminal: true,
    pathName: "planner",
  },

  step4: {
    id: "step4",
    messages: [
      {
        id: "s4m1",
        sender: "rilo",
        text: "All good! Just a heads up though — last fortnight a surprise dinner put you $40 over pace by day 8. No judgment, just want to make sure you're set this time.",
      },
      {
        id: "s4m2",
        sender: "rilo",
        text: "Want me to at least send you a reminder on Friday so you can plan ahead?",
      },
    ],
    choices: [
      { text: "Yeah, remind me Friday", nextStepId: "step7" },
      { text: "I'm all good, thanks", nextStepId: "step11" },
    ],
  },

  step5: {
    id: "step5",
    messages: [
      {
        id: "s5m1",
        sender: "rilo",
        text: "Nice one! 🍳 If you keep that up every fortnight, that's about $1,820 a year back in your pocket. Not bad for making some pasta a few nights a week, hey?",
      },
      {
        id: "s5m2",
        sender: "rilo",
        text: "I'll check in mid-week to see how you're going. No stress if you slip up — we'll just adjust. That's the whole point 💪",
      },
    ],
    isTerminal: true,
    pathName: "saver",
  },

  step6: {
    id: "step6",
    messages: [
      {
        id: "s6m1",
        sender: "rilo",
        text: "Here's your last fortnight breakdown:\n\n🍔 Eating out: $186\n☕ Coffee: $62 (about $4.40/day)\n🛒 Woolies/groceries: $94\n🚗 Fuel: $78\n🎮 Subscriptions: $47\n🤷 Other: $112",
      },
      {
        id: "s6m2",
        sender: "rilo",
        text: "The coffee's not as bad as people make out — $4.40 a day is pretty standard. The eating out is where the real opportunity is. Even cutting it to $120 saves you $860 a year, mate.",
      },
    ],
    choices: [
      { text: "That's actually helpful, cheers", nextStepId: "step8" },
      { text: "Don't come for my coffee ☕", nextStepId: "step9" },
    ],
  },

  step7: {
    id: "step7",
    messages: [
      {
        id: "s7m1",
        sender: "rilo",
        text: "You'll hear from me Friday arvo 👍 In the meantime, you're at $97/day. I'll give you a nudge if anything big pops up. Enjoy the fortnight!",
      },
    ],
    isTerminal: true,
    pathName: "reminder",
  },

  step8: {
    id: "step8",
    messages: [
      {
        id: "s8m1",
        sender: "rilo",
        text: "Glad it helps! Want me to set a soft target of $130 for eating out this fortnight? Not a hard limit — just so I can give you a nudge around day 7 if you're trending over.",
      },
    ],
    choices: [
      { text: "Yeah, set that target", nextStepId: "step10" },
      { text: "Nah, just keep me in the loop", nextStepId: "step11" },
    ],
  },

  step9: {
    id: "step9",
    messages: [
      {
        id: "s9m1",
        sender: "rilo",
        text: "Ha! Your coffee's safe, mate ☕ I'm not here to cut everything fun out of your life. Let's focus on the eating out — even a small shift there makes a real difference.",
      },
      {
        id: "s9m2",
        sender: "rilo",
        text: "What if we aimed for $140 on takeaway this fortnight instead of $186? That still leaves room for a couple of nights out.",
      },
    ],
    choices: [
      { text: "Yeah, $140 sounds fair", nextStepId: "step10" },
      { text: "I'll just see how I go", nextStepId: "step11" },
    ],
  },

  step10: {
    id: "step10",
    messages: [
      {
        id: "s10m1",
        sender: "rilo",
        text: "Locked in! I'll check in around day 7 to see how you're tracking. If you're on pace, I'll leave you be. If not, we'll figure it out together. No stress either way 🤙",
      },
      {
        id: "s10m2",
        sender: "rilo",
        text: "Have a good fortnight, mate. You've got this!",
      },
    ],
    isTerminal: true,
    pathName: "target-setter",
  },

  step11: {
    id: "step11",
    messages: [
      {
        id: "s11m1",
        sender: "rilo",
        text: "No worries at all. I'll just keep an eye on things and check in if anything looks off. No pressure, no judgment — just here if you need me 👋",
      },
    ],
    isTerminal: true,
    pathName: "casual",
  },
};
