
export function Header() {
    return <div className="flex justify-between p-7">
        <div >  
            <img src="../assets/Neflix-Logo"></img>
        </div>
        <div className="flex flex-row pr-40 gap-5">
            <div className="pr-30">   
                <select className="bg-black text-white px-4 py-2">
                    <option>English</option>
                    <option>French</option>
                </select>
            </div>
            <div className="pr-30">
                <button className="bg-red-500 text-white px-4 py-2 font-semibold rounded-md">Sign in</button>
            </div>
        </div>
    </div>
}