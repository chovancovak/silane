module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat `images/` do `_site/images`Pozor, zda nejsou img
	eleventyConfig.addPassthroughCopy("img");

	// Zkopírovat `css/` do `_site/css/`
	eleventyConfig.addPassthroughCopy("css");
 return {
    // možné formáty šablon
    templateFormats: ["njk","html", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
