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
                        How does the virus spread? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    The virus that causes COVID-19 is thought to spread mainly from person to person, mainly through respiratory droplets produced when an infected person coughs, sneezes, or talks. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. Spread is more likely when people are in close contact with one another (within about 6 feet).

                    COVID-19 seems to be spreading easily and sustainably in the community (“community spread”) in many affected geographic areas. Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Can the virus that causes COVID-19 be spread through food, including restaurant take out, refrigerated or frozen packaged food?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Coronaviruses are generally thought to be spread from person to person through respiratory droplets. Currently, there is no evidence to support transmission of COVID-19 associated with food. Before preparing or eating food it is important to always wash your hands with soap and water for at least 20 seconds for general food safety. Throughout the day use a tissue to cover your coughing or sneezing, and wash your hands after blowing your nose, coughing or sneezing, or going to the bathroom.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                     Will warm weather stop the outbreak of COVID-19?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    It is not yet known whether weather and temperature affect the spread of COVID-19. Some other viruses, like those that cause the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months.  There is much more to learn about the transmissibility, severity, and other features associated with COVID-19 and investigations are ongoing.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What is community spread?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected. Each health department determines community spread differently based on local conditions. For information on community spread in your area, please visit your health department’s website.​
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
        </Accordion>
    );
}