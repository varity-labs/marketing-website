# 📌 Pinata Deployment Guide for Varity Marketing Website

**Last Updated:** December 6, 2025  
**Purpose:** Step-by-step guide to deploy the Varity marketing website on Filecoin/IPFS using Pinata

---

## 📋 Prerequisites

1. **Pinata Account**: Sign up at https://www.pinata.cloud
2. **Node.js**: Version 16+ installed
3. **Built Website**: Production-ready Next.js build

---

## 💰 Pinata Pricing (December 2025)

### **Recommended Plan: Picnic ($20/month)**
- ✅ 100 GB storage (website needs ~120 MB)
- ✅ 200 GB bandwidth/month (enough for 40,000+ visitors)
- ✅ Custom domain support
- ✅ Advanced analytics
- ✅ API access

### **Cost Comparison**
- **Pinata (Picnic):** $20/month
- **AWS CloudFront:** $187/month
- **Vercel Pro:** $20/month (with limitations)
- **Savings:** 89.3% cheaper than AWS

---

## 🚀 Deployment Steps

### **Step 1: Prepare the Website for Static Export**

```bash
# Navigate to the project
cd /home/macoding/blokko-internal-os/varity/chains/arbitrum/platform/marketing/marketing-website/apps/marketing

# Install dependencies if not already installed
npm install

# Build the production version
npm run build
```

### **Step 2: Configure Next.js for Static Export**

Edit `next.config.js` to enable static export:

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Add this line for static export
  images: {
    unoptimized: true  // Required for static export
  },
  trailingSlash: true,  // Helps with IPFS routing
}

module.exports = nextConfig
```

### **Step 3: Build Static Export**

```bash
# Clean previous builds
rm -rf .next out

# Build and export static files
npm run build

# This creates an 'out' directory with static files
ls -la out/
```

### **Step 4: Get Pinata API Keys**

1. Login to https://app.pinata.cloud
2. Go to **API Keys** → **New Key**
3. Create a key with these permissions:
   - ✅ pinFileToIPFS
   - ✅ pinJSONToIPFS
   - ✅ unpin
   - ✅ userPinnedDataTotal
4. Save your credentials:
   ```bash
   PINATA_API_KEY=your_api_key_here
   PINATA_SECRET_API_KEY=your_secret_key_here
   ```

### **Step 5: Install Pinata CLI Tools**

```bash
# Install Pinata SDK globally
npm install -g @pinata/sdk

# Or install locally in the project
npm install --save-dev @pinata/sdk pinata-deploy
```

### **Step 6: Create Deployment Script**

Create `scripts/deploy-to-pinata.js`:

```javascript
const pinataSDK = require('@pinata/sdk');
const fs = require('fs');
const path = require('path');

// Initialize Pinata
const pinata = new pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_SECRET_API_KEY
);

async function deployToPinata() {
  try {
    console.log('🚀 Starting deployment to Pinata...');
    
    // Test authentication
    const authTest = await pinata.testAuthentication();
    console.log('✅ Pinata authentication successful');
    
    // Pin the entire out directory
    const sourcePath = path.join(__dirname, '../out');
    
    const options = {
      pinataMetadata: {
        name: 'varity-marketing-website',
        keyvalues: {
          version: '1.0.0',
          deployedAt: new Date().toISOString(),
          environment: 'production'
        }
      },
      pinataOptions: {
        cidVersion: 1
      }
    };
    
    console.log('📦 Uploading website to IPFS...');
    const result = await pinata.pinFromFS(sourcePath, options);
    
    console.log('✅ Website deployed successfully!');
    console.log('📌 IPFS Hash (CID):', result.IpfsHash);
    console.log('🌐 Access your website at:');
    console.log(`   https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`);
    console.log(`   https://${result.IpfsHash}.ipfs.dweb.link`);
    console.log(`   https://cloudflare-ipfs.com/ipfs/${result.IpfsHash}`);
    
    // Save deployment info
    const deploymentInfo = {
      ipfsHash: result.IpfsHash,
      timestamp: result.Timestamp,
      size: result.PinSize,
      deployedAt: new Date().toISOString(),
      urls: {
        pinata: `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`,
        cloudflare: `https://cloudflare-ipfs.com/ipfs/${result.IpfsHash}`,
        dweb: `https://${result.IpfsHash}.ipfs.dweb.link`
      }
    };
    
    fs.writeFileSync(
      'deployment-info.json',
      JSON.stringify(deploymentInfo, null, 2)
    );
    
    console.log('📄 Deployment info saved to deployment-info.json');
    
  } catch (error) {
    console.error('❌ Deployment failed:', error);
    process.exit(1);
  }
}

deployToPinata();
```

### **Step 7: Deploy to Pinata**

```bash
# Set environment variables
export PINATA_API_KEY="your_api_key_here"
export PINATA_SECRET_API_KEY="your_secret_key_here"

# Run the deployment script
node scripts/deploy-to-pinata.js

