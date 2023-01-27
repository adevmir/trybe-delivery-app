import { useParams } from 'react-router-dom';

export default function OrderDetails() {
  const { id } = useParams();
  return (
    <div>
      Order details page - order id:
      {' '}
      {id}
    </div>
  );
}
