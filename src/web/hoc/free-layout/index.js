import React from 'react'
import Footer from '../layout/footer'

const FreeLayout = ({children}) => {
    return (
      <div>
        {children}
        <Footer />
      </div>
    );
}

export default FreeLayout