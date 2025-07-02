import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout/layout'
import { AppRoutes } from './routes/routes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
