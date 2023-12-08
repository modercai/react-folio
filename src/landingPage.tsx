import React from 'react'
import myImage from "./assets/image.png"
import contactImage from "./assets/chat.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function LandingPage(){
    return(
        <>
        <div className="border-b-2 border-b-gray-100 border-dotted bg-red-300">
        <header className="pb-10">
            <h1 className="font-bold p-10 text-2xl">MyPortfolio</h1>
            <ul className="flex flex-row space-x-4 justify-center text-2xl text-white text">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
        </div> 
        
        {/* main body section starts */}
        <div className="flex justify-between p-10 bg-red-300">
            {/* some text to the left  */}
        <div className="p-52 space-y-3">
            <h4 className="font-bold text-3xl text-white">I'm</h4>
            <h2 className="text-white text-6xl">Friday Malate</h2>
            <h3 className="text-white text-4xl">Nextjs Developer</h3> 
            <div className="space-x-4">
            <AnchorLink href='#contact'>
                <button className="h-12 w-32 text-xl bg-white rounded-md text-red-500">Hire me</button>
            </AnchorLink>
            <AnchorLink href='#contact'>
            <button className="h-12 w-32 text-xl bg-white rounded-md text-red-500">Contact me</button>
            </AnchorLink>
            </div>
        </div>
        {/* my image to the right */}
        <div className="px-52">
        <img src={myImage} alt="myImage" />
        </div>
        </div>
        {/* main body section ends */}
        
        {/* about section start */}
    <section id='about' className=''>
        <div className=" flex ">
            <img src={myImage} alt="Second-pic"/>
      
      <div>
      <h1>About Me</h1>
      <p>
        Hello! My name is Friday and I am passionate about Programming. I am an Intern software developer
        based in
      </p>
      <p>
        I have a strong background in , and I enjoy .
        I believe in .
      </p>
      <p>
        This website is a platform where I share my thoughts, experiences, and expertise in [Your areas of expertise].
        Feel free to explore my content and get in touch with me if you have any questions or opportunities for collaboration.
      </p>
      <p>Thank you for visiting!</p>
      </div>

    </div>

    </section>
        {/* about section end */}


        {/* contact section start */}
        <section id='contact' className='bg-gray-100'>
            {/* add a map here for now an image will do */}
            <div className='flex'>
            <img src={contactImage}  alt="contact-image"/>
            <div className='flex flex-col-reverse'>
                <form action="" className='flex flex-col'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder=' name'/>
                    <label htmlFor="">email</label>
                    <input type="email" placeholder=' email'/>
                    <label htmlFor="">Subject</label>
                    <input type="text" placeholder=' subject'/>
                    <label htmlFor="">Message</label>
                    <input type="text" placeholder=' message'/>
                    <button>Send Message</button>
                </form>
            </div>
            </div>
        </section>
        {/* contact section end */}

        {/* footer start */}
        <section>
            <div>
                <h3>
                    The footer goes here
                </h3>
            </div>
        </section>
        {/* footer ends */}
         </>
        )
}
export default LandingPage