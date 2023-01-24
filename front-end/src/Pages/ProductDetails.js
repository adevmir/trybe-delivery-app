import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  return (
    <div>
      Product details page - product id:
      {' '}
      {id}
    </div>
  );
}
