

export default function Card(){
    return (
        <>
        <div className="w-[600px] m-auto border-2 p-[20px] ">
            <div className="shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <div className="flex justify-center items-center p-4 ">
            <img className="rounded-full w-[150px] h-[150px] object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNy4PaecEnpEXlF4jo_7mxMS41P8Kzi9AZNw&s" alt="" />
            </div>
            <div>
                <h1 className="text-center text-[40px] font-bold text-red-400">Lindsey James</h1>
                <h1 className="text-center text-[gray] font-bold">@lindsey_jam3s</h1>
            </div>
            <div>
                <h2 className=" w-[400px] m-auto text-[gray]">Actress, Musician, Songwriter and Artist. PM for work inquires</h2>
                <h2 className=" w-[400px] text-center m-auto py-[2px] text-[gray]">or</h2>
                <h2 className=" w-[400px] text-center m-auto py-[2px] text-[teal]">#tag</h2>
                <h2 className=" w-[400px] text-center m-auto py-[2px] text-[gray]">me in your posts</h2>
            </div>
            <div className="flex justify-evenly text-[20px] py-[40px]">
                <div>#ART</div>
                <div>#PHOTOGRAPHY</div>
                <div>#MUSIC</div>
            </div>
            <div className="flex justify-center">
                <button className="w-[100px] h-[50px] text-[16px] m-[50px] rounded-full border-[0] ">Message</button>
                <button className="w-[100px] h-[50px] text-[16px] text-[white] m-[50px] rounded-full border-[0] bg-[skyblue]">Follow</button>
            </div>
            </div>
            
        </div>
        
        </>
    )
}

  