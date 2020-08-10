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
                    What cleaning products should I use to protect against COVID-19?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Clean and disinfect frequently touched surfaces such as tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.  If surfaces are dirty, clean them using detergent or soap and water prior to disinfection. To disinfect, most common EPA-registered household disinfectants will work. See CDC’s recommendations for household cleaning and disinfection.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Is it safe to get care for my other medical conditions during this time?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    It is important to continue taking care of your health and wellness.
Continue your medications, and do not change your treatment plan without talking to your healthcare provider.
Continue to manage your disease the way your healthcare provider has told you.
Have at least a 2-week supply of all prescription and non-prescription medications.
Talk to your healthcare provider about whether your vaccinations are up-to-date.
Call your healthcare provider
if you have any concerns about your medical conditions, or if you get sick.
to find out about different ways you can connect with your healthcare provider for chronic disease management or other conditions.
Do not delay getting emergency care for your health problems or any health condition that requires immediate attention.
If you need emergency help, call 911.
Emergency departments have infection prevention plans to protect you from getting COVID-19 if you need care for your medical condition.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Am I at risk for COVID-19 from mail, packages, or products?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    There is still a lot that is unknown about COVID-19 and how it spreads. Coronaviruses are thought to be spread most often by respiratory droplets. Although the virus can survive for a short period on some surfaces, it is unlikely to be spread from domestic or international mail, products or packaging. However, it may be possible that people can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be the main way the virus spreads.

Learn more about safe handling of deliveries and mail.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Is it okay for me to donate blood?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    In healthcare settings across the United States, donated blood is a lifesaving, essential part of caring for patients. The need for donated blood is constant, and blood centers are open and in urgent need of donations. CDC encourages people who are well to continue to donate blood if they are able, even if they are practicing social distancing because of COVID-19. CDC is supporting blood centers by providing recommendations that will keep donors and staff safe. Examples of these recommendations include spacing donor chairs 6 feet apart, thoroughly adhering to environmental cleaning practices, and encouraging donors to make donation appointments ahead of time.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
        </Accordion>
    );
}