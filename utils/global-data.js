export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Trisha Salas';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Digital Accessibility Consultatn';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
