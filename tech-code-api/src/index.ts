import productsRoute from "./routes/products.route";
import server from "./server/server";

server.use('/api', productsRoute);