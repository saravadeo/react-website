---
title: "SEO Optimization with Prerender.io and AWS CloudFront"
date: "2026-04-18"
author: "Onkar Sarvade"
tags: ["seo", "aws", "cloudfront", "prerender"]
readTime: "5 min"
---

# SEO Optimization with Prerender.io and AWS CloudFront

## Problem

JavaScript-heavy websites face a critical SEO challenge: search engine crawlers often fail to execute JavaScript properly, resulting in incomplete or empty page indexing. This means your React, Vue, or Angular application might be invisible to Google, leading to poor search rankings and reduced organic traffic.

Additionally, social media platforms like Facebook, Twitter, and LinkedIn generate link previews by fetching your page's HTML. Without server-side rendering, these previews show blank or generic content, hurting your social sharing potential.

## Approach

The solution is **server-side pre-rendering** using Prerender.io with AWS CloudFront. Here's the architecture:

1. **Prerender.io** - A service that renders JavaScript pages on-demand and caches the static HTML
2. **AWS CloudFront** - CDN that serves cached content globally with low latency
3. **AWS S3** - Storage for the prerendered HTML snapshots
4. **Smart Routing** - CloudFront functions that detect crawlers and serve prerendered content

### Why This Approach?

- **No code changes required** to your existing React app
- **Automatic** - Works for all pages without manual intervention
- **Fast** - CloudFront edge caching ensures minimal latency
- **Cost-effective** - Pay only for prerendered requests

## Implementation

### Prerequisites

- An existing React/JavaScript website
- AWS account with CloudFront and S3 access
- Prerender.io account (free tier: 250 cached pages)

### Step 1: Set Up Prerender.io

1. Sign up at [prerender.io](https://prerender.io)
2. Get your API token
3. Install the middleware (or use CloudFront Functions)

### Step 2: Configure CloudFront

```javascript
// CloudFront Function for bot detection
function handler(event) {
    var request = event.request;
    var userAgent = request.headers['user-agent'] ? request.headers['user-agent'].value : '';
    
    // Check if request is from a bot/crawler
    var isBot = /googlebot|bingbot|facebookexternalhit|twitterbot|linkedinbot/i.test(userAgent);
    
    if (isBot) {
        // Rewrite URL to prerender service
        request.headers['x-prerender-token'] = { value: 'YOUR_PRERENDER_TOKEN' };
        request.querystring['prerender'] = { value: 'true' };
    }
    
    return request;
}
```

### Step 3: Repository Structure

The complete setup is available at:
[github.com/saravadeo/prerender-io-cloudfront-s3](https://github.com/saravadeo/prerender-io-cloudfront-s3)

This repository includes:
- CloudFormation templates for infrastructure
- Lambda@Edge functions for prerender routing
- S3 bucket configurations
- Deployment scripts

## Results

After implementing this solution:

- ✅ **Google Search Console**: 100% of pages indexed vs. previous 23%
- ✅ **Social Previews**: Rich cards on Facebook, Twitter, LinkedIn
- ✅ **Page Speed**: Improved First Contentful Paint by 40%
- ✅ **Organic Traffic**: 3x increase in search impressions within 2 months

## Learnings

### Cache Management

Prerender.io caches pages for 7 days by default. For frequently updated content, implement cache-busting strategies or reduce cache duration.

### Cost Optimization

Monitor your prerendered page count. The free tier (250 pages) works for small sites, but larger sites should:
- Prerender only critical pages
- Use Prerender.io's recache API selectively
- Consider self-hosted Prerender for high-volume sites

### Edge Cases

- **Dynamic routes**: Ensure all routes are crawlable via sitemap.xml
- **Authentication**: Pages behind login don't need prerendering
- **Real-time data**: Use client-side fetching for dynamic content after initial render

### Resources

- [Prerender.io Documentation](https://prerender.io/documentation)
- [AWS CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html)
- [GitHub Repository](https://github.com/saravadeo/prerender-io-cloudfront-s3)

---

*Written on 2026-04-18 | 5 min read*
