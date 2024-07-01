const connectDB = require("@/db/connectdb");
const products = require("@/models/products");

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const addProduct = new products({
      type: body.type,
      name: body.name,
      price: body.price,
      image: body.image,
    });

    try {
      await addProduct.save();

      return Response.json({ success: true, msg: addProduct }, { status: 201 });
    } catch (error) {
      return Response.json({ success: false, msg: error }, { status: 404 });
    }
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}

export async function GET(req) {
  try {
    await connectDB();

    const searchParams = req.nextUrl.searchParams;
    const nameQuery = searchParams.get("name");
    const typeQuery = searchParams.get("type");
    const pageQuery = searchParams.get("page");
    const limitQuery = searchParams.get("limit");
    const sort = searchParams.get("sort");

    const queryObject = {};

    if (nameQuery) {
      queryObject.name = { $regex: nameQuery, $options: "i" };
    }
    if (typeQuery) {
      queryObject.type = typeQuery;
    }

    let Product = products.find(queryObject);

    if (sort) {
      const sortList = sort.split(",").join(" ");
      Product = Product.sort(sortList);
    }
    // else {
    //   Product = Product.sort("createAt");
    // }

    const page = Number(pageQuery) || 1;
    const limit = Number(limitQuery) || 3;
    const skip = (page - 1) * limit;

    Product = Product.skip(skip).limit(limit);

    try {
      const result = await Product;
      const result1 = await products.find(queryObject);
      return Response.json(
        { success: true, msg: result, nbHits: result1.length },
        { status: 201 }
      );
    } catch (error) {
      return Response.json({ success: false, msg: error }, { status: 401 });
    }
  } catch (error) {
    return Response.json({ success: false, msg: error }, { status: 400 });
  }
}
