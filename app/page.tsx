import type { Metadata } from "next";
import Card from "./Components/Card/Card";

export const metadata:Metadata = {
  title: 'Subscribtion Page'
}

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 mt-8 md:mt-16">
      <h1 className="text-4xl lg:text-7xl font-bold bg-gradient-title inline-block text-transparent bg-clip-text dark:bg-dark-gradient-title">Choose Subscribtion Plan</h1>
      <h2 className="text-xl lg:text-2xl text-gray-800 font-semibold dark:text-purple-200 mt-4">Compare prices of subscribtion services. Choose and enjoy!</h2>
        {/* Subscribtion cards */}
      <section className="flex gap-4 flex-col md:flex-row mt-8 md:mt-10 lg:mt-20 max-w-6xl w-full justify-stretch">
          {/* Card */}
          <Card
            title="Starter"
            describtion="Perfect for individuals and small teams beginning their journey."
            buttonName="Start Now"
            backgroundColorBtn={['#fff', '#4D3057']}
            data={{
              price: '0',
              features: [
                'Access to Basic Tools and Templates',
                'Free Trial feature access',
                'Email Support',
                '2 GB Cloud Storage'
              ]
            }} />
          <Card
            type="primary"
            title="Premium"
            describtion="Ideal for growing teams requiring advanced features and interation."
            buttonName="Go Premium"
            backgroundColorBtn={['#fff', '#4D3057']}
            label="Most popular"
            data={{
              price: '9.99',
              features: [
                'Advanced Tools and Customization Options',
                '100k requests per day',
                'Priority Email and Chat Support',
                '10 GB Cloud Storage'
              ]
            }} />
          <Card
            title="Enterprise"
            describtion="A comprehensive package for large organizations."
            buttonName="Contact Us"
            backgroundColorBtn={['#fff', '#4D3057']}
            data={{
              price: null,
              features: [
                'Complete Suite of Advanced Features',
                '24/7 Dedicated Support',
                'Unlimited Cloud Storage',
                'Security Features'
              ]
            }} />
      </section>
    </div>
  )
}
