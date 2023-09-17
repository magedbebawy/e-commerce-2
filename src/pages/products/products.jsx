import { useNavigate } from 'react-router-dom';

function Products() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/addproduct');
    }
    return(
        <div>
            Products
            <button onClick={handleClick}>Add product</button>
        </div>
    )
}

export default Products;