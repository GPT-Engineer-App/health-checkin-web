import { useState, useEffect } from "react";
import { Box, VStack, Text, Button, Heading, Flex, Spacer, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Select, Input } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaComments } from "react-icons/fa";

const AddModal = ({ isOpen, onClose, onAdd }) => {
  const [type, setType] = useState("Meal");
  const [text, setText] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>How did you do today?</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box as="span" fontSize="60px" color="gray.500" bg="gray.200" borderRadius="full" width="120px" height="120px" display="flex" alignItems="center" justifyContent="center">
            🎤
          </Box>
          <Text fontSize="sm" color="gray.500">
            Tap to speak
          </Text>
        </ModalBody>
        <ModalFooter>
          <Flex w="100%">
            <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..." mr={2} />
            <Button colorScheme="blue" onClick={() => onAdd(text)}>
              Send
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
// Remove Supabase imports and initialization

const Index = () => {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");
  const [score, setScore] = useState(0);
  const [activities, setActivities] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAdd = (text) => {
    console.log(`Adding: ${text}`);
    closeModal();
  };

  useEffect(() => {
    setUser({ id: 1, name: "John Doe" });
  }, []);

  useEffect(() => {
    if (user) {
      fetchScore();
      fetchActivities();
    }
  }, [user]);

  const handleLogin = () => {
    setUser({ id: 1, name: "John Doe" });
  };

  const fetchScore = () => {
    setScore(85);
  };

  const fetchActivities = () => {
    setActivities([
      { id: 1, name: "Activity 1" },
      { id: 2, name: "Activity 2" },
      { id: 3, name: "Activity 3" },
    ]);
  };

  if (!user) {
    return (
      <Box p={4}>
        <Heading size="lg" mb={4}>
          Welcome to Health Check-In
        </Heading>
        <Text mb={4}>Please log in to access the app.</Text>
        <Button colorScheme="blue" onClick={handleLogin}>
          Log In with Google
        </Button>
      </Box>
    );
  }

  return (
    <Box maxW="600px" mx="auto" paddingBottom={16}>
      {page === "home" && (
        <VStack spacing={6} p={4}>
          <Heading size="lg" textAlign="center">
            Your Score
          </Heading>
          <Text fontSize="6xl" fontWeight="bold">
            {score}
          </Text>
          <Box w="100%">
            <Heading size="md" mb={2}>
              Latest Activities
            </Heading>
            {activities.length === 0 ? (
              <Text>Add your first activity</Text>
            ) : (
              activities.map((activity) => (
                <Box key={activity.id} p={2} borderWidth={1} mb={2}>
                  <Text>{activity.name}</Text>
                </Box>
              ))
            )}
          </Box>
        </VStack>
      )}

      {page === "results" && (
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Results
          </Heading>
          {/* Add results page content */}
        </Box>
      )}

      <Button position="fixed" bottom="80px" right="20px" borderRadius="full" size="lg" colorScheme="blue" onClick={openModal} zIndex={2}>
        <FaComments />
      </Button>
      <Flex as="nav" align="center" justify="space-around" p={4} borderTopWidth={1} position="fixed" bottom={0} left={0} right={0} bg="white" zIndex={1}>
        <Button variant="ghost" onClick={() => setPage("home")}>
          <FaHome />
          <Text ml={2}>Home</Text>
        </Button>
        <Button variant="ghost" onClick={() => setPage("results")}>
          <FaChartBar />
          <Text ml={2}>Results</Text>
        </Button>
      </Flex>
      <AddModal isOpen={isModalOpen} onClose={closeModal} onAdd={handleAdd} />
    </Box>
  );
};

export default Index;
