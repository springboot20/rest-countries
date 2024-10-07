import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Countries />} />
            <Route path="/:name" element={<Country />} />
          </Route>
        </Routes>
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;
