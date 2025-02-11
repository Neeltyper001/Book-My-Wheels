import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { AnimatePresence } from 'motion/react';
import { motion } from 'motion/react';
import  { useState } from 'react'
import CarCard from '../Card/CarCard';

const Caraousel = () => {
    const [index, setIndex] = useState(0);

    const cards = [
         {
            carName: "Car 1",
            carCost: "This is the first card",
            image: "/images/feature-1.png",
            sitter: "4"
          },
         {
            carName: "Car 2",
            carCost: "This is the first card",
            image: "/images/feature-2.png",
            sitter: "6"
          },
         {
            carName: "Car 3",
            carCost: "This is the first card",
            image: "/images/feature-1.png",
            sitter: "5"
          },
         {
            carName: "Car 4",
            carCost: "This is the first card",
            image: "/images/feature-2.png",
            sitter: "4"
          },
         {
            carName: "Car 5",
            carCost: "This is the first card",
            image: "/images/feature-1.png",
            sitter: "4"
          },
    ]

    const handleNext = () => setIndex((prev) => (prev + 1) % cards.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  
    return (
      <Box sx={{ position: "relative", left:"50%", transform:'translate(-50%)', width: {xs: 250, sm: 400}, height: "50%", overflow: "hidden", borderRadius: 2 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", width: "100%" }}
          >
            <CarCard {...cards[index]} />
          </motion.div>
        </AnimatePresence>
  
        {/* Previous Button */}
        <IconButton
          onClick={handlePrev}
          sx={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", color: "white", "&:hover": { background: "rgba(0,0,0,0.7)" } }}
        >
          <ArrowBackIos />
        </IconButton>
  
        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          sx={{ position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)", background: "rgba(0,0,0,0.5)", color: "white", "&:hover": { background: "rgba(0,0,0,0.7)" } }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>
    )
}

export default Caraousel