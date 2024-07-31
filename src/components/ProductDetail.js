import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';

const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', image: 'https://via.placeholder.com/140' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: 'https://via.placeholder.com/140' },
    { id: 3, name: 'Product 3', description: 'Description 3', image: 'https://via.placeholder.com/140' },
    { id: 4, name: 'Product 4', description: 'Description 4', image: 'https://via.placeholder.com/140' }
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id)); // Obtener producto por ID de los datos de prueba

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
                    {/* Productos relacionados */}
                </CardContent>
            </Card>
        </Container>
    );
};

export default ProductDetail;
