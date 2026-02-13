# 📸 Screenshot Capture Guide

## New Projects Added to Portfolio
1. **WoW WeakAuras Hub** - `http://localhost:5173`
2. **Lead Generator System** - `http://localhost:5174`

## Screenshot Requirements
- **Size**: 1200x800px (consistent with existing project images)
- **Format**: PNG
- **Names**: 
  - `project-wow-weakauras.png`
  - `project-lead-generator.png`

## Capture Instructions

### WoW WeakAuras Hub Screenshot
1. Navigate to `http://localhost:5173`
2. Take screenshot of the main dashboard/library view
3. Show WeakAuras list with the Priest Power Word Shield example
4. Save as `public/images/project-wow-weakauras.png`

### Lead Generator Screenshot  
1. Navigate to `http://localhost:5174`
2. Take screenshot of the main dashboard
3. Show stats cards and system status
4. Save as `public/images/project-lead-generator.png`

## Browser Screenshot Tool (if available)
```bash
# WoW WeakAuras Hub
npx playwright-cli screenshot --viewport-size=1200,800 http://localhost:5173 public/images/project-wow-weakauras.png

# Lead Generator System
npx playwright-cli screenshot --viewport-size=1200,800 http://localhost:5174 public/images/project-lead-generator.png
```

## Manual Capture
Use any screenshot tool and crop to ~1200x800px to match existing project images.

## After Screenshots
1. Replace placeholder URLs with deployed URLs when ready
2. Push portfolio updates to GitHub
3. Deploy to Vercel