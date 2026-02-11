# PRD: Rilo Waitlist Landing Page v2

## 0. Document Purpose

This PRD is the **Blueprint (B)** artifact for the BLAST framework. It serves as the project constitution for building Rilo's waitlist landing page. Every subsequent phase (Link, Architect, Style, Trigger) must reference this document as the source of truth. No functional code should be written before this Blueprint is finalized.

---

## 1. Product Identity

**Product name:** Rilo
**Surface:** Single-page waitlist landing page (standalone, not part of the React Expo app codebase)
**What Rilo is:** An AI payday spending coach for Australians
**What Rilo is NOT:** A budgeting app, a bank, a spending tracker, a financial dashboard

**One-line value proposition:**
> Your AI mate that helps you crush it between paydays.

**Problem statement this page must communicate:**
> "I know I should budget, but I feel overwhelmed and don't know where to start. I need help making it to payday, not planning for next month."

**10-second comprehension test:** A visitor should understand within 10 seconds that Rilo is an AI that talks to you about your spending between paydays, not an app that shows you charts.

---

## 2. Strategic Context (Why This Page Exists)

This is a demand validation artifact. The page exists to answer one question: **Will financially stressed Australians give us their email address after seeing what Rilo does?**

Key market facts that inform every copy and design decision:

- 82% of Australian Gen Zs report financial stress
- 49% say "feeling overwhelmed" is their biggest barrier to financial confidence
- 52% of Australian workers are paid fortnightly, creating a natural coaching rhythm
- Cleo proved conversational AI coaching works ($186M revenue run rate) but abandoned Australia in 2022
- Up Bank's Spendable Balance shows what you can spend but never coaches you on how to spend wisely
- No Australian app currently combines conversational AI + payday-cycle awareness + behavioral coaching

The page is NOT trying to:
- Explain every feature Rilo will have
- Sell a subscription
- Compete with Up Bank on data display
- Look like a generic SaaS product

The page IS trying to:
- Make the coaching concept tangible through an interactive demo
- Trigger emotional recognition ("that's exactly my problem")
- Collect high-intent email signups
- Feel unmistakably Australian

---

## 3. Target User

**Primary:** Australians aged 22 to 32 who earn a fortnightly paycheck and consistently feel anxious about whether they'll make it to payday. They have downloaded a budgeting app before, used it for a week, then stopped because it just showed them what they already knew (they spent too much on UberEats) without helping them do anything about it.

**Secondary:** Slightly older Australians (28 to 38) who are more financially stable but still want proactive nudges to optimize their spending between paydays.

**Who this page is NOT for:** Finance enthusiasts who love spreadsheets. YNAB power users. People looking for investment advice. People who need debt counseling.

**Psychographic profile of the primary user:**
- Checks their bank balance with mild dread
- Has said "I'll start budgeting next pay cycle" more than once
- Knows they spend too much on eating out but feels judged when apps highlight it
- Would respond well to a friendly, no-judgment nudge at 6pm on Friday saying "want to cook tonight?"
- Uses TikTok and Reddit, skeptical of polished corporate marketing
- Trusts Australian products over American imports

---

## 4. Goals and Success Metrics

### Primary Goal
Maximize qualified waitlist signups from paid traffic (Meta ads) and organic traffic (Reddit, TikTok).

### Success Metrics

| Metric | Target | Kill Threshold | Measurement |
|--------|--------|----------------|-------------|
| Waitlist conversion rate | 8% or above of unique visitors | Below 3% after 14 days | Analytics |
| Hero CTA click-through rate | 20% or above | Below 10% | Click tracking |
| Demo engagement rate | 50% or above of visitors interact with chat demo | Below 25% | Custom event |
| Demo completion rate | 30% or above of demo starters finish a conversation path | Below 15% | Custom event |
| Signup completion rate | 70% or above of form opens result in submission | Below 50% | Funnel tracking |
| Time to understand | Under 10 seconds (qualitative, user testing) | N/A | Manual testing |

### Decision Framework
These metrics feed the existing 14-day GO/KILL framework:
- **GO (build MVP):** 3% or above waitlist conversion AND 50% or above demo engagement
- **ITERATE:** Between 1.5% and 3% conversion, adjust copy/demo/targeting
- **KILL:** Below 1.5% conversion after two iteration cycles

