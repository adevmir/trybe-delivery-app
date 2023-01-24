import { useHistory } from 'react-router-dom';

export default function useSubmitOrders() {
  const history = useHistory();
  const handleSubmit = ({ target }) => {
    const formData = Object.fromEntries([...new FormData(target)]);

    console.log(formData);
    console.log('create request body object');
    console.log('send request to api');
    console.log('make some action based on returned data');
    const sellId = 'some Id returned by API';
    history.push(`/customer/orders/${sellId}`);
  };

  return {
    handleSubmit,
  };
}
