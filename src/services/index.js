import useFetch from '../Components/CustomHook';

export const fetchPost = async (postId) => {
  const [loading, response] = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );
  return [loading, response];
};