---

## 5. Page Structure and Content Hierarchy

The page follows a single scroll with six sections. No multi-page navigation. No pricing page. No team page. Every section exists to move the visitor closer to signing up.

### Section Order (top to bottom):

1. **Navigation bar** (fixed)
2. **Hero section** (value prop + primary CTA)
3. **Interactive chat demo** (the centerpiece, most important section)
4. **Value proposition cards** (three cards, not a features grid)
5. **Social proof / credibility strip** (lightweight)
6. **Waitlist capture section** (dedicated signup area with form)
7. **Footer** (minimal)

### What was removed from v1 PRD and why:
- **Pricing section:** Removed. We're not selling yet. Showing pricing on a waitlist page creates confusion about whether the product exists. Pricing comes post-MVP.
- **Team section:** Removed. Solo founder. A team section with one person undermines credibility more than it helps. Replace with a brief "Built in Sydney" line in the footer.
- **Features grid (4 columns):** Replaced with 3 value proposition cards. A 4-column features grid implies a mature product. Three punchy cards communicate the core concept without overpromising.
- **Neural node hero animation:** Replaced with a simpler, warmer visual treatment. Neural nodes communicate "enterprise AI tool," not "friendly spending mate." The interactive chat demo IS the visual wow factor.

---

## 6. Detailed Section Specifications

### 6.1 Navigation Bar

**Purpose:** Persistent access to the waitlist CTA from any scroll position.

**Layout:**
- Fixed top, full width
- Left: "Rilo" wordmark (Playfair Display Bold Italic, or a warmer alternative if testing shows Playfair feels too corporate)
- Center: No navigation links. Single page, no sections worth linking to separately.
- Right: "Join the waitlist" pill button (primary CTA style)

**Behavior:**
- Transparent background on page load, gains subtle backdrop blur on scroll
- CTA button scrolls to Section 6 (waitlist capture) or opens inline form
- On mobile: logo left, CTA button right, no hamburger menu (nothing to put in it)

**Acceptance criteria:**
- CTA is always visible without scrolling on any device
- Navbar does not obscure content when scrolling
- Tap target for CTA meets 44px minimum on mobile

---

### 6.2 Hero Section

**Purpose:** Communicate what Rilo is in under 10 seconds. Create emotional recognition of the problem. Drive clicks to the demo or directly to the waitlist.

**Layout:**
- Full viewport height on desktop, auto height on mobile
- Centered text block
- Headline, subheadline, two CTA buttons, subtle background treatment

**Copy (draft, to be A/B tested):**

**Headline option A:**
> Stop guessing if you can afford it.

**Headline option B:**
> Make it to payday without the stress.

**Headline option C:**
> Your AI mate for the 14 days between paydays.

**Subheadline:**
> Rilo is an AI spending coach that checks in on payday, paces your spending, and nudges you before you blow the budget. Not another tracking app. An actual coach.

**CTA group:**
- Primary: "See how it works" (scrolls to interactive demo)
- Secondary: "Join the waitlist" (scrolls to signup section)

