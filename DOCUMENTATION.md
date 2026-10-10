# Project Documentation: Personal Portfolio Website
**Author:** Ayush Pal · PRN 250105231278 · CSE (AI & ML), Second year

## 1. Introduction
A single-page portfolio that presents my profile, skills, projects, achievements and contact details online.

## 2. Problem Statement
Academic work sits in separate files (Excel, Word, PDF). Teachers and recruiters need one place to see it quickly.

## 3. Objectives
Present work professionally; practise Git/GitHub and Vercel deployment; make data work interactive; keep the site responsive and accessible.

## 4. Proposed Solution
A static Bootstrap 5 website with an interactive Chart.js dashboard and links to each project document, deployed from GitHub to Vercel.

## 5. Technologies Used
HTML5, CSS3, JavaScript, Bootstrap 5.3, Chart.js 4, Git, GitHub, Vercel, VS Code.

## 6. System Requirements
Any modern browser (Chrome, Edge, Firefox, Safari); internet connection to load Bootstrap, Chart.js and fonts from CDNs.

## 7. Website Features
Animated BFS network hero; live hospital dashboard with selectable pivot, measure and chart type; project cards; timeline sections; mailto contact form; downloadable documents.

## 8. Website Structure
Sections: Home, About, Skills, Projects, Live dashboard, Education, Achievements, Experience, Contact (see README for file tree).

## 9. UI/UX Design
Deep navy with teal and orange accents; Space Grotesk headings and IBM Plex Sans body text. The hero visual reflects my BFS project. Light and dark modes follow the device setting.

## 10. Implementation
The hero uses an HTML canvas: nodes connect to their three nearest neighbours, and a BFS pass computes distances and the shortest path, animated level by level. The dashboard reads `js/data.js`, copied from the workbook's Pivot Tables sheet, and redraws on every selection.

## 11. GitHub Repository
Source: https://github.com/ayushomprakashpal-maker (add repository name). Meaningful commits, README, clear folders.

## 12. Vercel Deployment
Repository imported into Vercel, default static settings, auto-deploy on push. Live URL: (add).

## 13. Testing
Check each nav link, all downloads, dashboard dropdowns, contact form, and layout at mobile, tablet and desktop widths. Record results here.

## 14. Screenshots
(Add screenshots of Home, Projects, Dashboard, Mobile view.)

## 15. Challenges Faced
Keeping the animation light on phones; making the dashboard data match the Excel pivots; choosing a design that is not a copied template.

## 16. Future Scope
Blog, project filtering, dark-mode toggle, visitor analytics, custom domain, SEO improvements.

## 17. Conclusion
The portfolio gathers my work in one deployable, responsive site and demonstrates version control, deployment and documentation skills.

## 18. References
Bootstrap docs (getbootstrap.com), Chart.js docs (chartjs.org), Vercel docs (vercel.com/docs), GitHub docs (docs.github.com).
