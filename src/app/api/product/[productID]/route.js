const connectDB = require("@/db/connectdb");
const Products = require("@/models/products");

export async function GET(req, { params }) {
  try {
    await connectDB();

    const ProductId = params.productID;

    console.log(ProductId);

    try {
      const result = await Products.find({});
      return Response.json({ success: true, msg: result }, { status: 200 });
    } catch (error) {
      return Response.json({ success: false, msg: error }, { status: 401 });
    }
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}
