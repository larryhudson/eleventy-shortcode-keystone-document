const reactDOMServer = require("react-dom/server");
const { DocumentRenderer } = require("@keystone-6/document-renderer");

const renderDocumentToString = ({document, componentBlocks}) => {
  return reactDOMServer.renderToString(
    DocumentRenderer({
      document,
      componentBlocks
    })
  );
};

module.exports = function (eleventyConfig, {componentBlocks}) {
//   componentBlocks should be transpiled from JSX before supplying to the plugin?
  eleventyConfig.addShortcode("keystoneDocument", function (document) {
    return renderDocumentToString({document, componentBlocks});
  });
};
