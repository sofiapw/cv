# CLAUDE.MD

## Project Overview

This is a personal CV website for Sofia Penabaz-Wiley, Ph.D., built using Eleventy (11ty), a static site generator. The site presents a professional curriculum vitae with sections for experience, education, publications, conferences, achievements, skills, volunteer work, and interests.

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
├── _site/              # Generated static site (build output)
├── content/            # Markdown content files
│   ├── 00_header.md
│   ├── 01_experience.md
│   ├── 02_education.md
│   ├── 03_interests.md
│   ├── 04_volunteer_work.md
│   ├── 05_conferences.md
│   ├── 06_achievements_and_prizes.md
│   ├── 07_general_skills.md
│   ├── 08_technical_skills.md
│   ├── 09_research_skills.md
│   ├── 10_art_and_design_skills.md
│   └── 11_publications_and_designs.md
├── eleventy.config.js  # Eleventy configuration
├── index.njk           # Main page template
├── package.json        # Node.js dependencies
└── .gitignore         # Git ignore rules
```

## Content Organization

The CV content is modularized into separate markdown files in the `content/` directory:

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

## Building and Development

### Commands

- **Development Server**: `npm start` - Starts Eleventy with live reload
- **Production Build**: `npm run build` - Generates static site in `_site/` directory

### Template System

The main template (`index.njk`) uses Nunjucks and includes:
- Front matter with page metadata (title, layout, updated date)
- Navigation menu with anchor links to sections
- Dynamic markdown inclusion using `{% markdown "path/to/file.md" %}`

### Layout

The page uses a base layout (`base.njk`) referenced in the front matter. The template structure includes:
- Header with name and title
- Navigation bar with section links
- Main content container with semantic sections

## Making Updates

### Updating Content

To update CV content:
1. Edit the relevant markdown file in the `content/` directory
2. Run `npm start` to preview changes locally
3. Build with `npm run build` when ready to deploy

### Adding New Sections

To add a new CV section:
1. Create a new markdown file in `content/` (follow numbering convention)
2. Add a new section in `index.njk` with appropriate ID
3. Add navigation link if needed
4. Update this CLAUDE.MD file to document the new section

### Modifying Layout or Styling

- Template structure: Edit `index.njk`
- Base layout: Edit `_includes/base.njk`
- Site configuration: Edit `eleventy.config.js`

## Git Workflow

- **Current Branch**: main
- **Modified Files**: `_site/index.html` (generated output)
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

- **Last Updated**: August 2024 (per index.njk front matter)
- Review and update content regularly to keep CV current
- Consider updating the "updated" field in front matter when making significant changes
- Ensure all markdown files use consistent formatting

## Important Configuration Notes

### Eleventy Ignore Rules

The `eleventy.config.js` file contains ignore rules to prevent certain files from being processed as templates:

```javascript
// Ignore the numbered markdown files (they're included via shortcode)
eleventyConfig.ignores.add("./[0-9]*.md");

// Ignore CLAUDE.MD documentation file
eleventyConfig.ignores.add("./CLAUDE.MD");
```

These rules are essential because:
- Numbered content files in `content/` are included via the `{% markdown %}` shortcode in `index.njk`
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
3. Preserve the numbering convention for content files
4. Keep sections organized and semantically meaningful
5. Test builds locally before committing changes
6. Update the "updated" field in `index.njk` when making substantial content changes
7. Maintain the professional tone appropriate for a CV/resume
8. **When done with changes, always kill any running Eleventy servers first, then start the dev server and open the site for the user**
9. Check for running background processes before starting new ones to avoid port conflicts
10. **Always push to GitHub after saving (creating a commit) to keep the remote repository in sync**
