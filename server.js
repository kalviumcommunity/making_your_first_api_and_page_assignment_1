// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

// GET endpoint at "/assistant/greet"
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name;

    // If name is not provided, return error
    if (!name) {
        return res.status(400).json({ message: "Please provide a name in the query parameter." });
    }

    // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayIndex = new Date().getDay();
    const currentDay = days[currentDayIndex];

    // Create day-specific message
    let dayMessage;
    switch (currentDay) {
        case 'Monday':
            dayMessage = "Happy Monday! Start your week with energy!";
            break;
        case 'Friday':
            dayMessage = "It's Friday! The weekend is near!";
            break;
        default:
            dayMessage = "Have a wonderful day!";
            break;
    }

    // Send JSON response
    res.json({
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});

