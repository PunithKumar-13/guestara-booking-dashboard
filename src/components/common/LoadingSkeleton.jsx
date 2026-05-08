function LoadingSkeleton() {

    return (

        <div className="animate-pulse">

            {/* Top */}

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <div className="h-10 w-[280px] rounded-xl bg-slate-200" />

                    <div className="mt-4 h-5 w-[420px] rounded-xl bg-slate-200" />

                </div>

                <div className="h-14 w-[320px] rounded-2xl bg-slate-200" />

            </div>



            {/* Cards */}

            <div className="grid grid-cols-5 gap-6">

                {
                    Array.from({ length: 5 }).map((_, index) => (

                        <div
                            key={index}
                            className="h-[220px] rounded-[28px] bg-slate-200"
                        />

                    ))
                }

            </div>



            {/* Calendar */}

            <div className="mt-6 h-[620px] rounded-[32px] bg-slate-200" />

        </div>
    )
}

export default LoadingSkeleton