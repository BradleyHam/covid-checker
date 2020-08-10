import React from 'react';
 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
 
export default function Example() {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Should I be tested for a current infection?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Maybe; not everyone needs to be tested for COVID-19.

If you have symptoms of COVID-19 and want to get tested, call your healthcare provider first. Most people will have mild illness and can recover at home without medical care and may not need to be tested.

CDC has guidance for who should be tested, but decisions about testing are made by state and local health departments and healthcare providers.

You can also visit your state or local health department’s website to look for the latest local information on testing.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How can I get tested for a current infection (viral test) and what does my test mean?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Decisions about testing are made by state and localexternal icon health departments or healthcare providers. If you have symptoms of COVID-19 and are not tested, it is important to stay home. What to do if you are sick.

COVID-19 testing differs by location. If you have symptoms of COVID-19 and want to get tested, call your healthcare provider first. You can also visit your state or localexternal icon health department’s website to look for the latest local information on testing. The U.S. Food and Drug Administration (FDA) has authorized viral tests that let you collect either a nasal swabexternal icon or a saliva sampleexternal icon at home. However, you will still need to send your sample to a laboratory for analysis.

If you test positive for COVID-19, know what protective steps to take if you are sick or caring for someone.

If you test negative for COVID-19, you probably were not infected at the time your sample was collected. However, that does not mean you will not get sick. The test result only means that you did not have COVID-19 at the time of testing. You might test negative if the sample was collected early in your infection and test positive later during your illness. You could also be exposed to COVID-19 after the test and get infected then. This means you could still spread the virus. If you develop symptoms later, you might need another test to determine if you are infected with the virus that causes COVID-19.

For more information about viral tests, please visit Test for Current Infection.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How can I get tested for a past infection (antibody test) and what does my test mean?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Antibody tests for COVID-19 are available through healthcare providers and laboratories. Check with your healthcare provider to see if they offer antibody tests and whether you should get one.

A positive test result shows you might have antibodies from an infection with the virus that causes COVID-19. However, there is a chance a positive result means that you have antibodies from an infection with a virus from the same family of viruses (called coronaviruses), such as the one that causes the common cold.

Having antibodies to the virus that causes COVID-19 might provide protection from getting infected with the virus again. If it does, we do not know how much protection the antibodies might provide or how long this protection might last.

You should continue to protect yourself and others since you could get infected with the virus again.

If you test negative, you might not have ever had COVID-19. Talk with your healthcare provider about your test result and the type of test you took to understand what your result means.

Regardless of whether you test positive or negative, the results do not confirm whether or not you are able to spread the virus that causes COVID-19. Until we know more, continue to take steps to protect yourself and others.

If you want more information about antibody tests, see Test for Past Infection.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Can someone test negative and later test positive on a viral test for COVID-19?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Yes, it is possible. You may test negative if the sample was collected early in your infection and test positive later during this illness. You could also be exposed to COVID-19 after the test and get infected then. Even if you test negative, you still should take steps to protect yourself and others. See Testing for Current Infection for more information.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
        </Accordion>
    );
}