import "./App.scss";
import { ConverterMainContainer } from "./components";
import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <ConverterMainContainer />
      </Suspense>
    </div>
  );
}

export default App;
