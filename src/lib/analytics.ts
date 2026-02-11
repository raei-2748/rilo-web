type EventProperties = Record<string, string | number | boolean>;

function getPostHog() {
  if (typeof window === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (window as any).posthog ?? null;
}

export function trackEvent(event: string, properties?: EventProperties) {
  const posthog = getPostHog();
  if (posthog?.capture) {
    posthog.capture(event, properties);
  }
}

export function trackPageView() {
  trackEvent("page_view", {
    referrer: document.referrer,
    device_type: window.innerWidth < 640 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop",
  });
}

export function trackHeroCtaClick(ctaText: string) {
  trackEvent("hero_cta_click", { cta_text: ctaText, cta_position: "hero" });
}

export function trackNavbarCtaClick(scrollPosition: number) {
  trackEvent("navbar_cta_click", { scroll_position: scrollPosition });
}

export function trackDemoView(scrollDepth: number) {
  trackEvent("demo_view", { scroll_depth: scrollDepth });
}

export function trackDemoStart(timeOnPage: number) {
  trackEvent("demo_start", { time_on_page: timeOnPage });
}

export function trackChoiceSelected(stepNumber: number, choiceText: string, pathName: string) {
  trackEvent("choice_selected", { step_number: stepNumber, choice_text: choiceText, path_name: pathName });
}

export function trackDemoComplete(pathTaken: string, totalSteps: number, timeInDemo: number) {
  trackEvent("demo_complete", { path_taken: pathTaken, total_steps: totalSteps, time_in_demo: timeInDemo });
}

export function trackDemoRestart(previousPath: string) {
  trackEvent("demo_restart", { previous_path: previousPath });
}

export function trackWaitlistFormView(timeOnPage: number) {
  trackEvent("waitlist_form_view", { time_on_page: timeOnPage });
}

export function trackWaitlistFormFocus(sourceCta: string) {
  trackEvent("waitlist_form_focus", { source_cta: sourceCta });
}

export function trackWaitlistSubmit(payFrequency: string, hasStressText: boolean, hasReferral: boolean) {
  trackEvent("waitlist_submit", { pay_frequency: payFrequency, has_stress_text: hasStressText, has_referral: hasReferral });
}

export function trackWaitlistSuccess(timeFromPageLoad: number) {
  trackEvent("waitlist_success", { time_from_page_load: timeFromPageLoad });
}

export function trackShareClick(shareMethod: string) {
  trackEvent("share_click", { share_method: shareMethod });
}
