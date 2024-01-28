import { useParams, useNavigate } from "react-router-dom";

export default function Product() {
    const navigate = useNavigate();
    const {id} = useParams();
    const findProduct = () => {
        const products = [
            {id:"1", productName:"Protein Shake", price:"300"},
            {id:"2", productName:"Meat 500kg", price:"500"}
        ]
        return products.find(product => product.id === id);
    }
    const handleNavigate = () => {
        navigate(-1);
    }
    const {productName: name, price} = findProduct(id);
    return(
        <section>
            <h1>{name}</h1>
            <span>{price}</span>
            <button onClick={handleNavigate}>Back</button>
        </section>
    );
}