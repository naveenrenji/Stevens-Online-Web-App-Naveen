# Google Ads Conversion Tracking - Testing Guide

## Overview
Google Ads conversion tracking has been implemented using gtag.js for 5 key conversion events across the Stevens Online microsite.

**Conversion ID**: `AW-392135590`

---

## Implemented Conversion Events

### 1. Request Information (`PhERCJ_CuagbEKaH_roB`) - 15 Tracking Points
**Triggers on:**
- Hero "Request Information" buttons (all program pages)
- "Contact Us" buttons (Explore pages)
- "Get In Touch" consultation buttons (MSCS/MEM pages)
- Footer "Contact Us" link

### 2. Apply Now (`RcM_CMyypqobEKaH_roB`) - 21 Tracking Points
**Triggers on:**
- Hero "Apply Now" buttons (all program pages)
- Standard Application "Apply Now" buttons
- ASAP Application "Apply Now"/"Enroll Now" buttons
- "Start ASAP Application" button (ApplicationModal)
- All links to `gradadmissions.stevens.edu/apply`

### 3. Schedule a Call (`1ituCM-ypqobEKaH_roB`) - 6 Tracking Points
**Triggers on:**
- Desktop header "Schedule a Call" button
- Mobile menu "Schedule a Call" button
- OnlineExperience "Schedule a Call" button
- ComparePrograms "Connect With Us" button
- Admissions "Get In Touch" button (when going to Calendly)
- ApplicationModal "Contact our admissions team" link

### 4. Make an Appointment (`B2ZWCNKypqobEKaH_roB`) - 1 Tracking Point
**Triggers on:**
- Events page "Make an Appointment" button

### 5. Get Program Details (`Ll4ECNWypqobEKaH_roB`) - 6+ Tracking Points
**Triggers on:**
- LeadCaptureForm submissions (all instances across site)
- Home page, Admissions, RequestInfo, EmployerSponsorship, Explore pages

**Total:** 49+ conversion tracking points

---

## How to Test

### Method 1: Browser DevTools (Quick Test)

1. **Open DevTools**
   - Press `F12` or `Cmd+Option+I` (Mac)
   - Go to **Network** tab
   - Filter by "google" or "gtag"

2. **Test Each CTA**
   - Click "Request Information" → Look for request to `googletagmanager.com` or `google-analytics.com`
   - Click "Apply Now" → Verify conversion fires
   - Click "Schedule a Call" → Verify conversion fires
   - Click "Make an Appointment" → Verify conversion fires
   - Submit a form → Verify conversion fires

3. **Check Console**
   - Look for messages: `✅ Conversion tracked: [label]`
   - These appear in development mode

### Method 2: Google Tag Assistant (Recommended)

