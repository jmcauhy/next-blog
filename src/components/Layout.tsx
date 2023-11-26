import Footer from './Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <div className="min-h-screen">
            <main>{children}</main>
         </div>
         <Footer />
      </>
   )
}

export default Layout
