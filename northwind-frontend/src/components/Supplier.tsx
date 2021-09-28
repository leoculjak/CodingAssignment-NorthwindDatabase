import React, { useEffect, useState } from "react";

interface SuppliersProps {}

export interface Supplier {
  supplierId: number;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: string;
  city: string;
  region: null;
  postalCod: string;
  country: string;
  phone: string;
  fax: string;
  homePage: string;
  products: [];
}

const Supplier: React.FC<SuppliersProps> = (props) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const getSuppliers = async () => {
    let p = await fetch("https://localhost:5001/api/supplier");
    let data = await p.json();
    setSuppliers(data);
  };

  useEffect(() => {
    getSuppliers();
  }, []);

  return (
    <div>
      <div className="table">
        <thead>
          <tr>
            <th>supplierId</th>
            <th>companyName</th>
            <th>contactTitle</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr>
              <td>{supplier.supplierId}</td>
              <td>{supplier.companyName}</td>
              <td>{supplier.contactTitle}</td>
              <td>{supplier.country}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default Supplier;
