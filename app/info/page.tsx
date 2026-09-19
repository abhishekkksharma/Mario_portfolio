import BrowserLayout from '@/components/BrowserLayout'
import React from 'react'
import About from '@/components/About'

function page() {
  return (
    <div>
        <BrowserLayout>
        <About/>
        </BrowserLayout>
    </div>
  )
}

export default page