import React from 'react'
import NavBar from './components/NavBar'
import heroSection from './components/heroSection'
import FeatureSection from './components/FeatureSection'
import { Workflow } from 'lucide-react'

const App = () => {
  return (
    <>
    <NavBar/>
    <div className='max-w-7xl mx-auto pt-20 px[6'>
   <heroSection/>
   <FeatureSection/>
   <Workflow/>

    </div>
    </>
  );
};

export default App
