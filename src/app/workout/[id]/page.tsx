import { WorkoutTypes } from "@/app/types";
import Badge from "@/app/components/common/Badge";
import Image from "next/image";
import SavedBtn from "@/app/components/WorkoutSection/SavedBtn";
import AddTodayBtn from "@/app/components/WorkoutSection/AddTodayBtn";
async function WorkDetails({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data = await res.json() as WorkoutTypes;
    const stats = Object.entries(data).slice(4, 11);

    return (
        <div className=" bg-black text-white flex items-center justify-center p-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-2xl overflow-hidden ">
                    <Image
                        src={data.image}
                        alt="Barbell bench press"
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                    />
                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold tracking-tight">{data.name}</h1>
                    <p className="text-primaryText mt-2 text-sm leading-relaxed">
                        {data.description}
                    </p>

                    <div className="flex gap-2 mt-4">
                        {data.muscleGroups.map((tag) => (
                            <Badge
                                key={tag}
                                style="text-black"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <div className="mt-6 bg-neutral-900 rounded-xl divide-y divide-neutral-800">
                        {stats.map((stat) => (
                            <div key={stat[0]} className="flex justify-between px-4 py-3">
                                <span className="text-primaryText text-xs font-bold">{stat[0].toUpperCase()}</span>
                                <span className="text-sm font-medium text-[#E5E7EB]">{stat[1]}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6">
                        <h2 className="text-base font-semibold mb-3">Instructions</h2>
                        <ol className="space-y-3">
                            {data.instructions.map((step, i) => (
                                <li key={i} className="text-sm text-gray-300 flex gap-2">
                                    <span className="text-gray-500">{i + 1}.</span>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="flex gap-3 mt-6">
                        <AddTodayBtn/>
                        <SavedBtn/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkDetails
