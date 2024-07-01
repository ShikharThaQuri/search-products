import axios from "axios";

async function GetAllProducts(name, currentPage) {
  let getQuery = `?name=${name}&page=${currentPage}`;

  const { data } = await axios.get(
    `http://localhost:3000/api/product${getQuery}`
  );

  return data;
}

export default GetAllProducts;
