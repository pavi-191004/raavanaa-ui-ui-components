import Menu from './ui/atoms/menu/Menu.tsx';
import Heading from './ui/atoms/heading/Heading.tsx';
import SubHeading from './ui/atoms/subheading/SubHeading.tsx';
import ActionButton from './ui/atoms/actionbutton/ActionButton.tsx';
import Input from './ui/atoms/input/Input.tsx';
import TextArea from './ui/atoms/textarea/TextArea.tsx';
import Label from './ui/atoms/label/Label.tsx';
import Formlabel from './ui/atoms/formlabel/FormLabel.tsx';
import CustomModal from './ui/atoms/custommodal/CustomModal.tsx';
import Drawer from './ui/atoms/drawer/Drawer.tsx';
import CustomStepper from './ui/atoms/customstepper/CustomStepper.tsx';

const Example = () => {
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
        <SubHeading text="Raavanaa is a digital platform that helps students build smart profiles, makes it easy for colleges to manage recruitment activities, and gives recruiters a clear view of candidates’ real skills. It’s not just about resumes. It’s about skills, growth, and connecting the right people together." as='h3' className="example-subheading"/>
        <ActionButton text="Read More" className='my-custom-btn' />
        <Input type='email' placeholder='Enter your email'/>
        <TextArea placeholder='Enter your message'/>
        <Label text="Completed" bg='success' />
        <Formlabel text="Email" required/>
        <CustomModal title="Modal" paragraph="This is a paragraph" />
        <Drawer title="Open Drawer" paragraph="This is a paragraph" placement='end'>
          <ActionButton text="Save" />
        </Drawer>
        <CustomStepper step1="Step 1: Login" step2="Step 2: Register" step3="Step 3: Complete" step4="completed" /> 

    </div>
  )
}

export default Example;


// For Heading component, you can use props such as "text", "as", and "className". The "as" prop is used to define tags such as h1, h2, h3, h4, h5.
// For SubHeading component, it is used the same way as Heading component, with an additional "p" tag support.
// For ActionButton, props such as "text", "className", "onClick", "disabled", and "variant" are used. The "variant" denotes the type of button, such as "primary", "secondary", "danger", "success", "warning", "light", "dark", "link", "info". If you want to design your own button style, you should remove the "variant" prop and instead use "className" to style using your custom style.
// For Input field, props such as "type" and "placeholder" are used. By using the "type" prop, you can select input types like email, password, text, url, file, tel, number.
// For TextArea, props such as "placeholder", "onChange", and "value" are used. Inside "value", you should declare a state variable.
// For Label, props such as "text", "className", and "bg" are used. It works similar to ActionButton. If you want default colors, you can use "bg", which accepts "primary", "secondary", "danger", "success", "warning", "light", "dark", "link", "info".
// For FormLabel, props such as "text" and "required" are used. "Text" is the same as for all components, and "required" denotes mandatory fields with "*". If you haven't passed the "required" prop, it will be normal.
// For CustomModal, props such as "title" and "paragraph" are used. "Title" denotes the header, and "paragraph" is used inside the body.
// For Drawer, props such as "title", "paragraph", and "placement" are used. "Placement" denotes from which side the drawer should appear. Inside the drawer, you can use other components.
// For CustomStepper, props such as "step1", "step2", "step3", "step4" are used. Using these, you can describe the steps.
// For Menu, props such as "newtab", "newwindow", "newprivatewindow", "dropdownname", "dropdown1", "dropdown2", "dropdown3", "dropdown4", "checkbox1", "checkbox2", "label", "radio1", "radio2" are used. You can describe the content you want.
