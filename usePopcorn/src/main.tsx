import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StarRating } from './components/StarRating'
// import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StarRating maxRating={5} defaultRating={3}/>
    {/* <App /> */}
  </StrictMode>,
)
