import Logo from "../../assets/Logo.png";



const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" />
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Natus, ipsam!
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.                    
                </p>                
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.                        
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.                    
                </p>                
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.                        
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer