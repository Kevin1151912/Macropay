import React, { useState } from "react";
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
    Box,
    IconButton,
    Divider
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRating from "./StarRating";
import ImageCarousel from "./ImageCarousel";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.png";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.png";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.webp";
import img8 from "../img/img8.jpg";
import img9 from "../img/img9.png";
import img10 from "../img/img10.png";
import img11 from "../img/img11.webp";
import img12 from "../img/img12.webp";

const calculatePayments = (price) => {
    const weeklyPayment = (price / 12 / 4).toFixed(2);
    const monthlyPayment = (price / 12).toFixed(2);
    return { weeklyPayment, monthlyPayment };
};

const products = [
    {
        id: 1,
        name: "iPhone 13",
        brand: "Apple",
        price: 100,
        reviews: 5,
        favorite: false,
        description: `$${calculatePayments(100).weeklyPayment} p/semana\n$${calculatePayments(100).monthlyPayment} p/mes`,
        image: img1,
    },
    {
        id: 2,
        name: "Samsung Galaxy S21",
        brand: "Samsung",
        price: 200,
        reviews: 4,
        favorite: false,
        description: `$${calculatePayments(200).weeklyPayment} p/semana\n$${calculatePayments(200).monthlyPayment} p/mes`,
        image: img2,
    },
    {
        id: 3,
        name: "Google Pixel 6",
        brand: "Google",
        price: 150,
        reviews: 3,
        favorite: false,
        description: `$${calculatePayments(150).weeklyPayment} p/semana\n$${calculatePayments(150).monthlyPayment} p/mes`,
        image: img3,
    },
    {
        id: 4,
        name: "OnePlus 9",
        brand: "OnePlus",
        price: 250,
        reviews: 4,
        favorite: false,
        description: `$${calculatePayments(250).weeklyPayment} p/semana\n$${calculatePayments(250).monthlyPayment} p/mes`,
        image: img4,
    },
    {
        id: 5,
        name: "Xiaomi Mi 11",
        brand: "Xiaomi",
        price: 350,
        reviews: 2,
        favorite: false,
        description: `$${calculatePayments(350).weeklyPayment} p/semana\n$${calculatePayments(350).monthlyPayment} p/mes`,
        image: img5,
    },
    {
        id: 6,
        name: "Sony Xperia 1 III",
        brand: "Sony",
        price: 250,
        reviews: 1,
        favorite: false,
        description: `$${calculatePayments(250).weeklyPayment} p/semana\n$${calculatePayments(250).monthlyPayment} p/mes`,
        image: img6,
    },
    {
        id: 7,
        name: "Oppo Find X3 Pro",
        brand: "Oppo",
        price: 180,
        reviews: 2,
        favorite: false,
        description: `$${calculatePayments(180).weeklyPayment} p/semana\n$${calculatePayments(180).monthlyPayment} p/mes`,
        image: img7,
    },
    {
        id: 8,
        name: "Vivo X60 Pro",
        brand: "Vivo",
        price: 100,
        reviews: 3,
        favorite: false,
        description: `$${calculatePayments(100).weeklyPayment} p/semana\n$${calculatePayments(100).monthlyPayment} p/mes`,
        image: img8,
    },
    {
        id: 9,
        name: "Realme GT",
        brand: "Realme",
        price: 210,
        reviews: 3,
        favorite: false,
        description: `$${calculatePayments(210).weeklyPayment} p/semana\n$${calculatePayments(210).monthlyPayment} p/mes`,
        image: img9,
    },
    {
        id: 10,
        name: "Motorola Edge 20",
        brand: "Motorola",
        price: 230,
        reviews: 4,
        favorite: false,
        description: `$${calculatePayments(230).weeklyPayment} p/semana\n$${calculatePayments(230).monthlyPayment} p/mes`,
        image: img10,
    },
    {
        id: 11,
        name: "Nokia 8.3 5G",
        brand: "Nokia",
        price: 280,
        reviews: 4,
        favorite: false,
        description: `$${calculatePayments(280).weeklyPayment} p/semana\n$${calculatePayments(280).monthlyPayment} p/mes`,
        image: img11,
    },
    {
        id: 12,
        name: "Asus ROG Phone 5",
        brand: "Asus",
        price: 180,
        reviews: 5,
        favorite: false,
        description: `$${calculatePayments(180).weeklyPayment} p/semana\n$${calculatePayments(180).monthlyPayment} p/mes`,
        image: img12,
    },
];

