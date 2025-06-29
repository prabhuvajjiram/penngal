# Chicago PennGal Non-Profit Website

A modern, responsive website for Chicago PennGal (PENN USA Inc.) - a 501(c)(3) non-profit organization dedicated to preserving Tamil culture, empowering women, and building strong community connections in the Chicagoland area.

## 🌟 About Chicago PennGal

Chicago PennGal was founded in 2017 by a group of women from the Chicagoland area to organize and support women empowerment activities. Our mission is to preserve and promote Tamil culture while creating a strong network of Tamil women who support each other in personal and professional growth.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js)
  - Verify installation: `npm --version`
- **Git** (for version control)
  - Download from [git-scm.com](https://git-scm.com/)

### Installation

1. **Clone or Download the Project**
   ```bash
   # If using Git
   git clone <your-repository-url>
   cd chicago-penngal-website
   
   # Or download and extract the ZIP file
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:4321`
   - The site will automatically reload when you make changes

## 📁 Project Structure

```
chicago-penngal-website/
├── public/                 # Static assets (IMPORTANT: Put your files here)
│   ├── favicon.svg
│   ├── images/            # 📸 CREATE THIS FOLDER for your images
│   │   ├── logo.png       # Organization logo
│   │   ├── hero-bg.png    # Hero section background
│   │   ├── gallery/       # Event photos
│   │   │   ├── 2024/      # Current year events
│   │   │   ├── 2023/      # Previous year events
│   │   │   ├── 2022/
│   │   │   ├── 2021/
│   │   │   ├── 2020/
│   │   │   ├── 2019/
│   │   │   ├── 2018/
│   │   │   └── 2017/
│   │   ├── magazines/     # Magazine cover images
│   │   │   ├── magazine-01.jpg
│   │   │   ├── magazine-02.jpg
│   │   │   └── ...
│   │   ├── about/         # About section images
│   │   └── sponsors/      # Sponsor logos & ads
│   │       ├── vasee.png
│   │       ├── SG-LAW-AD.jpg
│   │       ├── sponsors-2019-02.jpg
│   │       ├── sponsors-2019-05.jpg
│   │       └── [new-sponsor-images]
│   └── pdfs/              # 📄 CREATE THIS FOLDER for magazine PDFs
│       ├── poovithal-issue-8.pdf
│       ├── poovithal-issue-7.pdf
│       ├── poovithal-issue-6.pdf
│       └── ...
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.astro    # Navigation with Tamil branding
│   │   ├── Hero.astro      # Main hero section with background
│   │   ├── About.astro     # About us & Penn Pledge
│   │   ├── Gallery.astro   # Event photo galleries
│   │   ├── Magazines.astro # பூவிதழ் magazine with PDF modal
│   │   ├── PDFModal.astro  # PDF viewer modal component
│   │   ├── Sponsors.astro  # Sponsor showcase
│   │   ├── Contact.astro   # Contact form & info
│   │   └── Footer.astro    # Site footer
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro   # Main layout with SEO
│   └── pages/             # Website pages
│       └── index.astro    # Homepage
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server at localhost:4321

# Production
npm run build        # Build the site for production
npm run preview      # Preview the production build locally

# Utilities
npm run astro        # Run Astro CLI commands
```

---

## 🎯 **EASY CONTENT MANAGEMENT GUIDES**

### 🏢 **ADDING NEW SPONSORS** (Non-Technical Guide)

#### **Step 1: Prepare Your Sponsor Materials**
1. **Get sponsor logo/image** (preferably 400x300px or similar ratio)
2. **Collect sponsor information:**
   - Business name
   - Contact person name
   - Phone number
   - Email address
   - Website
   - Services description

#### **Step 2: Add Sponsor Image**
1. **Save the sponsor image** to: `public/images/sponsors/`
2. **Name it clearly** (e.g., `new-business-2024.jpg`)
3. **Recommended formats:** JPG, PNG
4. **Keep file size under 2MB**

#### **Step 3: Update the Sponsors Component**
Open `src/components/Sponsors.astro` and find the "Placeholder for New Sponsor" sections.

**Replace a placeholder with your new sponsor:**

```astro
<!-- Replace this placeholder -->
<div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border-2 border-dashed border-gray-300">
  <!-- OLD PLACEHOLDER CODE -->
</div>

<!-- With this new sponsor -->
<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
  <div class="p-6">
    <div class="mb-4 text-center">
      <img 
        src="/images/sponsors/your-new-sponsor-image.jpg" 
        alt="Your Business Name - Description"
        class="w-full h-32 object-contain bg-gray-50 rounded-lg mb-4"
      />
      <h4 class="text-lg font-bold text-gray-900 mb-2">Your Business Name</h4>
      <p class="text-sm text-gray-600">Contact Person Name</p>
      <div class="text-xs text-gray-500 mt-2">
        <p>Phone: (123) 456-7890</p>
        <p>email@business.com</p>
      </div>
    </div>
    <div class="border-t pt-3 text-center">
      <p class="text-xs text-gray-500">Services Description</p>
    </div>
  </div>
</div>
```

#### **Step 4: For Major Sponsors (Large Cards)**
If you want to add a major sponsor to the top section, add this to the main sponsors grid:

```astro
<!-- Add this to the main sponsors section -->
<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
  <div class="p-6">
    <div class="mb-6 text-center">
      <img 
        src="/images/sponsors/major-sponsor-image.jpg" 
        alt="Major Sponsor Name - Description"
        class="w-full h-64 object-contain bg-gray-50 rounded-lg mb-4"
      />
      <h3 class="text-xl font-bold text-gray-900 mb-2">Major Sponsor Name</h3>
      <p class="text-gray-600 mb-2">Title/Position</p>
      <div class="text-sm text-gray-500">
        <p>contact@majorsponsor.com</p>
        <p>www.majorsponsor.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
    <div class="border-t pt-4 text-center">
      <p class="text-sm text-gray-600">Detailed Services Description</p>
    </div>
  </div>
</div>
```

---

### 📖 **ADDING NEW MAGAZINES** (Non-Technical Guide)

#### **Step 1: Prepare Magazine Materials**
1. **PDF file** of the magazine (under 25MB recommended)
2. **Cover image** (400x600px recommended, 2:3 ratio)
3. **Magazine details:**
   - Issue number
   - Title/theme
   - Publication date
   - Brief description

#### **Step 2: Add Magazine Files**

**For Local PDF:**
1. **Save PDF** to: `public/pdfs/poovithal-issue-X.pdf`
2. **Save cover image** to: `public/images/magazines/magazine-X.jpg`

**For Google Drive PDF:**
1. **Upload PDF to Google Drive**
2. **Set sharing** to "Anyone with the link can view"
3. **Copy the sharing URL**

#### **Step 3: Add Magazine to Website**
Open `src/components/Magazines.astro` and add your new magazine:

**For Local PDF:**
```astro
<!-- Add this new magazine card -->
<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
  <div class="relative">
    <img 
      src="/images/magazines/magazine-X.jpg" 
      alt="பூவிதழ் Issue X Cover"
      class="w-full h-80 object-cover"
    />
    <div class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
      New
    </div>
  </div>
  <div class="p-6 text-center">
    <h3 class="text-2xl font-bold text-gray-900 mb-2">இதழ் X</h3>
    <p class="text-gray-600 mb-4">Your Magazine Theme</p>
    <div class="flex gap-2 justify-center">
      <button 
        onclick="openPDFModal('/pdfs/poovithal-issue-X.pdf', 'பூவிதழ் இதழ் X', 'Your Magazine Description', '/pdfs/poovithal-issue-X.pdf')"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
        View PDF
      </button>
      <a 
        href="/pdfs/poovithal-issue-X.pdf" 
        target="_blank" 
        class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        Download
      </a>
    </div>
  </div>
</div>
```

**For Google Drive PDF:**
```astro
<!-- Replace the Google Drive URL with your new one -->
<button 
  onclick="openPDFModal('https://drive.google.com/file/d/YOUR_NEW_FILE_ID/view', 'பூவிதழ் இதழ் X', 'Your Magazine Description', 'https://drive.google.com/uc?export=download&id=YOUR_NEW_FILE_ID')"
  class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
>
  View PDF
</button>
```

---

### 📸 **ADDING NEW GALLERY EVENTS** (Non-Technical Guide)

#### **Step 1: Prepare Event Photos**
1. **Organize photos** by event and year
2. **Optimize images** (recommended: 800x600px, under 1MB each)
3. **Choose a main event photo** for the featured card
4. **Prepare event details:**
   - Event name
   - Date
   - Brief description

#### **Step 2: Add Photos to Folders**
1. **Create year folder** if needed: `public/images/gallery/2024/`
2. **Add event photos** to the year folder
3. **Name photos clearly** (e.g., `womens-day-2024-main.jpg`)

#### **Step 3: Add Event to Gallery**
Open `src/components/Gallery.astro` and add your new event:

**For Featured Events (Large Cards):**
```astro
<!-- Add this to the main gallery grid -->
<div class="text-center">
  <h3 class="text-2xl font-bold text-pink-600 mb-6" style="font-family: 'Dancing Script', cursive;">
    Your Event Name<br>Month Year
  </h3>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <img 
      src="/images/gallery/2024/your-event-main-photo.jpg" 
      alt="Your Event Name - Month Year"
      class="w-full h-64 object-cover"
    />
    <div class="p-6">
      <p class="text-gray-600 mb-4">
        Brief description of your event and its significance to the community
      </p>
      <button class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
        View Gallery
      </button>
    </div>
  </div>
</div>
```

**For Additional Gallery Items (Small Cards):**
```astro
<!-- Add this to the additional gallery grid -->
<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <img 
    src="/images/gallery/2024/your-event-photo.jpg" 
    alt="Your Event Description"
    class="w-full h-48 object-cover"
  />
  <div class="p-4">
    <h4 class="font-semibold text-gray-900 mb-2">Your Event Name</h4>
    <p class="text-sm text-gray-600">Brief event description</p>
  </div>
</div>
```

#### **Step 4: Update Gallery Years**
If adding events from a new year, update the year display:

```astro
<!-- Update the year range -->
<div class="text-2xl text-pink-500 font-semibold mt-4">2017-2024</div>
```

---

## 📄 **PDF MANAGEMENT GUIDE**

### 🆕 **NEW: PDF Modal Viewer Feature**

The website includes a sophisticated PDF modal viewer that allows users to:
- **View PDFs directly in the browser** without leaving the page
- **Download PDFs** with a single click
- **Support for Google Drive PDFs** and local PDF files
- **Responsive design** that works on all devices
- **Keyboard shortcuts** (Escape to close)

### Current PDF Setup

#### **Google Drive Integration (Issue 8)**
- **Issue 8** uses your provided Google Drive PDF: `https://drive.google.com/file/d/1jpcXVTCU4eL6TlESWmka8L5ySuyv_nXl/view`
- **Automatically converts** Google Drive view URLs to embed URLs for modal viewing
- **Direct download** link provided for users

#### **Local PDF Files (Issues 1-7)**
- **Issues 1-7** are configured to use local PDF files from the `public/pdfs/` folder
- **You need to add these PDF files** to make them functional

### How to Add Local PDF Files

#### Step 1: Create PDF Folder
```bash
# Create the PDFs directory in the public folder
mkdir -p public/pdfs
```

#### Step 2: Add Your PDF Files
1. **Name your PDFs clearly:**
   ```
   public/pdfs/
   ├── poovithal-issue-8.pdf  # Optional (using Google Drive)
   ├── poovithal-issue-7.pdf  # Required
   ├── poovithal-issue-6.pdf  # Required
   ├── poovithal-issue-5.pdf  # Required
   ├── poovithal-issue-4.pdf  # Required
   ├── poovithal-issue-3.pdf  # Required
   ├── poovithal-issue-2.pdf  # Required
   └── poovithal-issue-1.pdf  # Required
   ```

2. **Optimize PDFs for web** (recommended: compress to under 10MB each)

### Adding More Google Drive PDFs

If you want to use Google Drive for other issues:

1. **Upload PDF to Google Drive**
2. **Set sharing to "Anyone with the link can view"**
3. **Copy the sharing URL** (format: `https://drive.google.com/file/d/FILE_ID/view`)
4. **Update the magazine component** with the new URL

**Example for Issue 7:**
```astro
<button 
  onclick="openPDFModal('https://drive.google.com/file/d/YOUR_FILE_ID/view', 'பூவிதழ் இதழ் 7', 'Christmas & New Year Special Edition', 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID')"
  class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
>
  View PDF
</button>
```

---

## 📸 **IMAGE MANAGEMENT GUIDE**

### Current Setup Explanation

The website now uses **local images** stored in the `public/images/` folder:

- **Logo**: `/images/logo.png` (your uploaded logo)
- **Hero Background**: `/images/hero-bg.png` (your uploaded background)
- **Gallery Images**: `/images/gallery/home-abt-img-2019.jpg` (your uploaded gallery image)
- **Magazine Covers**: `/images/magazines/magazine-01.jpg` and `/images/magazines/magazine-02.jpg`
- **Sponsor Images**: `/images/sponsors/` (your uploaded sponsor materials)

### How to Add More Images

#### Step 1: Create Image Folders (if not exists)
```bash
# Create the images directory structure in the public folder
mkdir -p public/images/gallery/2024
mkdir -p public/images/gallery/2023  
mkdir -p public/images/gallery/2022
mkdir -p public/images/about
mkdir -p public/images/sponsors
mkdir -p public/images/magazines
```

#### Step 2: Add Your Images
1. **Optimize your images first** (recommended tools: TinyPNG, ImageOptim)
2. **Recommended image sizes:**
   - Gallery photos: 800x600px (4:3 ratio)
   - Hero images: 1200x800px (3:2 ratio)
   - Magazine covers: 400x600px (2:3 ratio)
   - Logo: 200x200px (square)
   - Sponsor images: 400x300px (4:3 ratio)

3. **Copy your images to the appropriate folders:**
   ```
   public/images/gallery/2024/
   ├── new-event-2024-1.jpg
   ├── new-event-2024-2.jpg
   └── womens-day-2024.jpg
   
   public/images/magazines/
   ├── magazine-03.jpg  # Issue 6 cover
   ├── magazine-04.jpg  # Issue 5 cover
   └── magazine-05.jpg  # Issue 4 cover
   
   public/images/sponsors/
   ├── new-sponsor-2024.jpg
   ├── business-partner.png
   └── community-supporter.jpg
   ```

#### Step 3: Update Component Files

**For Gallery Images** (`src/components/Gallery.astro`):
```astro
<!-- Replace Pexels URLs with local images -->
<img 
  src="/images/gallery/2024/your-event-photo.jpg" 
  alt="Your Event Description"
  class="w-full h-64 object-cover"
/>
```

**For Magazine Covers** (`src/components/Magazines.astro`):
```astro
<!-- Add real magazine covers -->
<img 
  src="/images/magazines/magazine-03.jpg" 
  alt="பூவிதழ் Issue 6 Cover"
  class="w-full h-80 object-cover"
/>
```

**For Sponsor Images** (`src/components/Sponsors.astro`):
```astro
<!-- Add sponsor images -->
<img 
  src="/images/sponsors/your-sponsor-image.jpg" 
  alt="Sponsor Name - Description"
  class="w-full h-64 object-contain bg-gray-50 rounded-lg mb-4"
/>
```

---

## 🎯 **QUICK REFERENCE CHECKLISTS**

### ✅ **Adding New Sponsor Checklist**
- [ ] Get sponsor logo/image (400x300px recommended)
- [ ] Collect all sponsor information (name, contact, services)
- [ ] Add image to `public/images/sponsors/`
- [ ] Update `src/components/Sponsors.astro`
- [ ] Replace placeholder with sponsor card code
- [ ] Test in development server (`npm run dev`)
- [ ] Verify image loads and information displays correctly

### ✅ **Adding New Magazine Checklist**
- [ ] Prepare PDF file (under 25MB)
- [ ] Create cover image (400x600px recommended)
- [ ] Choose: Local PDF or Google Drive PDF
- [ ] Add files to appropriate folders
- [ ] Update `src/components/Magazines.astro`
- [ ] Test "View PDF" and "Download" buttons
- [ ] Verify PDF displays correctly in modal

### ✅ **Adding New Gallery Event Checklist**
- [ ] Organize event photos by year
- [ ] Optimize images (800x600px, under 1MB each)
- [ ] Add photos to `public/images/gallery/YEAR/`
- [ ] Update `src/components/Gallery.astro`
- [ ] Add event card with main photo
- [ ] Test image loading and responsive behavior
- [ ] Update year range if needed

### ✅ **General Website Update Checklist**
- [ ] Make changes in development environment
- [ ] Test all functionality (`npm run dev`)
- [ ] Check responsive design (mobile, tablet, desktop)
- [ ] Verify all images load correctly
- [ ] Test all PDF links and modal functionality
- [ ] Build for production (`npm run build`)
- [ ] Deploy to hosting platform

---

## 🌐 **DEPLOYMENT OPTIONS**

### Option 1: Netlify (Recommended)

1. **Build the site:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to deploy
   - Or connect your Git repository for automatic deployments

3. **Custom Domain:**
   - In Netlify dashboard, go to Domain settings
   - Add your custom domain (e.g., penngal.org)
   - Follow DNS configuration instructions

### Important Deployment Notes

#### **PDF Files**
- **Local PDFs**: Must be included in the `public/pdfs/` folder before building
- **Google Drive PDFs**: Work immediately without additional setup
- **File Size**: Keep PDFs under 25MB for optimal performance

#### **Images**
- **All images**: Must be in the `public/images/` folder structure
- **Optimization**: Compress images before deployment
- **Formats**: Use JPG for photos, PNG for graphics with transparency

---

## 🔧 **DEVELOPMENT TIPS**

### Working with PDFs

#### **Testing PDF Modal Locally**
1. **Start development server**: `npm run dev`
2. **Add test PDFs** to `public/pdfs/`
3. **Click "View PDF"** buttons to test modal functionality
4. **Test on different devices** and browsers

#### **Google Drive PDF Setup**
1. **Upload PDF** to Google Drive
2. **Set sharing** to "Anyone with the link can view"
3. **Copy sharing URL** (not the embed URL)
4. **Use in `openPDFModal()` function**

#### **Troubleshooting PDFs**
- **PDF not loading**: Check file path and permissions
- **Google Drive issues**: Verify sharing settings
- **Modal not opening**: Check browser console for JavaScript errors
- **Download not working**: Verify download URL format

### Working with Images

#### **Image Optimization Workflow**
1. **Resize images** to appropriate dimensions
2. **Compress images** using TinyPNG or similar
3. **Add to correct folder** in `public/images/`
4. **Update component** with correct path
5. **Test in development** server

#### **Adding New Magazine Covers**
1. **Create cover image** (400x600px recommended)
2. **Save as** `/public/images/magazines/magazine-XX.jpg`
3. **Update Magazines.astro** component
4. **Replace gradient background** with image

---

## 🆘 **TROUBLESHOOTING**

### Common Issues

**PDF Modal not working:**
```bash
# Check browser console for JavaScript errors
# Ensure PDFModal component is imported in index.astro
# Verify PDF file exists and is accessible
```

**Images not showing:**
```bash
# Check if images are in the correct public folder
ls -la public/images/
# Ensure file paths start with / (e.g., /images/logo.png)
```

**Google Drive PDF not loading:**
```bash
# Verify sharing settings: "Anyone with the link can view"
# Check URL format: should be /file/d/FILE_ID/view
# Test URL directly in browser
```

**Build errors:**
```bash
# Clear Astro cache
rm -rf .astro
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
# Build again
npm run build
```

### PDF-Specific Troubleshooting

**Modal opens but PDF doesn't load:**
- Check PDF file size (should be under 25MB)
- Verify PDF is not corrupted
- Test PDF opens in browser directly
- Check browser console for CORS errors

**Google Drive PDF shows "Preview not available":**
- Ensure PDF is not password protected
- Check Google Drive sharing permissions
- Try downloading and re-uploading to Google Drive
- Use local PDF as fallback

**Download button not working:**
- Verify download URL is correct
- Check if PDF file exists
- Test download URL directly in browser
- Ensure proper file permissions

---

## 📋 **QUICK REFERENCE**

### PDF Modal Usage
```javascript
// For local PDFs
openPDFModal('/pdfs/filename.pdf', 'Title', 'Description', '/pdfs/filename.pdf')

// For Google Drive PDFs
openPDFModal('https://drive.google.com/file/d/FILE_ID/view', 'Title', 'Description', 'https://drive.google.com/uc?export=download&id=FILE_ID')
```

### File Path Examples
```bash
# Images
/images/logo.png
/images/gallery/2024/event-photo.jpg
/images/sponsors/business-logo.jpg
/images/magazines/magazine-cover.jpg

# PDFs
/pdfs/poovithal-issue-8.pdf
/pdfs/special-edition.pdf
```

### Component File Locations
```bash
# Main components to edit
src/components/Sponsors.astro     # Add/edit sponsors
src/components/Magazines.astro    # Add/edit magazines
src/components/Gallery.astro      # Add/edit gallery events
src/components/Contact.astro      # Update contact info
```

---

## 🌟 **FEATURES HIGHLIGHTS**

- ✅ **Easy Sponsor Management** - Simple copy-paste system for new sponsors
- ✅ **PDF Modal Viewer** - In-browser PDF viewing with download options
- ✅ **Google Drive Integration** - Direct PDF embedding from Google Drive
- ✅ **Local Asset Management** - All images and PDFs locally hosted
- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Tamil Language Integration** - Cultural authenticity maintained
- ✅ **Professional Branding** - Your logo and background integrated
- ✅ **SEO Optimized** - Search engine friendly structure
- ✅ **Fast Loading** - Optimized performance
- ✅ **Accessibility** - Screen reader and keyboard friendly
- ✅ **Modern UI/UX** - Contemporary design patterns
- ✅ **Non-Technical Friendly** - Easy content management system

---

**Need help?** Contact your web developer or refer to the troubleshooting section above.

**Chicago PennGal** - Empowering Tamil Women Through Culture & Community

---

## 📞 **SUPPORT CONTACT**

For technical support or questions about updating the website:
- **Email**: [Your Developer Email]
- **Phone**: [Your Developer Phone]
- **Documentation**: This README file
- **Emergency**: Check troubleshooting section first

**Remember**: Always test changes in development (`npm run dev`) before deploying to production!