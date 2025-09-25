
import 'bootstrap/dist/css/bootstrap.min.css';
import '@radix-ui/colors/black-alpha.css';
import Menu from './ui/atoms/menu/Menu.tsx';
import Heading from './ui/atoms/heading/Heading.tsx';
import SubHeading from './ui/atoms/subheading/SubHeading.tsx';
import ActionButton from './ui/atoms/actionbutton/ActionButton.tsx';
import Input from './ui/atoms/input/Input.tsx';
import TextArea from './ui/atoms/textarea/TextArea.tsx';
import Label from './ui/atoms/label/Label.tsx';
import Formlabel from './ui/atoms/formlabel/FormLabel.tsx';
import Custommodal from './ui/atoms/custommodal/CustomModal.tsx';
import Drawer from './ui/atoms/drawer/Drawer.tsx';
import CustomStepper from './ui/atoms/customstepper/CustomStepper.tsx';




function App () {
 

  return (
    <div>

       <Menu 
            newtab="New Tab" 
            newwindow="New Window" 
            newprivatewindow="New Private Window"
            dropdownname="More Tools"
            dropdown1="Save Page As…"
            dropdown2="Create Shortcut…"
            dropdown3="Name Window…"
            dropdown4="Developer Tools"
            checkbox1="Show Bookmarks"
            checkbox2="Show Full URLs"
            label="People"
            radio1="Pedro Duarte"
            radio2="Colm Tuite"
            />

        <Heading text="Raavana" as='h1' className="example-heading" />
        <SubHeading text="Raavanaa is a digital platform that helps students build smart profiles, makes it easy for colleges to manage recruitment activities, and gives recruiters a clear view of candidates’ real skills. It’s not just about resumes. It’s about skills, growth, and connecting the right people together." />
        <ActionButton text="Read More" className='my-custom-btn' />
        <Input type='email' placeholder='Enter your email'/>
        <TextArea placeholder='Enter your message'/>
        <Label text="Completed" bg='success' />
        <Formlabel text="Email" required/>
        <Custommodal title="Modal" paragraph="This is a paragraph"/>
        <Drawer title="Open Drawer" paragraph="This is a paragraph" placement='end'/>
        <CustomStepper step1="Step 1: Login" step2="Step 2: Register" step3="Step 3: Complete" step4="completed" /> 
       
    </div>
     
  )
}

export default App;