const ProductList = () => {
    const [filter, setFilter] = useState({
        brand: [],
        minPrice: "",
        maxPrice: "",
        reviews: "",
        favorites: false,
    });
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState(
        products.filter((product) => product.favorite).map((product) => product.id)
    );

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === "minPrice" || name === "maxPrice") {
            setFilter((prevFilter) => ({
                ...prevFilter,
                [name]: value ? Number(value) : "", // Convertir a número si hay valor
            }));
        } else if (name === "brand") {
            setFilter((prevFilter) => ({
                ...prevFilter,
                brand: checked
                    ? [...prevFilter.brand, value]
                    : prevFilter.brand.filter((brand) => brand !== value),
            }));
        } else {
            setFilter({
                ...filter,
                [name]: type === "checkbox" ? checked : value,
            });
        }
    };

    const handleRatingChange = (rating) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            reviews: rating,
        }));
    };

    const handleFavoriteToggle = (productId) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(productId)
                ? prevFavorites.filter((id) => id !== productId)
                : [...prevFavorites, productId]
        );
    };

    const filteredProducts = products.filter((product) => {
        const isBrandMatch = filter.brand.length === 0 || filter.brand.includes(product.brand);
        const isPriceMatch = (
            (!filter.minPrice || product.price >= filter.minPrice) &&
            (!filter.maxPrice || product.price <= filter.maxPrice)
        );
        const isReviewsMatch = !filter.reviews || product.reviews >= filter.reviews;
        const isFavoriteMatch = !filter.favorites || favorites.includes(product.id);
        const isSearchMatch = !search || product.name.toLowerCase().includes(search.toLowerCase());

        return isBrandMatch && isPriceMatch && isReviewsMatch && isFavoriteMatch && isSearchMatch;
    });

    const bestSellingProducts = products.filter((product) => product.reviews >= 4);

    return (
        <><Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
            <Box
                component="div"
                sx={{
                    width: { xs: "100%", sm: "250px" },
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                <TextField
                    label="Buscar"
                    variant="outlined"
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

                <Divider />

                {/* Filtro de marcas con Checkboxes */}
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h10" color={'#0347B6'} fontWeight={'bolder'}>Marcas</Typography>
                    <Box
                        sx={{
                            maxHeight: "120px",
                            overflowY: "auto",
                            borderRadius: "4px",
                            padding: "8px",
                        }}
                    >
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            {["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Sony", "Oppo", "Vivo", "Realme", "Motorola", "Nokia", "Asus"].map((brand) => (
                                <FormControlLabel
                                    key={brand}
                                    control={<Checkbox
                                        name="brand"
                                        value={brand}
                                        checked={filter.brand.includes(brand)}
                                        onChange={handleFilterChange} />}
                                    label={brand}
                                    sx={{ margin: "-7px 0" }} />
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Divider />

                {/* Filtro de precios */}
                <FormControl variant="outlined" sx={{ width: "100%", margin: "-7px 0", gap: "12px" }}>
                    <Typography variant="h10" color="#0347B6" fontWeight="bolder">Precio</Typography>
                    <Box sx={{ display: "flex", gap: "1px" }}>
                        <TextField
                            label="Mínimo"
                            type="number"
                            name="minPrice"
                            value={filter.minPrice || ""}
                            onChange={handleFilterChange}
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            sx={{ flex: 1 }} />
                        <Typography
                            sx={{
                                color: "gray",
                                fontWeight: "bolder",
                                margin: "auto",
                            }}
                        >
                            -
                        </Typography>
                        <TextField
                            label="Máximo"
                            type="number"
                            name="maxPrice"
                            value={filter.maxPrice || ""}
                            onChange={handleFilterChange}
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            sx={{ flex: 1 }} />
                    </Box>
                </FormControl>

                <Divider />

                {/* Filtro de reseñas */}
                <FormControl
                    variant="standard"
                    sx={{ width: "100%", margin: "-7px 0" }}
                >
                    <Typography variant="h8" color="#0347B6" fontWeight="bolder">Reviews</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "2px",
                            mt: 0.5,
                        }}
                    >
                        <StarRating
                            rating={filter.reviews}
                            onChange={handleRatingChange}
                            sx={{ fontSize: "14px" }} />
                    </Box>
                </FormControl>

                <Divider />

                {/* Filtro de favoritos */}
                <FormControlLabel
                    control={<Checkbox
                        name="favorites"
                        checked={filter.favorites}
                        onChange={handleFilterChange}
                        margin="-7px 0" />}
                    label="Mostrar solo favoritos" />

                <Divider />

                {/* Filtro de memoria */}
                <Typography variant="h8" color="#0347B6" fontWeight="bolder">Memoria</Typography>

                {/* Línea divisoria */}
                <Divider />

                {/* Filtro de rango*/}
                <Typography variant="h8" color="#0347B6" fontWeight="bolder">Rango</Typography>

                {/* Línea divisoria */}
                <Divider />

                {/* Filtro de cámara */}
                <Typography variant="h8" color="#0347B6" fontWeight="bolder">Cámara</Typography>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, padding: "20px" }}>
    <Grid container spacing={3} justifyContent="center">
        {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Card
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        boxShadow: 3,
                        borderRadius: "15px",
                        maxWidth: "380px", 
                        margin: "0 auto",
                    }}
                >
                    <Box sx={{ position: "relative", height: "70%" }}>
                        <CardMedia
                            component="img"
                            alt={product.name}
                            image={product.image}
                            title={product.name}
                            sx={{
                                height: "100%",
                                objectFit: "cover",
                                borderTopLeftRadius: "8px",
                                borderTopRightRadius: "8px",
                            }} />
                        <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                            <IconButton onClick={() => handleFavoriteToggle(product.id)}>
                                <FavoriteBorderIcon
                                    color={favorites.includes(product.id) ? "error" : "disabled"} />
                            </IconButton>
                        </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, backgroundColor: "#FFFFFF" }}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            sx={{ mb: 1, textAlign: "center" }} 
                        >
                            {product.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            sx={{ mb: 2, textAlign: "center" }} 
                        >
                            {product.description}
                        </Typography>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ mb: 2 }}
                        >
                            <StarRating rating={product.reviews} />
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography
                                variant="h6"
                                color="primary"
                                sx={{ fontWeight: "bold" }}
                            >
                                ${product.price}
                            </Typography>
                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                style={{
                                    backgroundColor: "#FFD300",
                                    color: "#0347B6",
                                    fontWeight: "700",
                                }}
                                sx={{ ml: 1 }}
                            >
                                Lo Quiero
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
</Box>


        </Box>
            <ImageCarousel />

            {/* Productos más vendidos */}
            <Box sx={{ padding: "20px", marginBottom:"20px"}}>
                <Typography
                    variant="h6"
                    color="#0347B6"
                    fontWeight="900"
                    mb={2}
                    align="center" 
                    marginBottom={"50px"}
                >
                    Nuestros Productos Más Vendidos
                </Typography>
                <Grid container spacing={3} justifyContent="center"> 
                    {bestSellingProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Card
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    boxShadow: 3,
                                    borderRadius: "20px",
                                    maxWidth: "380px", 
                                    margin: "0 auto",
                                }}
                            >
                                <Box sx={{ position: "relative", height: "70%" }}>
                                    <CardMedia
                                        component="img"
                                        alt={product.name}
                                        image={product.image}
                                        title={product.name}
                                        sx={{
                                            height: "100%",
                                            objectFit: "cover",
                                            borderTopLeftRadius: "8px",
                                            borderTopRightRadius: "8px",
                                        }} />
                                    <Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
                                        <IconButton onClick={() => handleFavoriteToggle(product.id)}>
                                            <FavoriteBorderIcon
                                                sx={{ color: favorites.includes(product.id) ? "black" : "action" }} />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <CardContent sx={{ flexGrow: 1, backgroundColor: "#FFFFFF" }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        sx={{ mb: 1, textAlign: "center" }} 
                                    >
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                        sx={{ mb: 2, textAlign: "center" }} 
                                    >
                                        {product.description}
                                    </Typography>
                                    <StarRating rating={product.reviews} />
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography
                                            variant="h6"
                                            color="primary"
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            ${product.price}
                                        </Typography>
                                        <Button
                                            size="small"
                                            color="primary"
                                            variant="contained"
                                            style={{
                                                backgroundColor: "#FFD300",
                                                color: "#0347B6",
                                                fontWeight: "700",
                                            }}
                                            sx={{ ml: 1 }}
                                        >
                                            Lo Quiero
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>

    );

};



export default ProductList;
