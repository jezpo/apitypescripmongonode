import app from "./app";
const port = 8000;
app.app.listen(port, () => {
    console.log("servidor corridendo en el puerto" + port);
});