// import React, { useState } from 'react';
// import {
//     Grid,
//     TextField,
//     Checkbox,
//     FormControlLabel,
//     Button,
//     Card,
//     CardContent,
//     CardMedia,
//     Typography,
//     FormGroup,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     IconButton,
//     Chip,
//     Box
// } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import img1 from '../img/img1.jpg';
// import img2 from '../img/img2.jpg';
// import img3 from '../img/img3.png';

// const products = [
//     { id: 1, name: 'Product 1', brand: 'Brand A', price: 100, reviews: 5, favorite: false, description: 'Description 1', image: img1 },
//     { id: 2, name: 'Product 2', brand: 'Brand B', price: 200, reviews: 4, favorite: false, description: 'Description 2', image: img2 },
//     { id: 3, name: 'Product 3', brand: 'Brand A', price: 150, reviews: 3, favorite: false, description: 'Description 3', image: img3 },
//     { id: 4, name: 'Product 4', brand: 'Brand C', price: 250, reviews: 4, favorite: false, description: 'Description 4', image: img1 }
// ];

// const ProductList = () => {
//     const [filter, setFilter] = useState({ brand: [], price: '', reviews: '', favorites: false });
//     const [search, setSearch] = useState('');
//     const [favorites, setFavorites] = useState([]);

//     const handleFilterChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         if (name === 'brand') {
//             setFilter(prevFilter => ({
//                 ...prevFilter,
//                 [name]: typeof value === 'string' ? value.split(',') : value
//             }));
//         } else {
//             setFilter({
//                 ...filter,
//                 [name]: type === 'checkbox' ? checked : value,
//             });
//         }
//     };

//     const handleFavorite = (productId) => {
//         setFavorites(prevFavorites =>
//             prevFavorites.includes(productId)
//                 ? prevFavorites.filter(id => id !== productId)
//                 : [...prevFavorites, productId]
//         );
//     };

//     const filteredProducts = products.filter(product => {
//         return (
//             (filter.brand.length === 0 || filter.brand.includes(product.brand)) &&
//             (!filter.price || product.price <= filter.price) &&
//             (!filter.reviews || product.reviews >= filter.reviews) &&
//             (!filter.favorites || favorites.includes(product.id)) &&
//             (!search || product.name.toLowerCase().includes(search.toLowerCase()))
//         );
//     });

//     return (
//         <div>
//             <div>
//                 <TextField
//                     label="Buscar"
//                     variant="outlined"
//                     fullWidth
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//                 <FormGroup row>
//                     <FormControl variant="outlined" style={{ minWidth: 120, margin: '10px' }}>
//                         <InputLabel>Marca</InputLabel>
//                         <Select
//                             multiple
//                             name="brand"
//                             value={filter.brand}
//                             onChange={handleFilterChange}
//                             renderValue={(selected) => (
//                                 <div>
//                                     {selected.map((value) => (
//                                         <Chip key={value} label={value} />
//                                     ))}
//                                 </div>
//                             )}
//                             label="Marca"
//                         >
//                             <MenuItem value="Brand A">Brand A</MenuItem>
//                             <MenuItem value="Brand B">Brand B</MenuItem>
//                             <MenuItem value="Brand C">Brand C</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <FormControl variant="outlined" style={{ minWidth: 120, margin: '10px' }}>
//                         <InputLabel>Precio</InputLabel>
//                         <Select name="price" value={filter.price} onChange={handleFilterChange} label="Precio">
//                             <MenuItem value=""><em>None</em></MenuItem>
//                             <MenuItem value={100}>Hasta $100</MenuItem>
//                             <MenuItem value={200}>Hasta $200</MenuItem>
//                             <MenuItem value={300}>Hasta $300</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <FormControl variant="outlined" style={{ minWidth: 120, margin: '10px' }}>
//                         <InputLabel>Reviews</InputLabel>
//                         <Select name="reviews" value={filter.reviews} onChange={handleFilterChange} label="Reviews">
//                             <MenuItem value=""><em>None</em></MenuItem>
//                             <MenuItem value={3}>3 estrellas o más</MenuItem>
//                             <MenuItem value={4}>4 estrellas o más</MenuItem>
//                             <MenuItem value={5}>5 estrellas</MenuItem>
//                         </Select>
//                     </FormControl>
//                     <FormControlLabel
//                         control={<Checkbox name="favorites" checked={filter.favorites} onChange={handleFilterChange} />}
//                         label="Mostrar solo favoritos"
//                     />
//                 </FormGroup>
//             </div>
//             <Grid container spacing={1}>
//                 {filteredProducts.map(product => (
//                     <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//                         <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
//                             <CardMedia
//                                 component="img"
//                                 alt={product.name}
//                                 height="300"
//                                 image={product.image}
//                                 title={product.name}
//                                 style={{ objectFit: 'contain' }}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="h2">
//                                     {product.name}
//                                 </Typography>
//                                 <Typography variant="body2" color="textSecondary" component="p" style={{ marginBottom: '10px' }}>
//                                     {product.description}
//                                 </Typography>
//                                 <Box display="flex" justifyContent="space-between" alignItems="center">
//                                     <Typography variant="h6" color="primary">
//                                         ${product.price}
//                                     </Typography>
//                                     <Box display="flex" alignItems="center">
//                                         <IconButton onClick={() => handleFavorite(product.id)}>
//                                             <FavoriteIcon color={favorites.includes(product.id) ? 'error' : 'disabled'} />
//                                         </IconButton>
//                                         <Button size="small" color="primary" variant="contained">
//                                             Lo Quiero
//                                         </Button>
//                                     </Box>
//                                 </Box>
//                             </CardContent>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//     );
// };

