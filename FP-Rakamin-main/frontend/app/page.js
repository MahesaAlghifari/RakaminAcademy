// page.js

import css from '../app/globals.css';
import ProductList from './pages/ProductList';  // Ubah sesuai dengan lokasi sebenarnya
css

const Page = () => {
  return (
    <div>
      <ProductList />  {/* Gunakan komponen ProductList di dalam Page */}
    </div>
  );
};

export default Page;
