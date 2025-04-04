import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import { BenefitType } from "@/shared/types";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor sit amet consectetur libero vel sit. Sit id fermentum risus blandit.",
  },    
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Bibendum nulla orci feugiat nisl pretium. Velit euismod in pellentesque massa placerat duis.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas Sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },  
  }
}

const Benefits = ({setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER */}
        <motion.div 
        initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
        className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>
          <p className="py-5 text-sm">
            We provide world class fitness equipment, trainers and 
            classes to get you to your ultimate fitness goals with ease.
             We provide true care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}
        variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            setSelectedPage={setSelectedPage}
            />
          ))}
          </motion.div>
          {/* GRAPHICS AND DESCRIPTION */}
          <div className="items-center justify-between gap-20 mt-16 md:mt-28 md:flex">
            {/* GRAPHICS */}
            <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />
            {/* DESCRIPTION */}
            <div> 
              {/* TITLE */}
              <div className="relative">
                <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                  <motion.div 
                  initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}
                  transition={{duration: 0.5}} variants={{hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0}}}>
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING {" "}
                      <span className="text-primary-500"> FIT</span>
                    </HText>
                  </motion.div>  
                </div>
              </div>
              {/* DESCRIPTION */}
              <motion.div
              initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}}
              transition={{delay: 0.2,duration: 0.5}} variants={{hidden: {opacity: 0, x: 50}, 
              visible: {opacity: 1, x: 0}}}>
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet    
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
                vitae quis. Quis amet vulputate tincidunt at in nulla nec.
                Consequat sed facilisis dui sit egestas pulvinar. Nascetur        
                aenean massa auctor tincidunt. Iaculis potenti amet egestas
                ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas pulvinar.
                
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor.
                Mauris velit euismod elementum arcu neque facilisi. 
                Amet neque vitae tempus quam pellentesque nec nam aliquam. 
                Integer faucibus scelerisque eleifend donec pretium. 
                Et magnis volutpat id curabitur sed. 
                Nisl nisi scelerisque eu ultrices vitae.
              </p>
              </motion.div>

              {/* BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 
                before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>

              </div>
            </div>    
        </div>
      </motion.div>
    </section>
  )
}
export default Benefits;