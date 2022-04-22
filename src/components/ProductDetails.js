import axios from 'axios';
import React , { useContext, useEffect, useState}from 'react';
import { Link } from 'react-router-dom';
import { getProduct } from '../services/api';

//Context
// import { ProductsContext } from '../context/ProductContextProvider';

//Styles
import styles from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const id = props.match.params.id;

    const [product, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProduct(id));
        }

        fetchAPI();
    }, []);

    // const data = useContext(ProductsContext);
    const {image , title , description , category , price} = product;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to='/products'>Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;