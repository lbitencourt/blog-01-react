import { BlogItem } from "../components/BlogItem";

export const BlogList = () => {
  const blogs = [
    { title: 'Blog 1', text: ' adfçlajkfaljf açlskjfçalskfjçal skjfçl sakdjfaçlsk jfaçlsk jfaçlskj fas kldjaf lasdjflkjdsaflajs çfljkdsaçf ' },
    { title: 'Blog 2', text: 'a aldfjalçfja ldfjaçsld kfjaçslkfj çaslkjf açlskjf lçsakjf'}
  ];

  return (
    <>
      <h1>BlogList</h1>
      <ul>
        {blogs.map(b => <BlogItem blog={b} />)}
      </ul>

    </>);
}