import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { ErrorPage, HomePage, ItemPage, ShopPage, ShippingPage } from "./pages";
import { Footer } from "./components/Footer/Footer";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <CartProvider>
        <ProductsProvider>
          <HashRouter>
            <Toaster position="bottom-right" richColors />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                {/* Home */}
                <Route path="/" element={<HomePage />} />

                {/* Marketplace */}
                  <Route path="/shop/:category" element={<ShopPage />} />
                  <Route path="/item/:itemId" element={<ItemPage />} />

                {/* Info */}
                <Route path="/envios" element={<ShippingPage />} />

                {/* 404 */}
                <Route path="/*" element={<ErrorPage />} />
              </Routes>
            </main>
            <Footer />
          </HashRouter>
        </ProductsProvider>
      </CartProvider>
    </div>
  );
}

export default App;

