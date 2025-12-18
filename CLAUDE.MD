# CLAUDE.MD

## Project Overview

This is a personal website for Sofia Penabaz-Wiley, Ph.D., built using Eleventy (11ty), a static site generator. The site includes multiple sections: a home page, CV/resume, blog, and additional pages.

## Technology Stack

- **Static Site Generator**: Eleventy v3.1.2
- **Templating**: Nunjucks (.njk files)
- **Content Format**: Markdown
- **Markdown Parser**: markdown-it v14.1.0
- **Build Tool**: Node.js/npm

## Project Structure

```
/Users/sofiap/Development/cv/
├── _includes/          # Template partials and layouts
│   └── base.njk        # Base HTML layout
├── _site/              # Generated static site (build output)
├── content/            # All content organized by type
│   ├── cv/             # CV/resume markdown files
│   │   ├── 00_header.md
│   │   ├── 01_experience.md
│   │   ├── 02_education.md
│   │   ├── 03_interests.md
│   │   ├── 04_volunteer_work.md
│   │   ├── 05_conferences.md
│   │   ├── 06_achievements_and_prizes.md
│   │   ├── 07_general_skills.md
│   │   ├── 08_technical_skills.md
│   │   ├── 09_research_skills.md
│   │   ├── 10_art_and_design_skills.md
│   │   ├── 11_publications_and_designs.md
│   │   └── 12_references.md
│   ├── blog/           # Blog posts (markdown files)
│   │   └── example-post.md
│   └── pages/          # Static pages (about, etc.)
│       └── about.md
├── index.njk           # Home page template
├── cv.njk              # CV page template (uses content/cv/ files)
├── blog.njk            # Blog listing page
├── eleventy.config.js  # Eleventy configuration
├── package.json        # Node.js dependencies
└── .gitignore          # Git ignore rules
```

## Site Pages

- **Home** (`/`) - Main landing page
- **CV** (`/cv/`) - Full curriculum vitae
- **Blog** (`/blog/`) - Blog posts listing
- **About** (`/about/`) - About page (placeholder)

## Content Organization

### CV Content (`content/cv/`)

The CV content is modularized into separate markdown files:

1. **Experience** (`01_experience.md`) - Professional work history
2. **Education** (`02_education.md`) - Academic credentials
3. **Publications** (`11_publications_and_designs.md`) - Research publications and design work
4. **Conferences** (`05_conferences.md`) - Conference presentations and participation
5. **Achievements** (`06_achievements_and_prizes.md`) - Awards and recognition
6. **Skills** - Multiple files covering different skill categories:
   - General skills (`07_general_skills.md`)
   - Technical skills (`08_technical_skills.md`)
   - Research skills (`09_research_skills.md`)
   - Art and design skills (`10_art_and_design_skills.md`)
7. **Volunteer Work** (`04_volunteer_work.md`) - Community service and volunteer activities
8. **Interests** (`03_interests.md`) - Personal interests and hobbies
9. **References** (`12_references.md`) - Professional references

### Blog Content (`content/blog/`)

Blog posts are markdown files with front matter. Each post should include:
- `title`: Post title
- `date`: Publication date
- `layout`: Template to use (typically `base.njk`)

### Pages (`content/pages/`)

Static pages like About, Contact, etc. Each page should include front matter with:
- `title`: Page title
- `layout`: Template to use
- `permalink`: URL path for the page

## Building and Development

### Commands

- **Development Server**: `npm start` - Starts Eleventy with live reload
- **Production Build**: `npm run build` - Generates static site in `_site/` directory

### Template System

Templates use Nunjucks and include:
- Front matter with page metadata (title, layout, updated date, permalink)
- Navigation menu linking to main site sections
- Dynamic markdown inclusion using `{% markdown "path/to/file.md" %}`

### Layout

All pages use the base layout (`base.njk`). The template structure includes:
- Header with name and title
- Navigation bar with site links
- Main content container

## Making Updates

### Updating CV Content

1. Edit the relevant markdown file in `content/cv/`
2. Run `npm start` to preview changes locally
3. Build with `npm run build` when ready to deploy

### Adding Blog Posts

1. Create a new markdown file in `content/blog/`
2. Add front matter with title, date, and layout
3. Write your content in markdown

### Adding New Pages

1. Create a new markdown file in `content/pages/`
2. Add front matter with title, layout, and permalink
3. Update navigation in templates if needed

### Adding New CV Sections

1. Create a new markdown file in `content/cv/` (follow numbering convention)
2. Add a new section in `cv.njk` with appropriate ID
3. Add navigation link in the CV page if needed

### Modifying Layout or Styling

- Template structure: Edit individual `.njk` files
- Base layout: Edit `_includes/base.njk`
- Site configuration: Edit `eleventy.config.js`

## Git Workflow

- **Current Branch**: main
- Recent commits show updates to experience and site files

### Note on Built Files

The `_site/` directory contains generated files. Consider whether these should be committed or added to `.gitignore` depending on deployment strategy.

## Deployment Considerations

This is a static site that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

The `_site/` directory contains the deployable output.

## Maintenance Notes

- **Last Updated**: December 2024
- Review and update content regularly
- Ensure all markdown files use consistent formatting

## Important Configuration Notes

### Eleventy Ignore Rules

The `eleventy.config.js` file contains ignore rules to prevent certain files from being processed as templates:

```javascript
// Ignore the CV markdown files (they're included via shortcode)
eleventyConfig.ignores.add("./content/cv/*.md");

// Ignore CLAUDE.MD documentation file
eleventyConfig.ignores.add("./CLAUDE.MD");
```

These rules are essential because:
- CV content files in `content/cv/` are included via the `{% markdown %}` shortcode in `cv.njk`
- CLAUDE.MD contains template syntax examples that should not be processed

## Development Guidelines for AI Assistants

### User Context

**The user is non-technical.** When communicating:
- Use simple, plain language without jargon
- Explain what you're doing in everyday terms
- Avoid technical terminology unless necessary
- Be patient and clear in explanations

### Common Language Mappings

Interpret user requests as follows:
- "save" → create a git commit
- "save my changes" → git add and commit
- "undo" → git revert or reset (ask for clarification)
- "publish" / "put it online" → git push
- "go back to" → git checkout
- "show me what changed" → git diff or git status
- "what did I change?" → git status and git diff

### Working with This Project

When modifying this project:
1. Always read existing content before making changes
2. Maintain consistent markdown formatting across content files
3. Preserve the numbering convention for CV content files
4. Keep sections organized and semantically meaningful
5. Test builds locally before committing changes
6. Update the "updated" field in front matter when making substantial content changes
7. Maintain the professional tone appropriate for a CV/resume
8. **When done with changes, always kill any running Eleventy servers first, then start the dev server and open the site for the user**
9. Check for running background processes before starting new ones to avoid port conflicts
10. **Always push to GitHub after saving (creating a commit) to keep the remote repository in sync**
