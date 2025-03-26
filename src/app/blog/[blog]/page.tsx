import { FaRegCalendarAlt } from "react-icons/fa";
import Navbar from '../../../components/Navbar';

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl p-6 mx-auto space-y-8">
                <header className="space-y-4 text-center">
                    <h1 className="text-3xl font-bold">
                        How to Plan a Company Retreat for 200 People in Nigeria
                    </h1>
                    <p className="flex items-center justify-center space-x-2 text-gray-500">
                        <FaRegCalendarAlt />
                        <span>December 23, 2024</span>
                    </p>
                </header>

                <img
                    src="/images/graduate.jpg"
                    alt="Paystack Retreat"
                    className="w-full shadow-lg rounded-xl h-[500px]"
                />

                <div className="p-6 space-y-6 bg-white shadow-lg rounded-xl">
                    <p>
                        Every year at Paystack, we organize a week-long in-person company
                        retreat, known as our annual offsite. This offsite brings together
                        Stacks from across the globe—Nigeria, South Africa, Kenya, Ghana,
                        UAE, and Ireland—for a week of collaboration, reflection, and
                        cultural immersion.
                    </p>

                    <h2 className="text-xl font-semibold">Why the Offsite Matters</h2>
                    <p>
                        It’s a time to reset, recharge, and align as a team for the year
                        ahead. Over the years, our offsites have taken us to diverse
                        locations, including Ghana, Rwanda, and scenic venues across
                        Nigeria. This year, we returned to Lagos, hosting 200 employees at
                        Lakowe Lakes Golf and Country Estate.
                    </p>

                    <h2 className="text-xl font-semibold">The Theme: Renaissance</h2>
                    <p>
                        Each offsite is guided by a theme that sets the tone for the week.
                        December 2024’s theme, <strong>Renaissance</strong>, drew
                        inspiration from the historical period of transformation and
                        renewal. It represents a new phase of growth and possibilities for
                        Paystack—a reawakening of sorts, signaling exciting things to come.
                    </p>
                </div>

                <div className="mt-6 text-center">
                    <button className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow">
                        Read More
                    </button>
                </div>
            </div>
        </>
    );
}
