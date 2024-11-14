import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Wellcome to our project");
});

app.use('/api/books', )

const PORT = process.env.NODE_ENV ?? 3000;
app.listen(PORT, () => console.log(`Server Listning at PORT ${PORT}...`));
