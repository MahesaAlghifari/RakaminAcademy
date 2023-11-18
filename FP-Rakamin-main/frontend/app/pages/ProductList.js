// ExamplePage.js
import React from 'react';
import ProductCard from '../components/ProductCard';



const products = [
  {
    name: 'ASUS Zenbook Pro 14 OLED (UX6404)',
    image: 'https://id.store.asus.com/media/catalog/product/v/i/vivobook_14_x1404vap_product_photo_1b_quite_blue_05_fingerprint_backlit_1.jpg?width=439&height=439&store=id_ID&image-type=image',
    price: '35.999.000',
    sold: 100,
    category: 'asus',
  },
  {
    name: 'ASUS Zenbook Pro 14 OLED (UX6404)',
    image: 'https://id.store.asus.com/media/catalog/product/v/i/vivobook_14_x1404vap_product_photo_1b_quite_blue_05_fingerprint_backlit_1.jpg?width=439&height=439&store=id_ID&image-type=image',
    price: '35.999.000',
    sold: 100,
    category: 'asus',
  },
  {
    name: 'ASUS Zenbook Pro 14 OLED (UX6404)',
    image: 'https://id.store.asus.com/media/catalog/product/v/i/vivobook_14_x1404vap_product_photo_1b_quite_blue_05_fingerprint_backlit_1.jpg?width=439&height=439&store=id_ID&image-type=image',
    price: '35.999.000',
    sold: 100,
    category: 'asus',
  },
  {
    name: 'ASUS Zenbook Pro 14 OLED (UX6404)',
    image: 'https://id.store.asus.com/media/catalog/product/v/i/vivobook_14_x1404vap_product_photo_1b_quite_blue_05_fingerprint_backlit_1.jpg?width=439&height=439&store=id_ID&image-type=image',
    price: '35.999.000',
    sold: 100,
    category: 'asus',
  },
  {
    name: 'ASUS Zenbook Pro 14 OLED (UX6404)',
    image: 'https://id.store.asus.com/media/catalog/product/v/i/vivobook_14_x1404vap_product_photo_1b_quite_blue_05_fingerprint_backlit_1.jpg?width=439&height=439&store=id_ID&image-type=image',
    price: '35.999.000',
    sold: 100,
    category: 'asus',
  },
  {
    name: 'ASUS Zenbook Pro 14 OLED (UX6404)',
    image: 'https://id.store.asus.com/media/catalog/product/v/i/vivobook_14_x1404vap_product_photo_1b_quite_blue_05_fingerprint_backlit_1.jpg?width=439&height=439&store=id_ID&image-type=image',
    price: '35.999.000',
    sold: 100,
    category: 'asus',
  },
];

const ExamplePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        {products.map((product, index) => (
          <div key={index} className="w-1/4 px-2 py-2">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
        
      
    </div>
    
  );
};

export default ExamplePage;