# Output will show:
# 🚀 Starting deployment to Pinata...
# ✅ Pinata authentication successful
# 📦 Uploading website to IPFS...
# ✅ Website deployed successfully!
# 📌 IPFS Hash (CID): QmXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
# 🌐 Access your website at:
#    https://gateway.pinata.cloud/ipfs/QmXXXXXXXXX
```

---

## 🌐 Setting Up Custom Domain (varity.xyz)

### **Option 1: Using Cloudflare (Recommended)**

1. **Add your domain to Cloudflare** (free tier works)

2. **Create DNS records:**
```dns
# CNAME for root domain
CNAME @ cloudflare-ipfs.com

# TXT record for IPFS hash
TXT _dnslink dnslink=/ipfs/QmYourIPFSHashHere
```

3. **Enable Cloudflare IPFS Gateway:**
   - Go to **Websites** → **Your Domain** → **IPFS**
   - Enable IPFS Gateway
   - Your site will be available at: https://varity.xyz

### **Option 2: Using Pinata Dedicated Gateway**

1. **Upgrade to Pinata Dedicated Gateway** ($20/month extra)

2. **Configure in Pinata Dashboard:**
   - Go to **Gateways** → **Dedicated Gateway**
   - Add custom domain: varity.xyz
   - Follow DNS instructions provided

3. **Add DNS records at your registrar:**
```dns
CNAME varity.xyz your-gateway.mypinata.cloud
```

### **Option 3: Using Fleek (Alternative)**

```bash
# Install Fleek CLI
npm install -g @fleek/cli

# Deploy to Fleek (includes CDN)
fleek site:init
fleek site:deploy
```

---

## 📝 Update Workflow

### **Making Updates**

1. **Make changes locally:**
```bash
npm run dev
# Make your changes
# Test at http://localhost:3000
```

2. **Build and test:**
```bash
npm run build
npm run start  # Test production build
```

3. **Redeploy to Pinata:**
```bash
# Build static export
npm run build

# Deploy update
node scripts/deploy-to-pinata.js

# New IPFS hash will be generated
# Update DNS TXT record with new hash
```

### **Automated Deployment Script**

Create `scripts/update-and-deploy.sh`:

```bash
#!/bin/bash

echo "🔄 Starting update and deployment process..."

# Build the website
echo "📦 Building website..."
npm run build

# Deploy to Pinata
echo "🚀 Deploying to Pinata..."
node scripts/deploy-to-pinata.js

# Read the new IPFS hash
IPFS_HASH=$(cat deployment-info.json | grep ipfsHash | cut -d'"' -f4)

echo "✅ Deployment complete!"
echo "📌 New IPFS Hash: $IPFS_HASH"
echo ""
echo "⚠️  Don't forget to update DNS records:"
echo "   TXT _dnslink.varity.xyz → dnslink=/ipfs/$IPFS_HASH"
```

---

## 🔧 Troubleshooting

### **Common Issues**

**1. Build fails with image optimization error:**
```javascript
// next.config.js - Add this
images: {
  unoptimized: true
}
```

**2. Large file size (>100MB):**
```bash
# Optimize images before deployment
npm install -g imagemin-cli
imagemin public/images/* --out-dir=public/images
```

**3. CORS issues:**
```javascript
// Add to next.config.js
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'Access-Control-Allow-Origin', value: '*' },
      ],
    },
  ]
}
```

**4. 404 errors on routes:**
```javascript
// Ensure trailingSlash is true in next.config.js
trailingSlash: true
```

---

## 📊 Monitoring & Analytics

### **Pinata Dashboard Analytics**
- View at: https://app.pinata.cloud/pinmanager
- Tracks: Bandwidth usage, requests, unique visitors

### **Add Google Analytics:**
```javascript
// src/app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### **Monitor IPFS Performance:**
```bash
# Check if content is available on multiple gateways
curl -I https://gateway.pinata.cloud/ipfs/YOUR_HASH
curl -I https://cloudflare-ipfs.com/ipfs/YOUR_HASH
curl -I https://ipfs.io/ipfs/YOUR_HASH
```

---

## 💡 Best Practices

1. **Always test builds locally** before deploying
2. **Keep IPFS hashes documented** in deployment-info.json
3. **Use Cloudflare** for better global performance
4. **Optimize images** to reduce bandwidth costs
5. **Pin important versions** to prevent loss
6. **Update DNS records** promptly after deployment
7. **Monitor bandwidth usage** to avoid overages

---

## 🆘 Support Resources

- **Pinata Documentation**: https://docs.pinata.cloud
- **Pinata Support**: support@pinata.cloud
- **IPFS Documentation**: https://docs.ipfs.io
- **Cloudflare IPFS**: https://developers.cloudflare.com/web3/ipfs-gateway

---

## 📅 Deployment Checklist

- [ ] Build website locally (`npm run build`)
- [ ] Test production build (`npm run start`)
- [ ] Configure Next.js for static export
- [ ] Get Pinata API keys
- [ ] Run deployment script
- [ ] Save IPFS hash
- [ ] Update DNS records (if using custom domain)
- [ ] Test on multiple IPFS gateways
- [ ] Monitor analytics
- [ ] Document deployment in team notes

---

**Note:** This guide assumes you're deploying a Next.js static site. For dynamic features (API routes, SSR), consider using Akash Network or traditional hosting.

**Last Deployment:**
- Date: [To be filled]
- IPFS Hash: [To be filled]
- Size: ~120 MB
- Monthly Cost: $20 (Pinata Picnic Plan)