import { Link } from "react-router-dom";

export default function ProductList() {
    const products = [
        {id:"1", productName:"Protein Shake", price:"300"},
        {id:"2", productName:"Meat 500kg", price:"500"}
    ]
    return(
        <section>
            <h1>Product List</h1>
            {products.map(item => (
                <Link to={`/products/${item.id}`} key={item.id}>
                    <h2>{item.productName}</h2>
                    <span>{item.price}</span>
                </Link>
            ))}
        </section>
    );
}