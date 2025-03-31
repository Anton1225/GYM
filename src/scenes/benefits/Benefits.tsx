import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import { BenefitType } from "@/shared/types";
import Benefit from "./Benefit";
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
        initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} className="md:my-5 md:w-3/5">
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
          <div>
        </div>
      </motion.div>
    </section>
  )
}
export default Benefits;