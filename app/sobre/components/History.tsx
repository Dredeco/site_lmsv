import React from 'react'
import Container from '../../components/Container'

const History = () => {
    return (
        <Container className="h-auto min-h-[446px] bg-[#fafafa] z-10">
            <div className="flex items-center gap-[8px] lg:gap-[28px] mb-[51px] relative">
                <div className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] bg-[#9C1C37]" />
                <span className="text-[#8e1730] text-[1.2rem] lg:text-[1.8rem]">Sobre</span>
            </div>
            <div className='w-full grid lg:grid-cols-2 gap-[26px] lg:gap-24'>            
                <div className="w-full lg:max-w-[640px]">
                    <span className="text-[2.4rem] lg:text-[4.2rem] font-light leading-[50.4px] tracking-[-1.26px]">
                        Nossa história
                    </span>
                </div>

                <div className="w-full lg:max-w-[640px]">
                    <p className="text-[1.4rem] lg:text-[1.8rem] mb-[38px] tracking-[-0.36px] text-[#424847] font-normal flex-1 leading-[160%]">
                    Lorem ipsum dolor sit amet consectetur. Condimentum lacus et varius eget. Dui ut ut tincidunt quis dui arcu et. Eu vitae pharetra vel sed odio vulputate eu. Quis nisl magna pellentesque phasellus non lectus. Ac nisl aenean at id mattis mattis. Tempus facilisis turpis gravida integer malesuada arcu fermentum. Non lacus sed <br /> <br />
                    Volutpat facilisis imperdiet vestibulum blandit diam at. Consequat lacus odio pellentesque ipsum arcu nec. Sagittis quam pellentesque orci lectus morbi urna viverra. Bibendum varius consectetur diam cursus natoque arcu. Leo purus eu purus cursus blandit convallis. Varius cras ut non ornare. Blandit neque sit facilisi turpis. Non placerat sit lorem neque vulputate dignissim faucibus ut.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default History