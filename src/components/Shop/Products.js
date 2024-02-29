import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 'p1',
    title: 'Redux-Toolkit Actions! Part 1',
    price: 10,
    description: 'Redux-Toolkit is amazingly powerful!!'
  },
  {
    id: 'p2',
    title: 'Redux-Toolkit Actions! Part 2',
    price: 15,
    description: 'Redux-Toolkit is amazingly powerful!!'
  },
  {
    id: 'p3',
    title: 'Redux-Toolkit Actions! Part 3',
    price: 7.65,
    description: 'Redux-Toolkit is amazingly powerful!!'
  },
  {
    id: 'p4',
    title: 'Redux-Toolkit Actions! Part 4',
    price: 9.99,
    description: 'Redux-Toolkit is amazingly powerful!!'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(item => 
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)}
        
      </ul>
    </section>
  );
};

export default Products;
