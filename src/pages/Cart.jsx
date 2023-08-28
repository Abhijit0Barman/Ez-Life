import { Center, Image, Text } from '@chakra-ui/react';
import { Box, Button, Divider, Heading, VStack, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        id: 1,
        title: "Wonderful Indonesia,Bali Family Holiday Package for 6 Nights",
        duration: "6 Nights / 7 Days",
        destination: "Indonesia",
        location: "Ubud (3N) → Seminyak (3N)",
        description: [
            " Known as the `Island of the Gods`. It attracts visitors with its stunning beaches, lush landscapes, vibrant arts scene, and rich cultural heritage.!"
        ],
        image: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/f8/1c/13/padma-resort-ubud.jpg?w=900&h=500&s=1",
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/249980321.jpg?k=acc8132eab8d77aee43acdaf199979a72f67ea987b57e78d8c0391cfbfd21ec1&o=&hp=1",
            "https://images.unsplash.com/photo-1571755931207-3ede68df575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
            "https://images.unsplash.com/photo-1571984405176-5958bd9ac31d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VtaW55YWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1598751240191-fbe4a9a30e02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFsaSUyMGluZG9uZXNpYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        ],
        tour: [
            {
                title: "Day 1: Arrival in Ubud",
                description: "Upon arrival in Bali, transfer to your hotel in Ubud and spend the day at leisure. Explore the art and cultural center of Bali, visit ancient temples, and enjoy the lush green landscapes. Overnight stay in Ubud."
            },
            {
                title: "Day 2: Ubud Sightseeing",
                description: "Embark on a full-day sightseeing tour of Ubud. Visit popular attractions such as the Ubud Monkey Forest, Tegalalang Rice Terrace, and the traditional art market. Explore Ubud's art galleries, watch traditional dance performances, and indulge in Balinese cuisine. Overnight stay in Ubud."
            },
            {
                title: "Day 3: Ubud Temples and Waterfalls",
                description: "Explore the mystical temples of Ubud, including Goa Gajah (Elephant Cave) and the sacred Tirta Empul Temple. Discover the beauty of Tegenungan Waterfall and enjoy a refreshing swim. Immerse yourself in the spiritual and natural wonders of Ubud. Overnight stay in Ubud."
            },
        ],
        "price": 30000,
    }
];




const CartItem = ({ item }) => {
    return (
        <VStack align="center" p={4} borderBottom="1px solid #ccc">
            <Image src="https://picsum.photos/200"
                alt="https://picsum.photos/200"
                boxSize="19rem"
                objectFit="cover" />
            <Box ml={4}>
                <Text fontSize="sm" fontWeight="bold">TITLE:-- {item.title}</Text>
                <Text fontSize="sm" fontWeight="bold">PRICE:-- ₹{item.price}/-</Text>
                <Text fontSize="sm" fontWeight="bold">DURATION:-- {item.duration}</Text>
                <Text fontSize="sm" fontWeight="bold">LOCATION:-- {item.location}</Text>

                <Text fontSize="sm" fontWeight="bold">DESCRIPTION:-- {item.description[0]}</Text>
                {/* <br /> */}
                <Text fontSize="sm" fontWeight="bold"> {item.tour[0].title}{" => "}{item.tour[0].description}</Text>
                {/* <br />
                <Text fontSize="sm" fontWeight="bold"> {item.tour[1].title}{" => "}{item.tour[1].description}</Text> */}
                {/* <br />
                <Text fontSize="sm" fontWeight="bold"> {item.tour[2].title}{" => "}{item.tour[2].description}</Text> */}

            </Box>
        </VStack>
    );
};


const Cart = () => {
    const navigate = useNavigate()

    const toast = useToast({
        containerStyle: {
            maxWidth: '100%',
        },
    })
    const handlePayment = () => {
        toast({
            title: `Your Destination is Booked.  Happy Journey`,
            description: "We have sent you.  Your Booking Details. Check Your Email",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "top"
        })

        navigate(`/`)
    }

    return (
        <Box p={8}>
            {/* <Center><Heading size="lg" color="teal.300" mb={4}>1️⃣ Step Away To Your Destination 🛫</Heading></Center> */}
            <VStack spacing={4} align="stretch">
                {items.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </VStack>
            <Divider my={4} />
            <Heading size="md" mb={2}>Payment Options</Heading>
            <Button colorScheme="blue" onClick={handlePayment}>Pay with Card</Button>
            <Button colorScheme="green" onClick={handlePayment}>Pay with UPI</Button>
            {/* Add QR code scanning option */}
        </Box>
    );
};

export { Cart }





// export default CartItem;
