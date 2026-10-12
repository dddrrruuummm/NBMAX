# NB MAX LUXURY

English company showcase for NB MAX LUXURY SDN. BHD., a Malaysian building materials and hardware business. Public domain: https://nbmax.org. Contact email: info@nbmax.org.

## Local use

Use Node.js 20.9 or newer. Run `npm ci`, then `npm run build` and `npm run start`. The workspace reuses an existing node_modules folder through a local symlink; this is not part of the delivery.

## GitHub and Vercel

Upload the contents of NB-MAX-Luxury-GitHub-Upload to the root of the GitHub repository. This clean folder contains all website source and images and excludes node_modules and .next. Select the Next.js preset in Vercel, build command `npm run build`, and the repository root as the Root Directory. Keep the output directory at its Next.js default.

The nbmax.org domain is configured in SEO metadata and sitemap. Connect the domain and its DNS in Vercel when publishing; the local preview does not publish the domain. The website does not create or verify an email mailbox.

## Pages and features

- Home, Company, Supply Services, Material Library, Contact, Privacy Policy, and Terms.
- Seventeen different material category photographs, four warehouse reference photographs, plus architecture and selection photography: twenty-three real photographs in total. The home page features eight material categories in an editorial, mixed-size grid and a dedicated warehouse reference spread.
- Category filtering, text search, detail dialogs, and a persistent material brief.
- Downloadable material lists and a contact form that prepares an email in the visitor's own email app. No message is transmitted until the visitor sends that email.
- Original SVG logo in navigation, footer, and favicon.
- Page metadata, canonical URLs, Open Graph, robots.txt, sitemap.xml, and business structured data.

## Editing

Company details and categories: lib/site.ts. Visual styling: app/globals.css. Logo: public/logo.svg. All final photographs: public/images. Image origins and licenses: docs/photo-sources.json. Source interpretation and design decisions: docs/CONTENT_NOTES.md.

The material brief stores only selected category IDs in browser local storage. No database, cart, login, or payment integration is included.
