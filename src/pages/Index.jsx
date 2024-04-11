import { useState, useEffect } from "react";
import { Box, VStack, Text, Button, Heading, Flex, Spacer, Image } from "@chakra-ui/react";
import { FaHome, FaChartBar } from "react-icons/fa";
// Remove Supabase imports and initialization

const Index = () => {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");
  const [score, setScore] = useState(0);
  const [activities, setActivities] = useState([]);

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
    <Box maxW="600px" mx="auto">
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

      <Flex as="nav" align="center" justify="space-around" p={4} borderTopWidth={1}>
        <Button variant="ghost" onClick={() => setPage("home")}>
          <FaHome />
          <Text ml={2}>Home</Text>
        </Button>
        <Button variant="ghost" onClick={() => setPage("results")}>
          <FaChartBar />
          <Text ml={2}>Results</Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;
