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
                    What is community mitigation?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Community mitigation activities are actions that people and communities can take to slow the spread of infectious diseases, and prepare for it if it occurs, including COVID-19. Community mitigation is especially important before a vaccine or drug becomes widely available.

For more information, see Community Mitigation Framework.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What are community mitigation actions for COVID-19?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    For individuals

Washing hands often
Avoiding close contact with people who are sick, and practicing social distancing
Covering mouth and nose with a mask when around others
Covering coughs and sneezes
Cleaning and disinfecting frequently touched surfaces daily
For communities

Promoting behaviors that prevent spread
Maintaining healthy environments
Maintaining healthy operations
Preparing for when someone gets sick
Closing businesses and schools and limiting other services
For more information, see Community Mitigation Framework.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Who is involved in community mitigation actions?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Individual people, communities, schools, businesses, and healthcare organizations have a role to play in community mitigation. Policies*, which include limits on large gatherings, restrictions on businesses, and school closures are often needed to fully put in place community mitigation strategies.

Each community is unique. Because some actions can be very disruptive to daily life, mitigation activities will be different depending on how much disease has spread within the community, what the community population is like, and the ability to take these actions at the local level. To identify appropriate activities, all parts of a community that might be affected need to be considered, including populations most vulnerable to severe illness, and those who might be more affected socially or economically. When selecting mitigation activities, states and communities need to consider the spread of disease locally, characteristics of the people who live in the community (for example, age groups, languages spoken, overall health status), and the kind of public health resources and healthcare systems (like hospitals) that are available in the community. State and local officials may need to adjust community mitigation activities and immediately take steps to scale them up or down depending on the changing local situation.

Putting mitigation into practice is based on

Emphasizing individual responsibility for taking recommended personal-level actions
Empowering businesses, schools, and community organizations to take recommended actions, particularly in ways that protect persons at increased risk of severe illness
Focusing on settings that provide critical infrastructure or services to individuals at increased risk of severe illness
Minimizing disruptions to daily life to the extent possible
*CDC cannot address the policies of any business or organization. CDC shares recommendations based on the best available science to help people make decisions that improve their health and safety. In all cases, follow the guidance of your healthcare provider and local health department. Local decisions depend on local circumstances.

For more information, see Community Mitigation Framework.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        
            
        </Accordion>
    );
}