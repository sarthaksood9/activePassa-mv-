// import Image from 'next/image'
import React from 'react'

import MainImg from "../assets/Iphones.png";
import MainPhoneRings from "../assets/newLanding/GroupIphoneRings.png";
import img2 from "../assets/newLanding/image1.png";
import CompititiveIntersetRate from "../assets/newLanding/CompititiveIntersetRate.png";
import PresonalLcaSol from "../assets/newLanding/PresonalLcaSol.png";
import commandCustomerSupport from "../assets/newLanding/commandCustomerSupport.png";
import BusinessGrowth from "../assets/newLanding/BusinessGrowth.png";
import GroupRings from "../assets/newLanding/GroupRings.png";
import StarBlack from "../assets/newLanding/StarBlack.png";
import StarWhitepng from "../assets/newLanding/StarWhitepng.png";
import MessagesBro from "../assets/newLanding/MessagesBro.png";
import ThinkingFaceBro1 from "../assets/newLanding/ThinkingFaceBro1.png";
import OnlineTransactionsAmico from "../assets/newLanding/OnlineTransactionsAmico 1.png";
import Vector from "../assets/newLanding/Private data-bro 1.png";
import unsplash from "../assets/newLanding/unsplash_UpsEF48wAgk.png";

import discovery from "../assets/newLanding/gg.png"


import logo1 from '../assets/logos/1.png';
import logo2 from '../assets/logos/2.png';
import logo3 from '../assets/logos/3.png';
import logo4 from '../assets/logos/4.png';
import logo5 from '../assets/logos/5.png';
import logo6 from '../assets/logos/6.png';
import logo7 from '../assets/logos/7.png';
import logo8 from '../assets/logos/8.png';
import logo9 from '../assets/logos/9.png';
import logo10 from '../assets/logos/10.png';
import logo11 from '../assets/logos/11.png';
import logo12 from '../assets/logos/12.png';

import text1 from "../assets/newLanding/text1.png";
import text2 from "../assets/newLanding/text2.png";
import text3 from "../assets/newLanding/text3.png";
import text4 from "../assets/newLanding/text4.png";


import testimonial1 from "../assets/newLanding/testimonial-01.jpg.png";
import testimonial2 from "../assets/newLanding/testimonial-new-02.jpg.png";


import { AiFillStar, AiOutlineStar } from 'react-icons/ai'






// const img=require("../Assets/ActiivePassa/Iphones.png");

