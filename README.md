# Pulmonary Billing & Documentation Reference

A static, two-page reference site for an academic pulmonary service, built for intensivists/pulmonologists. CY2026 Medicare professional values throughout.

- **Critical Care (ICU)** — `index.html`: ICU billing, documentation, RVUs, and ICD-10/DRG capture. Diagnosis CC/MCC status confirmed against the CMS MS-DRG v43 (FY2026) Appendix C; DRG relative weights from the CMS FY2026 IPPS Final Rule Table 5.
- **Pulmonary Clinic** — `clinic.html`: outpatient/academic-clinic billing — office E/M (99202–99215), teaching-physician rules with learners charting, APP incident-to vs split/shared, telehealth (Ohio-specific), e-consults, remote monitoring, transitional/chronic/principal care management, infusions & biologics, PFTs, and pulmonary rehab/sleep.

A switcher at the top of each sidebar moves between the two pages.

No build step, no dependencies — plain HTML/CSS/JS. Works on GitHub Pages.

## What's here

```
index.html      Critical Care (ICU) page — narrative sections + interactive table containers
clinic.html     Pulmonary Clinic page — self-contained narrative + static tables
styles.css      Shared styling (incl. the cross-page switcher)
data.js         Diagnosis / DRG data for the ICU page (generated from the workbook)
app.js          Shared: renders the ICU interactive tables (guarded), copy buttons, nav
downloads/      The three ICU source deliverables (.docx, .xlsx, .pdf)
.nojekyll       Tells GitHub Pages to serve files as-is
```

`app.js`'s data-driven renderers are guarded by element checks, so the same file safely powers both pages (the clinic page only uses the copy-button and nav helpers).

## Updating the data

The diagnosis and DRG tables in `data.js` are generated from `ICU_Diagnosis_DRG_Reference_2026.xlsx`. To refresh after editing the workbook, regenerate with the included `gen_data.py` (requires `openpyxl`):

```bash
python3 gen_data.py   # rewrites site/data.js from the .xlsx
```

The narrative sections (E/M rules, residents/APPs, procedures, modifiers) live directly in `index.html`.

## Caveats

Educational documentation-improvement reference — **not** coding, legal, or financial advice, and not an official CMS/AMA product. CC/MCC status, RVUs, and DRG weights change annually; re-verify at the next ICD-10 / MS-DRG / PFS update. Final code assignment rests with certified coders/CDI and your compliance team. CPT® is a registered trademark of the AMA.
