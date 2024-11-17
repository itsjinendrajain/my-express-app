import app from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

(async () => {
    // Connect to Database
    await connectDB(MONGO_URI);

    // Start Server
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})();
