import React from 'react';
import { useNavigate } from 'react-router-dom';
 
import { Villa } from '../Villastypes/Type1';
import loc from '../assets/location-pin.svg';
import bathtub from '../assets/bathtub.svg';
import room from '../assets/double-bed.svg';
import house from '../assets/measured.svg';
 
type VillaCardProps = {
    villa: Villa;
};
 
const VillaCard: React.FC<VillaCardProps> = ({ villa }) => {
    const navigate = useNavigate();
 
    const handleClick = () => {
        navigate(`/villa/${villa.id}`);
    };
 
    return (
        <section
            key={villa.id}
            className="sm:h-[350px] h-[330px] cursor-pointer xl:my-6 "
            onClick={handleClick}
        >
            {/* Image */}
            <figure className="relative w-full h-[380px]">
                <img src={villa.image} alt={villa.title} className="w-full object-contain rounded-md" />
 
 
                {/* Villa Details Box */}
                <div className="absolute xl:bottom-[1%] md:bottom-[15%] sm:bottom-[20%] bottom-[18%] lg:bottom-[25%] left-1/2 -translate-x-1/2 bg-white p-4 shadow-md rounded-sm w-[90%] mx-auto">
                    <article className="flex flex-col space-y-2">
                        <header className="flex justify-between font-bold">
                            <h1 className="font-nunito font-bold text-4 text-[#3e3e3e] leading-[27.2px]">{villa.title}</h1>
                            <h1 className="font-nunito font-bold text-4 text-[#ffa800] leading-[27.2px]">{villa.price}</h1>
                        </header>

                        <figure className='flex flex-row gap-x-2 '>
                        <img src={loc} className="w-[4%]" alt="location"  /> 
                        <p className="text-left font-nunito text-[#aeaeae] text-[14px]">
                            {villa.address}
                        </p>

                        </figure>
 
                       
                        <footer className="flex justify-between text-sm">
                            <p className="text-left font-semibold font-nunito text-[#626262] text-[14px]">
                                <img src={bathtub} className="inline" alt="bathroom" /> {villa.bath}
                            </p>
                            <p className="text-left font-semibold font-nunito text-[#626262] text-[14px]">
                                <img src={room} className="inline" alt="bedroom" /> {villa.beds}
                            </p>
                            <p className="text-left font-semibold font-nunito text-[#626262] text-[14px]">
                                <img src={house} className="inline" alt="size" /> {villa.size}
                            </p>
                        </footer>
                    </article>
                </div>
            </figure>
        </section>
    );
};
 
export default VillaCard;
 