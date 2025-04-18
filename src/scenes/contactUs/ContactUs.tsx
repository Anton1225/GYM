import { SelectedPage } from '@/shared/types';
import {motion } from 'framer-motion';
import {useForm} from 'react-hook-form'
import ContactPageGraphic from '@/assets/ContactUsPageGraphic.png' ;
import HText from '@/shared/HText';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

function ContactUs({setSelectedPage}: Props) {
    const {register, trigger, formState: {errors}} = useForm(); 
    const onSubmit = async (e:any) => {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-4 py-3 placeholder-white`
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/*HEADINGS*/}
            <motion.div
            className='md: -mt-20'
            initial='hidden' whileInView='visible' 
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}>
                <HText>
                    <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus, quibusdam.
                </p>
            </motion.div>

            {/*FORM AND IMAGE*/}
            <div className='mt-10 justify-between gap-8 md:flex'>
                <motion.div className='mt-10 basis-3/5 md:mt-0'
                initial='hidden' whileInView='visible' 
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0}}}
                >
                    <form target='_blank' onSubmit={onSubmit} method='POST'
                    action='https://formsubmit.co/antongusev1225@gmail.com'>
                        <input className={inputStyles}
                        type='text' placeholder='NAME' {...register('name', {required: true, maxLength: 100})} />
                      {errors.name && (
                        <p className='mt-1 text-primary-500'>
                          {errors.name.type === 'required' && 'This field is required.'}
                          {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
                        </p>
                      )}
                      
                      <input className={inputStyles}
                      type='text' placeholder='EMAIL' {...register('email', {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />  
                      {errors.email && (
                        <p className='mt-1 text-primary-500'>
                          {errors.email.type === 'required' && 'This field is required.'}
                          {errors.email.type === 'pattern' && 'Invalid email address.'}
                        </p>
                      )}
                      
                      <textarea className={inputStyles}               
                      rows={4} cols={50} placeholder='MESSAGE' {...register('message', {required: true, maxLength: 2000})} />        
                      {errors.message && (
                        <p className='mt-1 text-primary-500'>
                          {errors.message.type === 'required' && 'This field is required.'}                                     
                          {errors.message.type === 'maxLength' && 'Max length is 2000 char'}
                        </p>
                      )}
                      
                      <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                        SUBMIT
                      </button>
                    </form>
                </motion.div>

                {/*IMAGE*/} 
                <motion.div className='relative mt-16 basis-2/5 md:mt-0'
                initial='hidden' whileInView='visible'                
                viewport={{once: true, amount: 0.5}}                                                                    
                transition={{delay: 0.2, duration: 0.5}}
                variants={{hidden: {opacity: 0, y: 50}, visible: {opacity: 1, y: 0}}}                                        
                >
                    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolve">
                        <img className="w-full" alt="contact-us-page-graphic" src={ContactPageGraphic} />  
                    </div>
                </motion.div>
            </div>
        
        </motion.div> 
    </section> 
  )
}

export default ContactUs