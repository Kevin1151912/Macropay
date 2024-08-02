import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';

const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', image: 'https://via.placeholder.com/140' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: 'https://via.placeholder.com/140' },
    { id: 3, name: 'Product 3', description: 'Description 3', image: 'https://via.placeholder.com/140' },
    { id: 4, name: 'Product 4', description: 'Description 4', image: 'https://via.placeholder.com/140' },
    { id: 5, name: 'Product 5', description: 'Description 5', image: 'https://via.placeholder.com/140' },
    { id: 6, name: 'Product 6', description: 'Description 6', image: 'https://via.placeholder.com/140' },
    { id: 7, name: 'Product 7', description: 'Description 7', image: 'https://via.placeholder.com/140' },
    { id: 8, name: 'Product 8', description: 'Description 8', image: 'https://via.placeholder.com/140' },
    { id: 9, name: 'Product 9', description: 'Description 9', image: 'https://via.placeholder.com/140' },
    { id: 10, name: 'Product 10', description: 'Description 10', image: 'https://via.placeholder.com/140' },
    { id: 11, name: 'Product 11', description: 'Description 11', image: 'https://via.placeholder.com/140' },
    { id: 12, name: 'Product 12', description: 'Description 12', image: 'https://via.placeholder.com/140' }
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id)); 

    return (
        <Container>
            <Card>
                <CardMedia
                    component="img"
                    alt={product.name}
                    height="140"
                    image={product.image}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ProductDetail;