1. **Install Extension**
   - Chrome: [Google Tag Assistant](https://chrome.google.com/webstore/detail/google-tag-assistant-lega/ehoopddfhgaehhmphfcooacjdpmbjlao)

2. **Enable Debugging**
   - Click Tag Assistant icon
   - Click "Enable" to start debugging

3. **Test Conversions**
   - Reload the page
   - Click each type of CTA
   - Tag Assistant will show:
     - ✅ gtag loaded
     - ✅ conversion events fired
     - Conversion labels sent

4. **Verify Data**
   - Check conversion label matches expected value
   - Ensure `send_to` is `AW-392135590/[correct-label]`

### Method 3: Google Ads Real-Time (Production Only)

1. **Access Google Ads**
   - Log into your Google Ads account
   - Navigate to **Tools & Settings** → **Conversions**

2. **Check Conversion Status**
   - Find each conversion action
   - Check "Last 7 days" or "Today" column
   - Should show non-zero after testing

3. **View Details**
   - Click on conversion action
   - Check "Recent conversions" tab
   - Verify conversions are being recorded

---

## Testing Checklist

### Request Information (`PhERCJ_CuagbEKaH_roB`)
- [ ] Homepage hero button
- [ ] MBA/MSCS/MEM/MSDS hero buttons  
- [ ] Explore pages "Contact Us"
- [ ] OnlineExperience "Request Information"
- [ ] Tuition "Request Information"
- [ ] MSCS/MEM "Get In Touch"
- [ ] Footer "Contact Us"

### Apply Now (`RcM_CMyypqobEKaH_roB`)
- [ ] Homepage hero button
- [ ] Program pages hero buttons
- [ ] Admissions page "Apply Now" (MBA, MEM, MSCS)
- [ ] Standard Application cards
- [ ] ASAP Application cards
- [ ] ApplicationModal "Start ASAP Application"
- [ ] TuitionOutcomes "Apply Now"

### Schedule a Call (`1ituCM-ypqobEKaH_roB`)
- [ ] Desktop header button
- [ ] Mobile menu button
- [ ] OnlineExperience page
- [ ] ComparePrograms "Connect With Us"
- [ ] Admissions "Get In Touch" (Calendly link)

### Make an Appointment (`B2ZWCNKypqobEKaH_roB`)
- [ ] Events page "Make an Appointment"

### Get Program Details (`Ll4ECNWypqobEKaH_roB`)
- [ ] Form submission on Homepage
- [ ] Form submission on Request Info page
- [ ] Form submission on Admissions page
- [ ] Form submission on Explore pages
- [ ] Form submission on EmployerSponsorship page

### Cross-Device Testing
- [ ] Desktop (Chrome, Safari, Firefox)
- [ ] Tablet (iPad, Android)
- [ ] Mobile (iPhone, Android)

### Verification
- [ ] No duplicate tracking on single click
- [ ] Tracking doesn't block navigation
- [ ] Console shows confirmation logs (dev mode)
- [ ] Conversions appear in Google Ads (within 24 hrs)

---

## Troubleshooting

### Issue: Conversions Not Showing in Network Tab
**Solution**: Ensure gtag.js script loaded. Check browser console for errors.

### Issue: Multiple Tracking Events Firing
**Solution**: Check for duplicate onClick handlers. Each CTA should only fire once.

### Issue: Form Tracking Not Working  
**Solution**: The embedded form uses iframe - tracking may need adjustment based on iframe behavior. Monitor for 24-48 hours to see if conversions register.

### Issue: Tag Assistant Shows "No Tags Found"
**Solution**: 
- Hard refresh the page (Cmd+Shift+R)
- Ensure ad blockers are disabled
- Check that gtag.js script is in the built HTML

---

## Expected Console Output (Development Mode)

When clicking CTAs, you should see:
```
✅ Conversion tracked: PhERCJ_CuagbEKaH_roB
✅ Conversion tracked: RcM_CMyypqobEKaH_roB
✅ Conversion tracked: 1ituCM-ypqobEKaH_roB
```

If gtag isn't loaded:
```
⚠️ gtag not available. Conversion not tracked: [label]
```

---

## Files Modified

1. `index.html` - Added gtag.js script
2. `src/utils/gtmTracking.js` - Tracking utility (NEW)
3. `src/components/shared/PageHero.jsx` - Hero CTA tracking
4. `src/pages/Home.jsx` - Standalone buttons
5. `src/pages/Layout.jsx` - Header Schedule a Call buttons
6. `src/pages/OnlineExperience.jsx` - CTAs
7. `src/pages/TuitionOutcomes.jsx` - CTAs
8. `src/pages/Admissions.jsx` - Multiple Apply Now buttons
9. `src/pages/Events.jsx` - Make an Appointment
10. `src/pages/ComparePrograms.jsx` - Connect With Us
11. `src/components/shared/ApplicationModal.jsx` - Start ASAP Application
12. `src/components/program-pages/ProgramPageTemplate.jsx` - Admissions cards
13. `src/components/program-pages/ExploreProgramPageTemplate.jsx` - Contact Us
14. `src/components/forms/LeadCaptureForm.jsx` - Form submission tracking

---

## Next Steps

1. ✅ Build completed successfully
2. Test locally with Tag Assistant
3. Deploy to staging/preview
4. Test on staging with Tag Assistant
5. Monitor Google Ads for 24-48 hours
6. Verify conversions are recording correctly
7. Deploy to production

**Ready for PR and Vercel deployment!** 🚀

