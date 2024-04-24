import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login.tsx'

import './index.css'

const colors = {
  brand: {
    50: "#E8FDF8",
    100: "#BDF9EA",
    200: "#93F6DD",
    300: "#69F2CF",
    400: "#3FEEC2",
    500: "#14EBB4",
    600: "#10BC90",
    700: "#0C8D6C",
    800: "#085E48",
    900: "#042F24"
  },
}

const theme = extendTheme({
  colors,
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, serif",
    mono: "Menlo, monospace",
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
