const DivComponent = ({ tecnologias, texto }) => {
    return (
        <div className="flex font-poppinsRegular flex-wrap gap-2">


            <div>
                <p className=" mb-[25px] mt-[20px] " >{texto}</p>
                <p className="py-3" >Tecnologias utilizadas:</p>
            </div>

            

            {tecnologias.map((tecnologia, index) => (
                <div
                    key={index}
                    className="  text-white bg-purple-600 flex items-center justify-center px-4 py-1 rounded-lg shadow-md">
                    {tecnologia}
                </div>
            ))}

        </div>
    );
};

export default DivComponent
