# Varity Marketing Website - Copywriting Checklist

This document tracks all copywriting tasks for the Varity marketing website during the 5-week development period.

**Last Updated:** December 12, 2025
**Status:** Ready for copywriting work

---

## Quick Start

Clone and run locally:
```bash
git clone https://github.com/varity-labs/marketing-website.git
cd marketing-website/apps/marketing
npm install
npm run dev
# Visit http://localhost:3000
```

All copywriting is done by editing `.tsx` files in `/src/app/` and `/src/components/`.

---

## Critical Fixes (Do First)

### 1. Legal Pages Address Placeholder
**Priority:** CRITICAL - Must fix before public launch

**Files to update:**
- [x] `/src/app/terms/page.tsx` (line 560) - DONE
- [x] `/src/app/privacy/page.tsx` (line 277) - DONE

**Address:** `Varity Inc., 1601 N Main St #3159, Jacksonville, FL 32206`
**Status:** COMPLETED - Update when C Corp is established

---

## Page-by-Page Copywriting Tasks

### Homepage (`/src/app/page.tsx`)
**Status:** Good - minor refinements possible

- [ ] Review hero tagline: "The Operating System for Web3"
- [ ] Verify stats accuracy (89% savings claim - ensure consistency)
- [ ] Review trust indicators text
- [ ] Check partner logos and descriptions
- [ ] Verify CTA button text matches user journey

**Components to review:**
- `/src/components/sections/hero.tsx`
- `/src/components/sections/stats.tsx`
- `/src/components/sections/solution.tsx`
- `/src/components/sections/features.tsx`
- `/src/components/sections/partners.tsx`
- `/src/components/sections/cta.tsx`

---

### Dashboard Page (`/src/app/dashboard/page.tsx`)
**Status:** Content complete - review for polish

- [ ] Verify AI Dashboard positioning resonates with target audience
- [ ] Review FAQ answers for accuracy
- [ ] Ensure pricing mentions match pricing page
- [ ] Check integration logos and descriptions

**Components to review:**
- `/src/components/dashboard/hero.tsx`
- `/src/components/dashboard/features.tsx`
- `/src/components/dashboard/integrations.tsx`
- `/src/components/dashboard/faq.tsx`

---

### Platform Page (`/src/app/platform/page.tsx`)
**Status:** Content complete - technical accuracy check needed

- [ ] Review DePin infrastructure descriptions
- [ ] Verify layer-by-layer privacy explanation is clear
- [ ] Check component descriptions (Akash, Filecoin, Arbitrum, etc.)
- [ ] Ensure developer-focused messaging is clear

---

### Pricing Page (`/src/app/pricing/page.tsx`)
**Status:** Good - verify features match product

- [ ] Confirm pricing tiers are accurate ($99, $199, Enterprise)
- [ ] Review feature lists for each tier
- [ ] Verify FAQ answers match current offerings
- [ ] Check "Get Started" CTAs link correctly

---

### About Page (`/src/app/about/page.tsx`)
**Status:** Good - roadmap dates need verification

- [ ] Verify milestone dates are realistic:
  - Dec 2025: Generic AI Dashboard Template on Testnet
  - Jan 2026: Open-source SDK packages
  - Jan 2026: Migration tools
  - Feb 2026: Mainnet launch
  - Q2 2026: Multi-chain expansion
- [ ] Review company values messaging
- [ ] Update team information if needed (currently not shown)

---

### Contact Page (`/src/app/contact/page.tsx`)
**Status:** Good

- [ ] Verify email addresses are correct:
  - Sales: hello@varity.so
  - Support: support@varity.so
  - Partnerships: hello@varity.so
- [ ] Review contact form fields

---

### Blog Page (`/src/app/blog/page.tsx`)
**Status:** Coming Soon page - needs launch date

- [ ] Add expected launch date (e.g., "Launching Q1 2026")
- [ ] Prepare 3-5 initial blog post drafts:
  - [ ] "What is DePin and Why It Matters"
  - [ ] "How Varity Saves 89% on Cloud Costs"
  - [ ] "Understanding Our 5-Layer Privacy Architecture"
  - [ ] "Getting Started with Varity AI Dashboard"
  - [ ] "Varity vs AWS/GCP: A Technical Comparison"

---

### Legal Pages

#### Terms of Service (`/src/app/terms/page.tsx`)
**Status:** Complete - needs address fix

- [x] Full terms written
- [ ] Fix address placeholder (line 560)
- [ ] Legal review before launch

#### Privacy Policy (`/src/app/privacy/page.tsx`)
**Status:** Complete - needs address fix