// export default ProductList;

import React, { useState } from 'react';
import {
    Grid,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Chip,
    Box,
    IconButton
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRating from './StarRating';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.png';

const products = [
    { id: 1, name: 'Product 1', brand: 'Brand A', price: 100, reviews: 5, favorite: false, description: 'Description 1', image: img1 },
    { id: 2, name: 'Product 2', brand: 'Brand B', price: 200, reviews: 4, favorite: false, description: 'Description 2', image: img2 },
    { id: 3, name: 'Product 3', brand: 'Brand A', price: 150, reviews: 3, favorite: false, description: 'Description 3', image: img3 },
    { id: 4, name: 'Product 4', brand: 'Brand C', price: 250, reviews: 4, favorite: false, description: 'Description 4', image: img1 }
];

const ProductList = () => {
    const [filter, setFilter] = useState({ brand: [], price: '', reviews: '', favorites: false });
    const [search, setSearch] = useState('');
    const [favorites, setFavorites] = useState([]);

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'brand') {
            setFilter(prevFilter => ({
                ...prevFilter,
                [name]: typeof value === 'string' ? value.split(',') : value
            }));
        } else {
            setFilter({
                ...filter,
                [name]: type === 'checkbox' ? checked : value,
            });
        }
    };

    const handleRatingChange = (rating) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            reviews: rating
        }));
    };

    const handleFavorite = (productId) => {
        setFavorites(prevFavorites =>
            prevFavorites.includes(productId)
                ? prevFavorites.filter(id => id !== productId)
                : [...prevFavorites, productId]
        );
    };

    const filteredProducts = products.filter(product => {
        return (
            (filter.brand.length === 0 || filter.brand.includes(product.brand)) &&
            (!filter.price || product.price <= filter.price) &&
            (!filter.reviews || product.reviews >= filter.reviews) &&
            (!filter.favorites || favorites.includes(product.id)) &&
            (!search || product.name.toLowerCase().includes(search.toLowerCase()))
        );
    });

    return (
        <div style={{ display: 'flex' }}>
            <Box
                component="div"
                sx={{
                    width: '250px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    borderRight: '1px solid #ccc'
                }}
            >
                <TextField
                    label="Buscar"
                    variant="outlined"
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <FormControl variant="outlined">
                    <InputLabel>Marca</InputLabel>
                    <Select
                        multiple
                        name="brand"
                        value={filter.brand}
                        onChange={handleFilterChange}
                        renderValue={(selected) => (
                            <div>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </div>
                        )}
                        label="Marca"
                    >
                        <MenuItem value="Brand A">Brand A</MenuItem>
                        <MenuItem value="Brand B">Brand B</MenuItem>
                        <MenuItem value="Brand C">Brand C</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel>Precio</InputLabel>
                    <Select name="price" value={filter.price} onChange={handleFilterChange} label="Precio">
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={100}>Hasta $100</MenuItem>
                        <MenuItem value={200}>Hasta $200</MenuItem>
                        <MenuItem value={300}>Hasta $300</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ width: '100%', margin: '16px 0' }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px' }}>
                        <InputLabel htmlFor="reviews-select" sx={{ gridColumn: '1 / 2' }}>
                            Reviews
                        </InputLabel>
                        <Box sx={{ gridColumn: '2 / 3' }}>
                            <StarRating
                                rating={filter.reviews}
                                onChange={handleRatingChange}
                            />
                        </Box>
                    </Box>
                </FormControl>
                <FormControlLabel
                    control={<Checkbox name="favorites" checked={filter.favorites} onChange={handleFilterChange} />}
                    label="Mostrar solo favoritos"
                />
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, padding: '20px' }}
            >
                <Grid container spacing={3}>
                    {filteredProducts.map(product => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3, borderRadius: '8px' }}>
                                <Box sx={{ position: 'relative', height: '70%' }}>
                                    <CardMedia
                                        component="img"
                                        alt={product.name}
                                        image={product.image}
                                        title={product.name}
                                        sx={{ height: '100%', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                                    />
                                    <Box sx={{ position: 'absolute', top: '8px', right: '8px' , }}>
                                        <IconButton onClick={() => handleFavorite(product.id) }>
                                            <FavoriteBorderIcon color={favorites.includes(product.id) ? 'error' : 'disabled'} />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <CardContent sx={{ flexGrow: 1, backgroundColor: '#FFFFFF' }}>
                                    <Typography gutterBottom variant="h5" component="h2" sx={{ mb: 1 }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" sx={{ mb: 2 }}>
                                        {product.description}
                                    </Typography>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                                            ${product.price}
                                        </Typography>
                                        <Button size="small" color="primary" variant="contained" style={{backgroundColor:'#FFE800', color:'#0347B6', fontWeight:'700'}} sx={{ ml: 1 }}>
                                            Lo Quiero
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};

export default ProductList;
