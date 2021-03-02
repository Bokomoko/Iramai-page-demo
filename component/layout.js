import Header from './common/header'
import Footer from './common/footer'

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
        {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
