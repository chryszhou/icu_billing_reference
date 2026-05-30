# Critical Care Billing & Documentation Reference

A static reference site for ICU billing, documentation, RVUs, and ICD-10/DRG capture — built for intensivists at an academic center. CY2026 Medicare professional values; diagnosis CC/MCC status confirmed against the CMS MS-DRG v43 (FY2026) Appendix C; DRG relative weights from the CMS FY2026 IPPS Final Rule Table 5.

No build step, no dependencies — plain HTML/CSS/JS. Works on GitHub Pages.

## What's here

```
index.html      The site (all narrative sections + table containers)
styles.css      Styling
data.js         Diagnosis / DRG data (generated from the workbook)
app.js          Renders the interactive tables, search, sort, live $ calc
downloads/      The three source deliverables (.docx, .xlsx, .pdf)
.nojekyll       Tells GitHub Pages to serve files as-is
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `icu-billing-reference`).
2. Put **the contents of this folder at the repo root** (so `index.html` is at the top level) and push:
   ```bash
   git init
   git add .
   git commit -m "Initial critical care billing reference site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Wait ~1 minute, then open `https://<you>.github.io/<repo>/`.

> Prefer to keep the site in a subfolder? Move these files into `/docs` and choose folder **/docs** in step 3.

## Preview locally

```bash
cd <this folder>
python3 -m http.server 8000
# open http://localhost:8000
```
(Opening `index.html` directly via `file://` also works for everything except the `fetch`-free parts — this site has none, so `file://` is fine too.)

## Updating the data

The diagnosis and DRG tables in `data.js` are generated from `ICU_Diagnosis_DRG_Reference_2026.xlsx`. To refresh after editing the workbook, regenerate with the included `gen_data.py` (requires `openpyxl`):

```bash
python3 gen_data.py   # rewrites site/data.js from the .xlsx
```

The narrative sections (E/M rules, residents/APPs, procedures, modifiers) live directly in `index.html`.

## Caveats

Educational documentation-improvement reference — **not** coding, legal, or financial advice, and not an official CMS/AMA product. CC/MCC status, RVUs, and DRG weights change annually; re-verify at the next ICD-10 / MS-DRG / PFS update. Final code assignment rests with certified coders/CDI and your compliance team. CPT® is a registered trademark of the AMA.
