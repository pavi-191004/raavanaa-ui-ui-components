import { useState } from 'react';
import { Stepper, Group } from '@mantine/core';
import type { ProgressStepperProps } from './ProgressStepper.types.ts';
import '@mantine/core/styles.css';
import './progressStepper.css';
import Actionbutton from '../actionButton/ActionButton.tsx';


const ProgressStepper = ({step1, step2, step3, step4}: ProgressStepperProps) => {
 const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false} color="indigo" className='stepper'>
        <Stepper.Step label="Step 1" >
          {step1}
        </Stepper.Step >
        <Stepper.Step label="Step 2" >
          {step2} 
        </Stepper.Step>
        <Stepper.Step label="Step 3" >
          {step3}
        </Stepper.Step>
        <Stepper.Completed>
          {step4}
        </Stepper.Completed>

         

      </Stepper>

      <Group justify="left">

      <Actionbutton text="Back" onClick={prevStep} />
      <Actionbutton text="Next step" onClick={nextStep} />
      </Group>

    </div>
  );
}
export default ProgressStepper;