- [x] Full policy written with 5-layer privacy explanation
- [ ] Fix address placeholder (line 277)
- [ ] Legal review before launch

#### Acceptable Use Policy (`/src/app/acceptable-use/page.tsx`)
**Status:** Exists - verify content

- [ ] Review acceptable use terms
- [ ] Ensure alignment with Terms of Service

---

## Copy Style Guide

### Voice & Tone
- **Professional but approachable** - Not corporate stiff, not startup casual
- **Confident without hype** - State facts, avoid superlatives
- **Technical accuracy** - Don't oversimplify for marketing's sake

### Key Messaging Points
1. **100% Decentralized** - No AWS, no Google Cloud, no corporate surveillance
2. **89% Cost Savings** - Compare to GCP with AI ($2,800/mo vs $299/mo)
3. **5-Layer Privacy** - Provable, not "trust us"
4. **Company-Specific AI** - Trained on YOUR data, not generic ChatGPT

### Numbers to Keep Consistent
- Cost savings: 89% (includes AI capabilities vs GCP)
- Infrastructure savings: 64% (pure infrastructure comparison)
- RAG documents: 50,000+ industry documents
- Privacy layers: 5 layers
- Price tiers: $99/mo, $199/mo, Custom Enterprise

### Avoid
- "Revolutionary" or "game-changing"
- Unsubstantiated claims
- Overly technical jargon without explanation
- Time estimates (e.g., "in 2-3 weeks")

---

## File Reference

### App Pages
```
/src/app/
├── page.tsx              # Homepage
├── about/page.tsx        # About page
├── blog/page.tsx         # Blog (Coming Soon)
├── contact/page.tsx      # Contact page
├── dashboard/page.tsx    # AI Dashboard page
├── platform/page.tsx     # Platform page
├── pricing/page.tsx      # Pricing page
├── privacy/page.tsx      # Privacy Policy
├── terms/page.tsx        # Terms of Service
└── acceptable-use/page.tsx # Acceptable Use Policy
```

### Component Sections (used across pages)
```
/src/components/
├── sections/
│   ├── hero.tsx          # Homepage hero
│   ├── stats.tsx         # Stats section
│   ├── solution.tsx      # Solution comparison table
│   ├── features.tsx      # Features grid
│   ├── partners.tsx      # Partners marquee
│   ├── cta.tsx           # Call-to-action section
│   └── faq.tsx           # FAQ section
├── dashboard/
│   ├── hero.tsx          # Dashboard hero
│   ├── features.tsx      # Dashboard features
│   ├── integrations.tsx  # Integrations section
│   └── faq.tsx           # Dashboard FAQ
├── layout/
│   ├── header.tsx        # Site header/navigation
│   └── footer.tsx        # Site footer
└── ui/                   # UI components (buttons, cards, etc.)
```

---

## SEO Checklist (Already Complete)

- [x] Homepage metadata export
- [x] All pages have canonical URLs
- [x] FAQ schemas on pricing and dashboard pages
- [x] SoftwareApplication schema
- [x] BreadcrumbList schemas
- [x] Organization schema in layout
- [x] sitemap.xml configured (varity.so domain)
- [x] robots.txt configured
- [x] Open Graph tags on all pages
- [x] Twitter card metadata

---

## Testing Checklist

After making changes:
```bash
# Build to check for errors
npm run build

# Test locally
npm run dev

# Check responsive design on mobile
# Use Chrome DevTools (F12 → Toggle device toolbar)
```

---

## Git Workflow

```bash
# After making changes
git add .
git commit -m "docs: update [page] copywriting"
git push origin feature/restructuring-iso-dashboard

# Deployment is automatic via 4everland IPFS
```

---

## Questions / Decisions Needed

1. **Company Address** - What is the registered address for Varity Inc.?
2. **Blog Launch Date** - When should we say the blog is launching?
3. **Team Section** - Should About page include team members?
4. **Social Links** - Twitter, Discord, GitHub links for footer?

---

## Progress Tracker

| Page | Content | Review | Published |
|------|---------|--------|-----------|
| Homepage | Done | Done | Yes |
| Dashboard | Done | Done | Yes |
| Platform | Done | Done | Yes |
| Pricing | Done | Done | Yes |
| About | Done | Needs date review | Yes |
| Contact | Done | Done | Yes |
| Blog | Coming Soon page | Add ETA | Yes |
| Terms | Done | Done | Yes |
| Privacy | Done | Done | Yes |
| Acceptable Use | Done | Verify | Yes |

---

**Total Estimated Tasks:** ~25 copywriting items
**Critical Before Launch:** 0 (all critical items completed)
