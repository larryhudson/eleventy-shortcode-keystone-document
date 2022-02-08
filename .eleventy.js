const reactDOMServer = require("react-dom/server");
const { DocumentRenderer } = require("@keystone-6/document-renderer");

const renderDocumentToString = (document) => {
  return reactDOMServer.renderToString(
    DocumentRenderer({
      document,
    })
  );
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("keystoneDocument", function (document) {
    return renderDocumentToString(document);
  });
};
