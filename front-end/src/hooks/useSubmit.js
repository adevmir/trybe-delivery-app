export default function useSubmit() {
  const handleSubmit = ({ target }) => {
    const formData = Object.fromEntries([...new FormData(target)]);

    console.log(formData);
    console.log('create request body object');
    console.log('send request to api');
    console.log('make some action based on returned data');
  };

  return {
    handleSubmit,
  };
}