**Background treatment:**
- Dark base (#0a0a0a or slightly warmer, like #0d0d0d)
- Subtle dot grid overlay (retained from v1, this works)
- Warm gold glow (soft, not the harsh central glow from v1; more like ambient warmth)
- No neural nodes, no satellite cards, no SVG bezier curves

**Acceptance criteria:**
- Headline is readable in under 3 seconds
- Subheadline clarifies the "how" in under 7 seconds
- Primary CTA is visually dominant
- Works on mobile without horizontal scrolling
- No animations that delay content visibility

---

### 6.3 Interactive Chat Demo (HIGHEST PRIORITY SECTION)

**Purpose:** This is the single most important element on the page. It makes the abstract concept of "AI payday coaching" tangible and experiential. A visitor who interacts with this demo understands Rilo in a way no amount of copy can achieve.

**What the demo demonstrates:**
1. **Rilo initiates** (proactive, not reactive)
2. **Concrete numbers** ($2,400 paycheck, $93/day, not vague "we help you budget")
3. **Australian financial reality** (fortnightly pay, Optus, AGL, AUD amounts)
4. **Forward-looking intelligence** (birthday dinner reminder, spending pacing)
5. **Warm, mate-like tone** (not clinical, not sassy-American, not preachy)
6. **Behavioral nudges without judgment** (compromise over restriction)
7. **Quantifiable ROI moments** ("that's $2,400/year, mate")

**Existing asset:** A complete RiloChatDemo.tsx component has already been built with:
- 12-step branching conversation flow
- Typing animations (30ms per character)
- User choice buttons
- Auto-scroll
- Reset functionality
- Multiple conversation paths (empathy, optimization, no-judgment)
- Five conversation variant files for different personas

**Layout:**
- Section headline: "See Rilo in action" or "This is what payday coaching looks like"
- Phone mockup frame containing the chat interface (centered)
- Below the phone: 2 to 3 small annotation callouts explaining what's happening (e.g., "Rilo checks in on payday," "Paces your spending across 14 days," "No judgment, just nudges")
- Below annotations: CTA button "Want this for your paydays? Join the waitlist"

**Phone mockup specifications:**
- Rounded rectangle with device-like proportions (approximately 375px wide, 667px tall on desktop)
- Dark bezel frame (matches page background)
- Status bar at top (time, battery icon) for realism
- Chat interface fills the screen area
- On mobile: phone frame scales down or is removed entirely (chat renders natively)

**Chat demo behavior:**
- Auto-starts with first Rilo message after a 1-second delay when section scrolls into view
- User taps choice buttons to progress the conversation
- Each Rilo message appears with typing indicator (three dots) followed by character-by-character reveal
- Conversation branches based on user choices (minimum 3 unique paths to terminal state)
- Terminal states show a "Start over" button and a "Join the waitlist" CTA
- Analytics fires on: demo_view, demo_start (first interaction), choice_selected (with choice text and step number), demo_complete, demo_restart

**Conversation flow (existing, from prior work):**
```
Step 0: Payday message ("Hey! $2,400 just hit...")
  ├── "Yeah, seems good" → Step 1 (birthday reminder)
  └── "That's tight..." → Step 2 (empathy + spending insight)

Step 1: Birthday reminder
  ├── "Good idea" → Step 3 (pacing commitment)
  └── "Nah, I'll wing it" → Step 4 (risk flag)

Step 2: Empathy path
  ├── "Yeah, I can cook" → Step 5 (positive reinforcement)
  └── "Show me my spending" → Step 6 (data insight)

Step 3: SUCCESS STATE (pacing commitment, $85/day)
Step 4: Risk flag → choice to set aside or get reminder
Step 5: SUCCESS STATE (positive reinforcement)
Step 6: Data insight → ROI moment
Step 7: Reminder confirmation
Step 8: Budget suggestion
Step 9: No-judgment compromise
Step 10: WIN STATE (commitment + check-in promise)
Step 11: SOFT CLOSE (no pressure, door open)
```

**Tone calibration for demo messages:**
- Use "mate," "nice one," "no stress," "you've been smashing it"
- Reference Australian brands: Optus, AGL, Woolies, UberEats
- Use dollar amounts that feel realistic for a $60K to $80K salary
- Never condescend. Never use "you should." Always frame as collaborative: "want to..." "what if we..."

**Acceptance criteria:**
- Demo loads and is interactive within 2 seconds of scrolling into view
- Works on iOS Safari, Android Chrome, desktop Chrome/Firefox/Safari
- Typing animation feels natural, not robotic
- User can complete a full conversation path in under 60 seconds
- Choice buttons have clear hover/active states
- Auto-scroll keeps the latest message visible
- Demo does not auto-play sound or video
- Analytics events fire correctly for all interactions
- On slow connections, demo degrades gracefully (shows static conversation if JS fails)

---

### 6.4 Value Proposition Cards

**Purpose:** Reinforce the three things that make Rilo different from every other Australian finance app. These are NOT feature descriptions. They are positioning statements.

**Layout:**
- Three cards in a row on desktop, stacked on mobile
- Glassmorphic card style (retained from v1 design system)
- Each card: icon (simple, warm), headline (bold, short), body (2 sentences max)

**Card 1: "Coach, not tracker"**
- Icon: speech bubble or conversation icon
- Headline: A coach, not a dashboard
- Body: Rilo talks to you about your money. It doesn't just show you where it went. Think personal trainer, not bathroom scale.

**Card 2: "Built for payday"**
- Icon: calendar or clock icon
- Headline: Built around your pay cycle
- Body: Rilo knows when you get paid and paces your spending across every fortnight. No more guessing on day 12 whether you'll make it.

**Card 3: "Actually Australian"**
- Icon: map pin or flag
- Headline: Made for Australians, by Australians
- Body: Fortnightly pay. Superannuation. HECS debt. BNPL. Rilo understands your financial reality because it was built in it.

**Acceptance criteria:**
- Cards are scannable in under 5 seconds total
- No card exceeds 3 lines of body text on desktop
- Icons are consistent in style and weight
- Cards do not use the word "budget" or "budgeting"

---

### 6.5 Social Proof / Credibility Strip

**Purpose:** Provide lightweight trust signals without fabricating testimonials or metrics we don't have yet.

**Options (pick 1 to 2 for launch):**

**Option A: Problem validation stats**
> "82% of Gen Z Australians report financial stress. 49% say feeling overwhelmed is their biggest barrier. Rilo exists to change that."

**Option B: Waitlist counter**
> "[X] Australians are already on the waitlist"
(Only show once count exceeds 100. Below that, omit this section entirely.)

**Option C: Builder credibility**
> "Built in Sydney. Backed by research from ASIC MoneySmart. Launching [month]."

**Layout:**
- Single line or small block, centered
- Understated typography (Inter, smaller weight)
- No fake logos, no "as seen in" unless actually featured

**Acceptance criteria:**
- Every claim is factually accurate and sourceable
- Section can be toggled off entirely via a config flag
- Does not slow page load

---

### 6.6 Waitlist Capture Section

**Purpose:** Convert interested visitors into email signups. This is the revenue-relevant action.

**Layout:**
- Section headline: "Get early access" or "Be first in line"
- Subheadline: "We're launching soon. Drop your email and we'll let you know when Rilo is ready."
- Email input field with submit button (inline, not modal)
- Optional fields below (collapsed by default, expandable)
- Privacy reassurance text below form

**Form fields:**

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| Email | Yes | Email input | Inline validation, clear error states |
| Pay frequency | No | Dropdown | Fortnightly / Weekly / Monthly / Not sure |
| Biggest money stress | No | Short text (100 char max) | Helps with persona segmentation and copy testing |
| Referral source | Hidden | From UTM params | utm_source, utm_medium, utm_campaign, utm_content, utm_term |

**Why these fields and not others:**
- "Pay frequency" validates the core assumption (do our signups actually get paid fortnightly?) without friction
- "Biggest money stress" gives qualitative data for copy iteration and early user interviews
- Role/company/school (from v1) removed because they're irrelevant for a consumer payday coach
- "How soon do you need it?" (from v1) removed because everyone will say "now" and it's not actionable

**Post-signup state:**
- Instant success message: "You're in! We'll be in touch before launch."
- Share prompt: "Know someone who stresses about money between paydays? Share the link."
- Copy-to-clipboard share link
- Optional: "Follow @rilo on TikTok for payday tips" (only if account exists at launch)

**Acceptance criteria:**
- Form submits in under 1 second
- Email validation catches obvious errors (no @, no domain) inline before submit
- Duplicate emails are handled gracefully (show success, don't error)
- Form works with keyboard only (tab through fields, enter to submit)
- Mobile keyboard type is correct (email keyboard for email field)
- Success state is visually distinct and feels rewarding
- Share link includes referral token if referral system is active, plain link otherwise

---

### 6.7 Footer

**Purpose:** Legal compliance, last-chance CTA, and credibility.

**Layout:**
- Simple, two-column or centered layout
- Left: "Rilo" wordmark + "Built in Sydney" + year
- Right: Privacy Policy link, Terms link, Contact email
- Optional: Repeat "Join the waitlist" CTA if visitor has scrolled past Section 6

**Acceptance criteria:**
- Privacy and Terms links are present and functional (even if they point to placeholder pages initially)
- Contact email is visible
- Footer does not contain social media icons unless accounts are active
- Footer does not contain navigation links (single page, no need)

---

## 7. Design System

### 7.1 Overall Direction

The v1 design spec (gold/black luxury glassmorphism with neural nodes) is partially retained but adjusted for warmth and approachability. The target aesthetic is **"premium but friendly"** rather than "luxury enterprise tool." Think: a well-designed fintech app that doesn't take itself too seriously, not a law firm website.

### 7.2 Colors

**Background:**
- Base: #0d0d0d (slightly warmer than #0a0a0a)
- Dot overlay: white at 6% opacity (slightly softer than v1's 8%)

**Accent palette (retained from v1, works well):**
- Base Gold: #a78b71
- Light Gold: #c9b8a0
- Hover Gold: #e8d5b7

**Text:**
- Primary: #f5f5f5 (slightly off-white, softer than pure white)
- Secondary: #9ca3af (gray-400 equivalent)
- Muted: #6b7280 (gray-500 equivalent)

**Semantic:**
- Success/positive: #4ade80 (green-400, for demo typing indicator and success states)
- Warning: #fbbf24 (amber-400, for spending alerts in demo)
- Error: #f87171 (red-400, for form validation)

**Changes from v1:**
- Background shifted from #0a0a0a to #0d0d0d (warmer)
- Primary text shifted from pure white to #f5f5f5 (easier on the eyes)
- Dot overlay reduced from 8% to 6% (less clinical)
- Added semantic colors for functional states

### 7.3 Typography

**Headings:** Playfair Display Italic (retained from v1)
- Hero headline: clamp(2rem, 6vw, 4.5rem) (reduced from v1's 6rem max, which was overwhelming)
- Section headlines: clamp(1.5rem, 4vw, 2.5rem)

**Body and UI:** Inter (300 to 700 weight, retained from v1)
- Body text: 16px / 1.6 line height
- Small labels: 12px, uppercase, letter-spacing 0.1em

**Chat demo text:** Inter 400
- Rilo messages: 15px
- User messages: 15px
- Typing indicator: 14px

**Alternative consideration:** If user testing reveals Playfair Display feels too formal for the target audience (Gen Z, 22 to 32), test swapping to a friendlier serif like DM Serif Display or keeping Inter for everything with weight variation. Flag this as an A/B test candidate.

### 7.4 Glassmorphism (retained from v1, tuned)

- Card background: rgba(255, 255, 255, 0.03)
- Backdrop blur: blur(10px)
- Border: 1px solid rgba(255, 255, 255, 0.08) (reduced from 0.1 for subtlety)
- Border radius: 20px to 32px (reduced from 24px to 48px for consistency)

### 7.5 Spacing and Layout

- Max content width: 1200px
- Section vertical padding: 80px to 120px
- Card gap: 24px
- Mobile horizontal padding: 20px

### 7.6 Animation and Motion

**Defaults:**
- Transition timing: cubic-bezier(0.4, 0, 0.2, 1)
- Transition duration: 200ms for interactions, 400ms for entrances
- Entrance animations: fade-up with 20px translate, staggered by 100ms per element

**Chat demo specific:**
- Typing indicator: three dots with staggered pulse animation
- Message reveal: character by character at 30ms intervals
- Choice buttons: fade in after message completes, 200ms stagger between buttons
- Auto-scroll: smooth scroll to latest message, 300ms duration

**Reduced motion:**
- All animations disable when prefers-reduced-motion is enabled
- Chat demo shows messages instantly without typing animation
- Page loads with all content visible, no entrance animations

**Performance rules:**
- No animation on elements outside the viewport
- Demo animations throttle to 30fps on low-power devices
- Total animation CPU usage should not cause frame drops on a 3-year-old phone

---

## 8. Technical Architecture (BLAST: Architect Phase)

### 8.1 Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js (static export) or Astro | Fast, SEO-friendly, separates landing page from app codebase |
| Styling | Tailwind CSS | Matches existing skills, fast iteration |
| Chat demo | React component (existing RiloChatDemo.tsx) | Already built and tested |
| Hosting | Vercel or Netlify | Free tier sufficient, fast deploys, built-in analytics |
| Waitlist backend | Supabase | Free tier handles this scale, Postgres for structured data, API for form submission |
| Analytics | PostHog or Plausible | Privacy-friendly, event tracking, funnel analysis |
| Email (post-signup) | Resend or Loops | Transactional confirmation + future drip sequences |

**Why NOT these alternatives:**
- Plain HTML: loses React component reuse (chat demo is React)
- React Expo web: mixing landing page with app codebase creates deployment coupling
- Firebase: over-engineered for a waitlist, Supabase's Postgres is more useful long-term
- Google Analytics: privacy concerns for the audience, PostHog self-hosted option is better

### 8.2 Data Model (Supabase)

```sql
-- Waitlist signups table
CREATE TABLE waitlist_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  pay_frequency TEXT, -- 'fortnightly', 'weekly', 'monthly', 'not_sure'
  biggest_stress TEXT, -- max 200 chars
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  utm_term TEXT,
  referral_code TEXT UNIQUE DEFAULT encode(gen_random_bytes(6), 'hex'),
  referred_by TEXT REFERENCES waitlist_signups(referral_code),
  ip_hash TEXT, -- sha256 of IP for rate limiting, not raw IP
  created_at TIMESTAMPTZ DEFAULT NOW(),
  marketing_consent BOOLEAN DEFAULT TRUE,
  
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Index for deduplication and lookups
CREATE INDEX idx_waitlist_email ON waitlist_signups(email);
CREATE INDEX idx_waitlist_referral ON waitlist_signups(referral_code);
CREATE INDEX idx_waitlist_created ON waitlist_signups(created_at DESC);

-- Row-level security: only insert, no read from client
ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON waitlist_signups
  FOR INSERT TO anon WITH CHECK (true);
```

### 8.3 API Endpoints

**POST /api/waitlist** (or Supabase direct insert via JS client)

Request:
```json
{
  "email": "user@example.com",
  "pay_frequency": "fortnightly",
  "biggest_stress": "I always run out by day 10",
  "utm_source": "reddit",
  "utm_medium": "organic",
  "utm_campaign": "ausfinance_launch",
  "referred_by": "a1b2c3"
}
```

Response (success):
```json
{
  "status": "ok",
  "referral_code": "d4e5f6",
  "message": "You're on the list!"
}
```

Response (duplicate):
```json
{
  "status": "ok",
  "message": "You're already on the list!"
}
```

**Rate limiting:** 5 submissions per IP per hour. Use Supabase Edge Function or Vercel middleware.

**Bot prevention:** Honeypot field (hidden input that bots fill, humans don't). No CAPTCHA (friction kills conversion).

### 8.4 Analytics Events

| Event | Trigger | Properties |
|-------|---------|------------|
| page_view | Page load | utm params, referrer, device type |
| hero_cta_click | Click "See how it works" or "Join the waitlist" in hero | cta_text, cta_position |
| demo_view | Demo section enters viewport | scroll_depth |
| demo_start | First user interaction with demo | time_on_page |
| choice_selected | User clicks a choice button | step_number, choice_text, path_name |
| demo_complete | User reaches a terminal state | path_taken, total_steps, time_in_demo |
| demo_restart | User clicks "Start over" | previous_path |
| waitlist_form_view | Waitlist section enters viewport | time_on_page |
| waitlist_form_focus | User focuses email input | source_cta (which CTA brought them here) |
| waitlist_submit | Form submitted | pay_frequency, has_stress_text, has_referral |
| waitlist_success | Confirmation shown | time_from_page_load |
| share_click | User clicks share/copy link | share_method |
| navbar_cta_click | Click navbar "Join the waitlist" | scroll_position |

### 8.5 SEO

- Page title: "Rilo | Your AI Payday Spending Coach for Australians"
- Meta description: "Stop guessing if you can afford it. Rilo is an AI coach that checks in on payday, paces your spending, and nudges you before you blow the budget. Join the waitlist."
- H1: Hero headline (only one)
- H2: Each section headline
- Open Graph image: Custom designed card showing the chat demo mockup with headline text
- Canonical URL: https://riloapp.com (or chosen domain)
- robots.txt: allow all
- No structured data needed for a waitlist page

---

## 9. Accessibility Requirements

- Color contrast: WCAG AA minimum (4.5:1 for body text, 3:1 for large text)
- Focus states: visible outline on all interactive elements (gold outline, 2px, offset 2px)
- Keyboard navigation: full page usable via Tab, Enter, and Space
- Screen reader: form inputs have associated labels, error messages are announced, demo choices have aria-labels
- Reduced motion: all animations disabled when prefers-reduced-motion is set
- Chat demo: screen readers should be able to read the conversation as a list of messages with speaker identification
- Touch targets: minimum 44px on mobile for all tappable elements

---

## 10. Performance Requirements

| Metric | Target |
|--------|--------|
| Largest Contentful Paint (LCP) | Under 2.0s |
| Cumulative Layout Shift (CLS) | Under 0.1 |
| Time to First Byte (TTFB) | Under 0.5s |
| First Input Delay (FID) | Under 100ms |
| Total page weight | Under 500KB (excluding fonts) |

- Fonts: preload Inter 400 and 700, Playfair Display Italic
- Images: lazy load anything below the fold, use WebP with JPEG fallback
- Chat demo: lazy load component, initialize on scroll-into-view
- No third-party scripts that block render (analytics loads async)
- Lighthouse score target: 90+ on all four categories

---

## 11. Security and Privacy

- Store emails in Supabase with row-level security (insert only, no client-side reads)
- Hash IP addresses before storage (sha256, not reversible)
- Display Privacy Policy and Terms links in footer (required)
- No marketing emails until explicit consent (default is true, but respects Australian Spam Act 2003)
- Honeypot field for bot prevention
- HTTPS enforced on all pages
- No third-party tracking pixels (no Facebook pixel, no Google Analytics) unless explicitly chosen and disclosed
- User can request email deletion via contact email

---

## 12. Copy Requirements and Tone Guide

### Tone
- **Warm, not corporate.** Write like you're texting a mate who asked for money advice, not presenting to investors.
- **Concrete, not vague.** Always use specific numbers and scenarios over abstract claims.
- **Confident, not hype.** "Rilo helps you make it to payday" not "Rilo is revolutionizing personal finance."
- **Australian, not American.** Fortnightly not biweekly. Mate not buddy. Pay cycle not paycheck. Woolies not Walmart.
- **Empathetic, not preachy.** Never imply the user is bad with money. They're overwhelmed, not irresponsible.

### Words to use
payday, fortnight, pay cycle, coach, nudge, mate, nice one, no stress, you've got this, pacing, check-in

### Words to avoid
budget (too loaded), track/tracking (that's what free apps do), revolutionary, cutting-edge, leverage, synergy, optimize (too corporate), AI-powered (overused, show don't tell)

### Copy blocks needed

| Block | Max length | Notes |
|-------|------------|-------|
| Hero headline | 10 words | Must pass 3-second comprehension test |
| Hero subheadline | 2 sentences | Explains the "how" |
| Demo section headline | 8 words | Sets up the demo |
| Demo annotation callouts | 1 sentence each, 3 callouts | Explain what's happening in the demo |
| Value prop card headlines | 5 words each | Positioning, not features |
| Value prop card bodies | 2 sentences each | Concrete, not abstract |
| Social proof strip | 1 to 2 sentences | Factually accurate only |
| Waitlist headline | 5 words | Action-oriented |
| Waitlist subheadline | 1 sentence | Sets expectation for what happens next |
| Post-signup confirmation | 1 sentence | Warm, brief |
| Share prompt | 1 sentence | Specific to the problem, not generic "share with friends" |
| Privacy reassurance | 1 sentence | Below form, small text |

---

## 13. BLAST Framework Phase Mapping

### B (Blueprint): This Document
- Task plan: defined in Section 14
- Findings: market research document (Rilo_Market_Research.md)
- Project constitution: this PRD (data schemas in 8.2, design system in 7, behavioral rules in 6.3 and 12)

### L (Link): External Connectivity
- **Supabase:** Waitlist data storage, API for form submission
- **PostHog or Plausible:** Analytics event tracking
- **Resend or Loops:** Post-signup confirmation email (Phase 2, not launch blocker)
- **Vercel/Netlify:** Hosting and deployment
- **Domain registrar:** riloapp.com or chosen domain, DNS configuration

### A (Architect): Core Structure
- Page routing: single page, no routing needed
- Component structure: Navbar, Hero, ChatDemo, ValueProps, SocialProof, WaitlistForm, Footer
- Data flow: UTM params captured on load, stored in state, submitted with form
- Chat demo: self-contained React component with internal state machine
- Form submission: client-side validation then Supabase insert via JS client or edge function

### S (Style): Visual Polish
- Apply design system from Section 7
- Chat demo styling matches phone mockup specification
- Glassmorphic cards for value props
- Gold accent system for interactive states
- Font loading and optimization
- Responsive breakpoints: mobile (under 640px), tablet (640px to 1024px), desktop (1024px and above)

### T (Trigger): Deployment and Automation
- Deploy on push to main branch (Vercel/Netlify auto-deploy)
- Analytics runs automatically on page load and user interactions
- Confirmation email triggers on successful signup (Phase 2)
- Weekly export of waitlist data to CSV for analysis (Supabase dashboard or scheduled function)
- No scheduled jobs needed for Phase 1

---

## 14. Task Plan and Milestones

### Phase 1: Foundation (Days 1 to 3)
- [ ] Set up project repository (separate from app codebase)
- [ ] Initialize Next.js or Astro with Tailwind
- [ ] Set up Supabase project with waitlist_signups table
- [ ] Configure deployment pipeline (Vercel or Netlify)
- [ ] Set up analytics (PostHog or Plausible)
- [ ] Register and configure domain

### Phase 2: Core Build (Days 4 to 8)
- [ ] Build page layout (all 7 sections, placeholder content)
- [ ] Integrate existing RiloChatDemo.tsx component
- [ ] Build phone mockup frame for demo
- [ ] Build waitlist form with Supabase integration
- [ ] Implement form validation (client-side)
- [ ] Implement rate limiting and honeypot
- [ ] Build post-signup success state with share link
- [ ] Wire up all analytics events

### Phase 3: Copy and Polish (Days 9 to 11)
- [ ] Finalize all copy blocks (headline A/B variants ready)
- [ ] Apply full design system (colors, typography, glassmorphism)
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Accessibility audit (keyboard nav, screen reader, contrast)
- [ ] Performance audit (Lighthouse 90+)
- [ ] Cross-browser testing (Safari, Chrome, Firefox, mobile Safari, mobile Chrome)

### Phase 4: Launch (Days 12 to 14)
- [ ] Deploy to production
- [ ] Verify all analytics events fire correctly
- [ ] Test waitlist flow end to end (submit, deduplicate, share link)
- [ ] Set up UTM-tagged links for Reddit and TikTok distribution
- [ ] Begin 14-day measurement period

### Definition of Done
- [ ] Waitlist flow works end to end (form submit to database to success state)
- [ ] Interactive demo is functional and engaging on mobile and desktop
- [ ] All analytics events verified in dashboard
- [ ] Lighthouse scores 90+ across all categories
- [ ] Page loads in under 2 seconds on 4G connection
- [ ] Zero console errors
- [ ] Privacy Policy and Terms pages exist (even if minimal)

---

## 15. Open Questions and Safe Defaults

| Question | Safe Default | Revisit When |
|----------|-------------|--------------|
| Domain name (riloapp.com vs getrilo.com vs other) | riloapp.com | Before DNS setup |
| A/B test hero headline at launch or later? | Launch with one headline, A/B test in week 2 | After initial traffic data |
| Include referral credit system at launch? | Share link without credit tracking. Add credit system if share rate exceeds 5% | After 14-day measurement |
| Confirmation email at signup? | No email at launch (just on-screen confirmation). Add email in Phase 2 | After Resend/Loops setup |
| Show waitlist count? | Hide until count exceeds 100 | After crossing 100 signups |
| Static site generator choice (Next.js vs Astro)? | Next.js (more ecosystem support, easier React component integration) | Before project init |
| Host on Vercel or Netlify? | Vercel (better Next.js integration) | Before deployment setup |
| PostHog cloud vs self-hosted? | Cloud free tier (sufficient for validation phase) | If privacy requirements change |
| Should demo auto-start or wait for user interaction? | Auto-start first message on scroll-into-view, then wait for user choice | After engagement rate data |

---

## 16. What Success Looks Like

Two weeks after launch, if this page is working:

- 500+ unique visitors (from Reddit posts, TikTok content, and small Meta ad spend)
- 40+ waitlist signups (8% conversion rate)
- 60%+ of visitors who scroll to the demo interact with it
- Average demo session lasts 30+ seconds
- Qualitative signal: at least 5 "biggest money stress" responses that reference payday anxiety, running out before pay, or UberEats spending
- At least 3 organic shares from signups

That data, combined with the qualitative insights from the "biggest stress" field, provides the GO signal to begin building the MVP app.

If conversion is below 3% after two weeks of iteration, revisit the core positioning before investing in app development.