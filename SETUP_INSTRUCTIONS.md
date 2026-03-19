# Insype Website - Setup & Deployment Guide

## Project Structure

```
insype-website/          # Website (root - deploys to Vercel)
├── src/                 # React source files
├── public/              # Static assets
├── admin/               # Admin CMS (separate Vercel project)
├── supabase/            # Database schema
└── vercel.json          # Vercel config
```

## 1. Push to GitHub

```bash
cd /Users/nucintosh/PYTHON/insype-website
git init
git add .
git commit -m "Initial Insype website with CMS"
git remote add origin git@github.com:adenadoume/insype-website.git
git push -u origin main
```

## 2. Set up Supabase

1. Go to supabase.com → Create new project
2. Go to SQL Editor → Run the SQL from `supabase/schema.sql`
3. Go to Settings → API → Copy Project URL and Anon key

## 3. Deploy Website on Vercel

1. Go to vercel.com → Import your GitHub repo
2. Project Settings:
   - Framework Preset: Vite
   - Root Directory: (leave as root - default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add Environment Variables:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
   - VITE_HOTEL_PHONE=210-2281031
   - VITE_HOTEL_EMAIL=info@insype.com.gr
   - VITE_HOTEL_ADDRESS=Τεώ 25 & Ολοφύτου, Τ.Κ. 11142 Αθήνα
4. Deploy!

## 4. Deploy Admin Panel (Separate Vercel Project)

1. Import same GitHub repo again
2. Project Settings:
   - Framework Preset: Vite
   - Root Directory: `admin`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add Environment Variables:
   - VITE_SUPABASE_URL
   - VITE_SUPABASE_ANON_KEY
   - VITE_CLOUDINARY_CLOUD_NAME
   - VITE_CLOUDINARY_UPLOAD_PRESET
4. Deploy!

## 5. Set up Cloudinary

1. Go to cloudinary.com → Create account
2. Dashboard → Copy Cloud name
3. Settings → Upload → Add upload preset:
   - Preset name: insype-uploads
   - Signing mode: Unsigned

## 6. Create Admin User in Supabase

1. Supabase Dashboard → Authentication → Users
2. Click "Invite user" → Enter admin email
3. Set password for admin user
4. Add admin Vercel URL to Redirect URLs

## Development

```bash
# Website (root)
npm install
npm run dev  # Runs on http://localhost:3000

# Admin
cd admin
npm install
npm run dev  # Runs on http://localhost:5174
```

## Support

Contact: info@insype.com.gr | Phone: 210-2281031