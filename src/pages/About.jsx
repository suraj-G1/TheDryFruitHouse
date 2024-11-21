import React from 'react'
import about from '../assets/Images/AboutUs.png'
import Footer from '../components/common/Footer'
import Quality from '../components/core/About/Quality'
import Store from '../assets/Images/Store.jpg'
const About = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <img src={about}/>
        </div>
        <div className='w-11/12 mx-auto flex gap-6 mt-8'>
            <div className='w-[40%]'>
                <img src={Store}/>
            </div>
            <div className='w-[60%] flex flex-col justify-center gap-6'>
                <h2 className='text-3xl font-bold'>About Us</h2>
                <h4 className='text-xl font-semibold text-[#520806]'>
                    Dry Fruit House brings you a collection of carefully selected foods from India
                     and across the world.
                </h4>
                <p className='font-light leading-[1.75rem]'>In our passionate search to offer food that is unique and full of health, we have ensured you get only
                     the best products. Our products are well-loved for their quality and taste. We have gained expertise 
                     in fine Indian food products and food ingredients across categories - Dry Fruits, Chocolates, Gift
                      Boxes and Spices. We are importing fine quality Nuts, dry fruits and drinks from the source 
                    from which they are available at their best. We are sure you will find our quality products appetizing.</p>
            </div>

        </div>

        <div className='flex flex-col w-11/12 mx-auto mt-4'>
            <p>We started our first outlet at Pandharpur Maharashtra in 2016 and now we have 5+ outlets
                 across Maharashtra. We focus on stringent quality control and prompt service in order to ensure
                  market standards. Our focus on quality is evident in our product range. We do not
                   compromise on quality and there is very high level of customer appreciation resulting 
                   in long-lasting relations. The company's excellent performance is the result of persistent
                    efforts to achieve high efficiency in the business. Dry Fruit House has established
                     relationship with key leaders in the domestic as well as the international market.
            </p>
            <p>
            Our goal is to nourish people's lives by offering a wide variety of convenient, delicious,
             and hygienic food choices that can help everyone enjoy a balanced, healthful diet. We provide
              gifting varieties such as chocolate bouquets,
             dryfruits packs, fancy dry fruit baskets and plenty of other varieties.
            </p>
            <div className='flex flex-col gap-1'>
                <h2 className='text-xl text-[#520806] font-semibold'>Vision</h2>
                <p>To be India's most customer centric company, where customers can buy high quality dry 
                    fruits at their convenience and enjoy a balanced, healthful diet.
                </p>
            </div>

            <div className='flex flex-col gap-1'>
                <h2 className='text-xl text-[#520806] font-semibold'>Mission</h2>
                <p>
                    We strive to offer our customers the top quality dry fruits at reasonable rates 
                    and at the utmost convenience.
                </p>
            </div>
        </div>
        <Quality/>
        <Footer/>
    </div>
  )
}

export default About