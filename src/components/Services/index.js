import React from 'react'
import Icon1 from '../../images/pablo-chars-thumb-6.png'
import Icon2 from '../../images/pablo-chars-thumb-3.png'
import Icon3 from '../../images/pablo-chars-thumb-4.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Text</ServicesH2>
                    <ServicesP>Text</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Text</ServicesH2>
                    <ServicesP>Text</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Text</ServicesH2>
                    <ServicesP>Text</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
