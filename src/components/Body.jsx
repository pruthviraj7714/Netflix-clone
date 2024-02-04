
export function Body() {
    return<div className="grid grid-cols-1">
        <div className="font-bold text-white text-5xl text-center">
            <h1>Unlimited movies, TV shows and more</h1>
        </div>
        <div className="font-lg text-white text-center text-2xl pt-5">
            <h3>Watch anywhere. Cancel anytime.</h3>
        </div>
        <div className="font-lg text-center text-2xl pt-5 text-white">
            Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="flex justify-center pt-5 gap-3">
            <input placeholder="Email address" className="bg-transparent text-white text-md font-semibold w-96 border-gray-300"></input>
            <button className="bg-red-600 text-white font-bold text-3xl px-7 py-3">Get Started</button>
        </div>
    </div>
}