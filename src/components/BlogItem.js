export const BlogItem = ({ blog }) => {
  return (
    <>
      <h3>{blog.title}</h3>
      <p>{blog.text}</p>
    </>
  );
}