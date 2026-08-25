export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.setOutputDirectory('public');
    eleventyConfig.setIncludesDirectory('_includes');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
        if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
            return false;
        }
    });
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "America/Denver"}).toLocaleString(DateTime.DATE_FULL);
    });
}