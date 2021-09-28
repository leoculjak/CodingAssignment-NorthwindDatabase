import {useState, useEffect} from 'react';
import {Supplier} from './Supplier';

export interface ProductProps {}

export interface Product{
  productId: number,
  productName: string,
  supplierId: number,
  categoryId: number,
  quantityPerUnit: string,
  unitPrice: number,
  unitsInStock: number,
  unitsOnOrder: number,
  reorderLevel: number,
  discontinued: false,
  category: string,
  supplier: Supplier
}

const Product: React.FC<ProductProps> = (props) => {

    const [products, setProducts] = useState<Product[]>([]);
  
    const getProducts = async () => {
      let p = await fetch("https://localhost:5001/api/product");
      let data = await p.json();
      setProducts(data);
    }
  
    useEffect(() =>{
      getProducts();
    }, []);
  
    return (
      <div>
        <div className="table">
          <thead>
              <tr>
                  <th>Product ID</th>
                  <th>productName</th>
                  <th>supplierId</th>
                  <th>companyName</th>
              </tr>
          </thead>
          <tbody>
              {products.map((product) => (
              <tr>
                  <td>{product.productId}</td>
                  <td>{product.productName}</td>
                  <td>{product.supplier.supplierId}</td>
                  <td>{product.supplier.companyName}</td>
              </tr>
               ))}
          </tbody>
        </div>
      </div>
    );
  }
  
  export default Product;