import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './addProduct.css';

const AddProduct = () => {
    const [files, setFiles] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedImageName, setSelectedImageName] = useState([]);
    const [name, setName] = useState('');
    const [description, setDesription] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const handleRemoveImage = (index) => {
        // Remove the image, file, and name from the corresponding states
        setFiles(prevFiles => {
            const updatedFiles = [...prevFiles];
            updatedFiles[index] = undefined;
            return updatedFiles;
        });
        setSelectedImages(prevImages => {
            const updatedImages = [...prevImages];
            updatedImages[index] = undefined;
            return updatedImages;
        });
        setSelectedImageName(prevNames => {
            const updatedNames = [...prevNames];
            updatedNames[index] = undefined;
            return updatedNames;
        });
    }

    const handleImageSelect = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            setFiles(prevFiles => {
                const updatedFiles = [...prevFiles];
                updatedFiles[index] = file;
                return updatedFiles;
            });
            setSelectedImages(prevFiles => {
                const imageUrl = URL.createObjectURL(file);
                const updatedFiles = [...prevFiles];
                updatedFiles[index] = imageUrl;
                return updatedFiles;
            });
            setSelectedImageName(prevFiles => {
                const updatedFiles = [...prevFiles];
                updatedFiles[index] = file.name;
                return updatedFiles;
            });
        }
    }

    const onUpload = async (e) => {
        e.preventDefault();
        if(!name || !description || !category || !price || !quantity || !files || files.length <= 0) { 
            toast.error('All fields are required');
            return;
        }
        const formData = new FormData();
        files.forEach(file => {
            if (file) { 
                formData.append('images', file);
            }
        });

        formData.append('name', name);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('price', price.toString()); // Convert number to string
        formData.append('quantity', quantity.toString()); // Convert number to string
        formData.append("token",localStorage.getItem('authToken'));

        console.log(files);

        try {
            const response = await fetch('http://localhost:3002/product/createproduct', {
                method: 'POST',
                body: formData
            });
    
            if (response.status === 200) {
                console.log('Images uploaded successfully.');
                toast.success('Product added successfully');
            } else {
                console.error('Failed to upload images.');
            }
        } catch (error) {
            console.error(error || 'Error uploading images.');
        }
    };

    return (
        <div>
            <form >
                <div className="product-container">
                    <div className="inputs">
                        <input type="text" placeholder="Product name" onChange={e => setName(e.target.value)}/>
                        <textarea placeholder="Description" onChange={e => setDesription(e.target.value)}></textarea>
                        <input type="text" placeholder="category" onChange={e => setCategory(e.target.value)}/>
                        <input type="number" placeholder="Price" onChange={e => setPrice(e.target.value)}/>
                        <input type="number" placeholder="Quantity" onChange={e => setQuantity(e.target.value)}/>
                    </div>
                    <div className="images">
                        {Array.from({ length: 6 }).map((_, index) =>  ( selectedImages[index] ? (
                            <div className="file-upload-wrapper" key={index}>
                                <img src={selectedImages[index]} alt={selectedImageName[index]} className="selected-image" />
                                <button className='remove-button' onClick={() => handleRemoveImage(index)}>X</button>
                            </div>
                        ) : (
                            <div className="file-upload-wrapper"  key={index}>
                                <input
                                    type="file"
                                    id={`file-input-${index}`}
                                    className="file-upload-input"
                                    onChange={e => handleImageSelect(index, e)}
                                    accept="image/*"
                                />
                                <label htmlFor={`file-input-${index}`} className="file-upload-label">
                                    Choose an image
                                </label>
                            </div>
                        )))}
                    </div>
                </div>
                
                <button onClick={onUpload} type="button" className='add-product'>Add product</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default AddProduct;
