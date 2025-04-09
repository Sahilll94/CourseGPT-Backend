const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const aiRoutes = require("./routes/aiRoutes.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(
    cors({
      origin: "https://coursegpt.sahilfolio.live",
      methods: ["GET", "POST"],
      credentials: true,
    })
  );

app.use("/api", aiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
