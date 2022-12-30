import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { Container } from "@mui/material";
import Main from "./Pages/Main";
const queryClient = new QueryClient();

function App() {
  return (
   <Container>
      <QueryClientProvider client={queryClient}>
       <Main/>
      </QueryClientProvider>
    </Container>
  );
}

export default App;
