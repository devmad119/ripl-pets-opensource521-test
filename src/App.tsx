import { FC } from 'react'
import 'App.css'
import { Layout } from 'components/layouts'
import Home from 'pages/Home'

const App: FC = () => {
  return (
    <div className="app">
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default App
