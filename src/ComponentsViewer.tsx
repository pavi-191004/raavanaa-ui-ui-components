
import Heading from './ui/atoms/heading/Heading.tsx';
import SubHeading from './ui/atoms/subHeading/SubHeading.tsx';
import ActionButton from './ui/atoms/actionButton/ActionButton.tsx';
import Input from './ui/atoms/input/Input.tsx';
import TextArea from './ui/atoms/textArea/TextArea.tsx';
import Label from './ui/atoms/label/Label.tsx';
import Formlabel from './ui/atoms/formLabel/FormLabel.tsx';
import MyModal from './ui/atoms/myModal/MyModal.tsx';
import Drawer from './ui/atoms/drawer/Drawer.tsx';
import ProgressStepper from './ui/atoms/progressStepper/ProgressStepper.tsx';
import Menu from './ui/atoms/menu/Menu.tsx';



const ComponentsViewer = () => {
  return (
    <div>

         
<Menu

  

/>
        <Heading text="Raavana" as='h1' className="example-heading" />
        <SubHeading text="Raavanaa is a digital platform that helps students build smart profiles, makes it easy for colleges to manage recruitment activities, and gives recruiters a clear view of candidates’ real skills. It’s not just about resumes. It’s about skills, growth, and connecting the right people together." as='h3' className="example-subheading"/>
        <ActionButton text="Read More" className='raavanaa-btn' />
        <Input type='file' placeholder='Enter your email' isMultiple={true} />
        <TextArea placeholder='Enter your message'/>
        <Label text="Completed" bg='success' />  
        <Formlabel text="Email" isRequired/>
        <MyModal title="Modal" paragraph="This is a paragraph" openButtonText="Open Modal" closeButtonText="Got it" />
        <Drawer title="Open Drawer" paragraph="This is a paragraph" placement='end'>
        <ActionButton text="Save" />
        </Drawer>
        <ProgressStepper step1="Step 1: Login" step2="Step 2: Register" step3="Step 3: Complete" step4="completed" /> 
        

    </div>
  )
}

export default ComponentsViewer;


