import React from 'react';
import { Box, IconButton } from '@mui/material';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import StarHalf from '@mui/icons-material/StarHalf';

const StarRating = ({ rating, onChange }) => {
    const handleClick = (value) => {
        if (onChange) onChange(value);
    };

    return (
        <Box display="flex" alignItems="center">
            {[1, 2, 3, 4, 5].map((star) => {
                let starIcon;
                if (rating >= star) {
                    starIcon = <Star key={star} style={{ color: '#ff9800' }} />;
                } else if (rating >= star - 0.5) {
                    starIcon = <StarHalf key={star} style={{ color: '#ff9800' }} />;
                } else {
                    starIcon = <StarBorder key={star} style={{ color: '#ff9800' }} />;
                }

                return (
                    <IconButton key={star} onClick={() => handleClick(star)}>
                        {starIcon}
                    </IconButton>
                );
            })}
        </Box>
    );
};

export default StarRating;
