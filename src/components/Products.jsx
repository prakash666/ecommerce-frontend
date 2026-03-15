import { FaExclamation } from "react-icons/fa";
import ProductCard from "./components/ProductCard";

const Products = () => {
    const isLoading = false;
    const errorMessage = "";
    const products = [
        {
            productId: 1,
            productName: "Product 1",
            image: "https://placeholder.com/600x400",
            description: "This is product 1",
            quantity: 10,
            price: 100,
            discount: 50,
            specialPrice: 90
        },
        {
            productId: 2,
            productName: "Product 2",
            image: "https://placeholder.com/600x400",
            description: "This is product 2",
            quantity: 90,
            price: 2000,
            discount: 200,
            specialPrice: 1890
        }
    ];

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            {isLoading ? (
                <p>Products are Loading ......</p>
            ) : errorMessage ? (
               <div className="flex justify-center items-center h-[200px]">
                    <FaExclamation className="text-slate-800 text-3xl mr-2"/>
                    <span className="text-slate-800 text-lg font-medium">{errorMessage}</span>
               </div> 
            ) : (
                <div className="min-h-[700px]">
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {products.map(item => <ProductCard key={item.productId} {...item} />)}
                    </div>
                </div>
            )}
        </div>
    ); 
}

export default Products;