const ActivePassa = () => {
  return (<>
    <div className='h-full'>
      <nav className='h-12 w-full bg-black'></nav>
      <div className='w-full h-screen flex px-16 justify-center '>
        <div className='w-[60%] flex flex-col justify-center items-center '>
          <div className='leading-[5.3rem] text-center'>
            <h1 className='text-[5.4rem] tracking-[4px] font-[550]'>Strengthening</h1>
            <h1 className='text-[3.3rem] tracking-[0px] text-[#2281ff] font-[500]'>The foundations for your </h1>
            <h1 className='text-[4.4rem] mt-[-10px] tracking-[2.5px] font-[550]'>Financial stability</h1>
          </div>
          <p className='text-start text-[#626262] text-[16px] pt-6 px-14 font-[550]'>Discover the best solution with comprehensive tools, empowering you to overcome financial challenges and unlock the potential for a brighter, more prosperous future.</p>
          <button className='self-start ml-14 mt-[2rem] activeBtn px-8 py-2 text-white font-[600] rounded-xl '>START NOW</button>
        </div>
        <div className='w-1/2 relative'>
          <img src={MainImg} alt='banner Img' />
          <img className='absolute top-28 z-[-1]' src={MainPhoneRings} alt='banner Img' />
        </div>
      </div>
    </div>


    <div className='h-[80vh] w-full flex relative'>

      <div className='h-full w-[40%] flex flex-col justify-center items-center '>
        <img className='h-[40rem] w-[36rem]' src={img2} />
      </div>
      <div className='max-w-[60%] flex flex-col justify-center items-center gap-10'>
        <div className='leading-[4rem] text-center'>
          <h1 className='text-[4.89rem] text-[#2181ff]'>Embrace Financial</h1>
          <h1 className='text-[2.87rem] '>Transformation with activpaisa</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <ul className='ml-[1.5rem] list-disc text-[#626262] text-[17.8px] w-[70%]'>
            <li>With the help of our complete set of solutions, we aim at providing a streamlined and all-inclusive platform that makes it easier for you to find loan options</li>
            <li>With the right tools, knowledge, and assistance you require, Activpaisa can help you manage your assets, plan for the future, or get individualised financial advice</li>
            <li>With more than 100 experts on board, we guarantee you the best loan offer based on your requirements</li>
          </ul>
        </div>
      </div>
    </div>


    <div className='h-screen w-full flex justify-center items-center relative'>
      <div className='absolute top-0 left-10'>
        <img src={GroupRings} />
      </div>
      <div className='py-12 px-8 w-[84%] bg-[#373737] rounded-3xl flex justify-between items-center'>
        <div className='text-white w-[18rem] flex flex-col justify-center items-center gap-3'>
          <div><img src={CompititiveIntersetRate}></img></div>
          <h1 className='text-[21px] font-500 w-[60%] text-center'>Competitive Interest Rates</h1>
          <p className='text-[12px] w-[13.5rem] text-center'>Guarantee that you have access to inexpensive borrowing choices, we provide competitive interest rates.</p>
        </div>
        <div className='text-white w-[18rem] flex flex-col justify-center items-center gap-3'>
          <div><img src={PresonalLcaSol}></img></div>
          <h1 className='text-[21px] font-500 w-[60%] text-center'>Personalized Loan Solutions</h1>
          <p className='text-[12px] w-[13.5rem] text-center'> Recognizing that every borrower is different, we provide personalized loan options catered to your particular financial situation.</p>
        </div>
        <div className='text-white w-[18rem] flex flex-col justify-center items-center gap-3'>
          <div><img src={commandCustomerSupport}></img></div>
          <h1 className='text-[21px] font-500 w-[12.5rem]  text-center'>Committed<br></br> Customer Support</h1>
          <p className='text-[12px] w-[13.5rem] text-center'>Our experienced customer support is here to guide you through the loan application process and address any concerns you may have.</p>
        </div>
      </div>

      <div className='absolute right-[9rem] bottom-[10rem]'>
        <img src={StarWhitepng} />
      </div><div className='absolute right-[10rem] bottom-[5.6rem]'>
        <img src={StarBlack} />
      </div>
    </div>


    <div className='flex h-screen w-full  justify-between pl-12'>
      <div className='w-[40%] relative'>
        <img className=' absolute h-[37rem] w-[33rem] ml-[1rem] top-[5rem] ' src={BusinessGrowth} />
      </div>
      <div className='w-[63%] flex flex-col justify-center items-center gap-10'>
        <div className='leading-[3.5rem]'>
          <h1 className='text-[3.8rem]'>Unlock <span className='text-[#2181ff]'>Your Potential</span></h1>
          <h1 className='text-[3.75rem]'>
            as an activpaisa Agent
          </h1>
        </div>
        <div className='flex flex-col justify-center items-center w-[70%] gap-8'>
          <div className='bg-[#565656] p-3 text-white font-[500] rounded-2xl'>
            <p className=''>Activpaisa offers loan management agents personalized perks and tools to thrive in their careers. With a user-friendly platform, comprehensive solutions, and professional support, agents can optimize workflows, enhance productivity, and excel in loan management.</p>
          </div>
          <div className='bg-[#565656] p-3 text-white font-[500] rounded-2xl'>
            <p>Activpaisa's platform supports both experienced and new loan management agents, providing them with the resources and guidance to excel in their careers. By joining the agent community, individuals can explore opportunities for career advancement and achieve remarkable success in the dynamic loan management industry.</p>

          </div>
        </div>
      </div>
    </div>
    <div className="h-fit w-full flex justify-between" >
      <div className='max-w-[55%]'>
        <img src={discovery} alt="sfadf" className='w-[50rem] h-[50rem]' />
      </div>
      <div className='w-[45%] flex flex-col justify-start gap-12'>
        <div className='w-full flex justify-between h-fit self-center p-10'>
          <button className='bg-[#d2d2d2] py-3 px-5  rounded-full'>
            Home Loan
          </button>
          <button className='bg-[#d2d2d2] py-3 px-5  rounded-full'>
            Car Loan
          </button>
          <button className='bg-[#d2d2d2] py-3 px-5  rounded-full'>
            Business Loan
          </button>
          <button className='bg-[#d2d2d2] py-3 px-5  rounded-full'>
            Personal Loan
          </button>
        </div>
        <div className='flex justify-around px-3'>
          <div className='flex min-w-[53%] flex-col gap-8 '>
            <div >
              <h1 className='text-[1.5rem]'>
                EMI Calculator for
              </h1>
              <h1 className='text-[2.35rem] leading-[2rem]'>
                Home Loan
              </h1>
            </div>
            <div className='w-[100%] flex flex-col gap-4'>
              <div>
                <div className='flex justify-between '>
                  <label for="jj">Loan Amount(₹)</label>
                  <label for="jj">3,00,000</label>

                </div>
                <input id='jj' className='w-full' type='range' />
              </div>
              <div>

                <div className='flex justify-between'>
                  <label for="jj">Interest Rate(%)</label>
                  <label for="jj">15%</label>

                </div>
                <input id='jj' className='w-full' type='range' />
              </div>
              <div>

                <div className='flex justify-between'>
                  <label for="jj">Tenure(Months)</label>
                  <label for="jj">108</label>

                </div>
                <input id='jj' className='w-full' type='range' />
              </div>
            </div>
          </div>
          <div className='bg-[#dcdcdc] h-full w-[35%] rounded-3 xl flex justify-center items-center'>
            <div className='h-2 w-[80%] bg-black roundd'>

            </div>
          </div>
        </div>

      </div>
    </div>
    <div className='flex flex-col w-full justify-center gap-8 '>
      <div className='flex justify-center w-full'>
        <h1 className='text-[4rem]'>We offer a <span className='text-[#2e88fe]'>Simple Online Solution!</span></h1>
      </div>
      <div className='flex justify-around'>
        <div className='flex w-[20%] p-3 flex-col justify-center items-center gap-3 drop-shadow-xl shadow-2xl rounded-3xl'>
          <img className='w-[18rem]' src={MessagesBro}></img>
          <h1 className='font-[500] text-[1.5rem]'>Get a Free Quotec</h1>
          <p className='text-[#626262] text-[14px] self-center text-center'>We will customize a loan based on
            the amount of cash your company
            need term length</p>
        </div>
        <div className='flex w-[20%] p-3 flex-col justify-center items-center gap-3 drop-shadow-xl shadow-2xl rounded-3xl'>
          <img className='w-[18rem]' src={ThinkingFaceBro1}></img>
          <h1 className='font-[500] text-[1.5rem]'>Get an Instant Decision</h1>
          <p className='text-[#626262] text-[14px] self-center text-center'>We provide online instant cash
            loans with quick approval that suit
            your term length</p>
        </div>
        <div className='flex w-[20%] p-3 flex-col justify-center items-center gap-3 drop-shadow-xl shadow-2xl rounded-3xl'>
          <img className='w-[18rem]' src={OnlineTransactionsAmico}></img>
          <h1 className='font-[500] text-[1.5rem]'>Get Funding Fast</h1>
          <p className='text-[#626262] text-[14px] self-center text-center'>When you have a good credit
            profile and you have built your loan
            cheaper with us</p>
        </div>

      </div>
    </div>

    <div className='w-full h-screen flex'>
      <div className='w-[60%] flex flex-col justify-center items-center gap-8 '>
        <div className='leading-[4rem]'>
          <h1 className='text-[3.7rem]'>Protecting <span className='text-[#2e88fe]'>Your Privacy</span> and</h1>
          <h1 className='text-[2.8rem]'>Empowering <span className='text-[#2e88fe]'>Consent Management</span></h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <ul className=' ml-[1.5rem] list-disc text-[400] text-[#626262] text-[17.8px] w-[80%] gap-3 flex flex-col'>
            <li>We prioritize the privacy and security of your personal information. Our robust data privacy measures ensure that your data is protected and handled with utmost care</li>
            <li>Additionally, we provide transparent consent management, giving you control over how your data is used and allowing you to make informed decisions about sharing your information</li>
            <li>Your trust and privacy are of utmost importance to us, and we are committed to maintaining the highest standards of data privacy and consent management</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img className='w-[34rem] mt-[3.5rem]' src={Vector}></img>
      </div>
    </div>
    <div className='flex flex-col justify-center'>
      <h1 className='text-[3.2rem] font-[500] self-center mb-[2rem]'>Powerful <span className='text-[#2e88fe]'>Collaborations</span> for Better Solutions</h1>
      <div className='flex flex-col justify-center items-center bg-[#3e3e3e] py-8 gap-[2rem] '>
        <div className="flex gap-[3rem] ">
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo1} alt="1" className="w-44 rounded-lg" />
          </div>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo2} alt="2" className="w-44 rounded-lg" />
          </div>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo3} alt="3" className="w-44 rounded-lg" />
          </div>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo4} alt="4" className="w-44 rounded-lg" />
          </div>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo5} alt="5" className="w-44 rounded-lg" />
          </div>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo6} alt="6" className="w-44 rounded-lg" />
          </div>
        </div>
        <div className='flex gap-[3rem] '>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo7} alt="7" className="w-44 rounded-lg" />
          </div>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo8} alt="8" className="w-44 rounded-lg" />
          </div>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo9} alt="9" className="w-44 rounded-lg" />
          </div>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo10} alt="10" className="w-44 rounded-lg" />
          </div>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo11} alt="11" className="w-44 rounded-lg" />
          </div>
          <div className="flex items-center justify-center grid-cols-1 ">
            <img src={logo12} alt="12" className="w-44 rounded-lg" />
          </div>
        </div>
      </div>
    </div>

    <div className='flex py-32'>
      <div className='w-[48%] flex justify-center items-center'>
        <img className='w-[28rem]' src={unsplash}></img>
      </div>
      <div className='w-[52%] flex justify-center items-center flex-col gap-[1.8rem]'>
        <div className='font-[550] leading-[4rem] text-center'>
          <h1 className='text-[4.7rem]'>Join Our Team!</h1>
          <h1 className='text-[2.5rem]'>Be a part of <span className='text-[#2e88fe]'>Our Success Story</span></h1>
        </div>
        <p className=' w-[70%] text-[400] text-[#626262] text-[15.5px] text-center'>Activpaisa empowers agents to excel and succeed. We provide comprehensive tools, resources, and support to navigate the evolving marketplace. Our platform offers advanced technology, industry expertise, and a collaborative community for tangible outcomes. Together, we elevate real estate excellence and agent prosperity.</p>
        <div className='flex items-center justify-center gap-[4.5rem] w-full '>
          <input className=' w-[17rem] rounded-lg p-[8px] h-fit' placeholder='Email..' type="text" />
          <button className='activeBtn px-6 py-[10px] text-white font-[600] rounded-lg '>GET STARTED</button>
        </div>
      </div>
    </div>


    <div className='flex flex-col justify-center items-center h-screen gap-14'>

      <div className='leading-[3.95rem]' >
        <h1 className='text-[4rem]'>Aligned Investors Empowering</h1>
        <h1 className='text-[#2e88fe] text-[3.6rem]'>Our Vision <span className='text-[black]'>and Fueling</span> Our Mission</h1>
      </div>

      <div className='flex justify-between items-center h-fit w-[100%] text-[white]'>
        <div className='w-[2.4rem] h-[73%] bg-[#606060] rounded-r-2xl '></div>
        <div className='w-[14%] flex flex-col justify-center items-center bg-[#606060] px-5 py-6 rounded-2xl gap-3'>
          <img className='w-[9rem]' src={text1} alt="sds" />
          <h1 >Patricia Adams</h1>
          <p className='text-center text-[12px]'>Enable decision making and create business plan</p>
        </div>
        <div className='w-[14%] flex flex-col justify-center items-center bg-[#606060] px-5 py-6 rounded-2xl gap-3'>
          <img className='w-[9rem]' src={text2} alt="sds" />
          <h1 >Alicja Podwięż</h1>
          <p className='text-center text-[12px]'>Enable decision making and create business plan</p>
        </div>
        <div className='w-[14%] flex flex-col justify-center items-center bg-[#606060] px-5 py-6 rounded-2xl gap-3'>
          <img className='w-[9rem]' src={text3} alt="sds" />
          <h1 >Aron Mkenzy</h1>
          <p className='text-center text-[12px]'>Enable decision making and create business plan</p>
        </div>
        <div className='w-[14%] flex flex-col justify-center items-center bg-[#606060] px-5 py-6 rounded-2xl gap-3'>
          <img className='w-[9rem]' src={text4} alt="sds" />
          <h1 >Karl Buckley</h1>
          <p className='text-center text-[12px]'>Enable decision making and create business plan</p>
        </div>
        <div className='w-[2.4rem] h-[73%] bg-[#606060] rounded-l-2xl '></div>

      </div>

    </div>

    <div className='flex w-full flex-col justify-center gap-16 h-[50vh]'>

      <div className='text-[2rem] tracking-tight text-center leading-[2.2rem]'>
        <h1 className='text-[#2e88fe]'>Voices of Trust:</h1>
        <h1 className=''>Hear What Our Clients have to Say</h1>
      </div>
      <div className='flex text-white justify-center gap-24 items-center '>
      <div className='w-[1.8rem] h-[9.8rem] bg-[#606060] rounded-r-2xl '></div>

        <div className='flex w-[40%] flex-col bg-[#626262] p-5 gap-5 rounded-2xl'>
          <div className='flex'>
            <div className='flex h-fit justify-between w-full items-center '>
              <div className='flex gap-2'>
                <img src={testimonial1}></img>
                <div className='flex flex-col gap-3 justify-center'>
                  <h1>Richard Scott</h1>
                  <p className='text-[10px]'>Managing Director</p>
                </div>
              </div>
              <div className='flex text-[1.4rem]'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
          </div>
          <div className='text-[15px] text-center'>
            <p>“I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here. Thank you for yours service.”</p>
          </div>
        </div>
        <div className='flex w-[40%] flex-col bg-[#626262] p-5 gap-5 rounded-2xl'>
          <div className='flex'>
            <div className='flex h-fit justify-between w-full items-center '>
              <div className='flex gap-2'>
                <img src={testimonial1}></img>
                <div className='flex flex-col gap-3 justify-center'>
                  <h1>Richard Scott</h1>
                  <p className='text-[10px]'>Managing Director</p>
                </div>
              </div>
              <div className='flex text-[1.4rem]'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </div>
          </div>
          <div className='text-[15px] text-center'>
            <p>“I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here. Thank you for yours service.”</p>
          </div>
        </div>
        <div className='w-[1.8rem] h-[9.8rem] bg-[#606060] rounded-l-2xl '></div>

      </div>
    </div>
  </>
  )
}

export default ActivePassa