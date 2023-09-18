import { useNavigate } from 'react-router-dom';

function Products() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/addproduct');
    }
    const products = [
        {
            id: 1,
            name: 'Stylish Watch',
            description: 'Elegant and modern wrist watch suitable for all occasions.',
            price: 120.50,
            imageURL: 'https://via.placeholder.com/150?text=Watch'
        },
        {
            id: 2,
            name: 'Wireless Earbuds',
            description: 'High-quality sound with a comfortable fit. Noise cancelling enabled.',
            price: 85.99,
            imageURL: 'https://via.placeholder.com/150?text=Earbuds'
        },
        {
            id: 3,
            name: 'Leather Wallet',
            description: 'Genuine leather wallet with multiple card slots and coin pocket.',
            price: 49.00,
            imageURL: 'https://via.placeholder.com/150?text=Wallet'
        },
        {
            id: 4,
            name: 'Sleek Laptop Stand',
            description: 'Ergonomically designed laptop stand made of durable materials.',
            price: 35.75,
            imageURL: 'https://via.placeholder.com/150?text=Laptop+Stand'
        },
        {
            id: 5,
            name: 'Coffee Mug',
            description: 'Ceramic coffee mug with a modern design. Microwave safe.',
            price: 12.95,
            imageURL: 'https://via.placeholder.com/150?text=Coffee+Mug'
        },
        {
            id: 6,
            name: 'Desk Lamp',
            description: 'LED desk lamp with adjustable brightness settings.',
            price: 40.00,
            imageURL: 'https://via.placeholder.com/150?text=Lamp'
        }
    ];
    
    return (
        <div className="container mt-4">
            <div className="row">
                {products.map(product => (
                    <div className="col-md-6 col-lg-4 mb-4" key={product.id}> {/* 2 products per row on md screens, 3 on lg screens */}
                        <div className="card">
                            <img src={product.imageURL} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="font-weight-bold">${product.price}</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;