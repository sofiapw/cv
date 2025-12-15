const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
  const md = markdownIt({ html: true });

  // Custom shortcode to include and render markdown files
  eleventyConfig.addShortcode("markdown", function(filePath) {
    const fullPath = path.join(__dirname, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    return md.render(content);
  });

  // Watch for changes in markdown files
  eleventyConfig.addWatchTarget("./*.md");

  // Ignore the numbered markdown files (they're included via shortcode)
  eleventyConfig.ignores.add("./[0-9]*.md");

  // Ignore CLAUDE.MD documentation file
  eleventyConfig.ignores.add("./CLAUDE.MD");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
