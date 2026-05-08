function ErrorState({ error }) {

    return (

        <div className="flex min-h-screen items-center justify-center bg-[#f4f8ff] p-6">

            <div className="w-full max-w-[480px] rounded-[32px] border border-red-100 bg-white p-10 text-center shadow-[0_8px_30px_rgba(239,68,68,0.08)]">

                {/* Icon */}

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-4xl">

                    ⚠️

                </div>



                {/* Title */}

                <h2 className="mt-6 text-3xl font-bold text-slate-900">

                    Something went wrong

                </h2>



                {/* Description */}

                <p className="mt-4 leading-relaxed text-slate-500">

                    We couldn't load the booking data.
                    Please refresh the page or try again later.

                </p>



                {/* Error */}

                <div className="mt-6 rounded-2xl bg-red-50 p-4 text-sm text-red-500">

                    {error}

                </div>



                {/* Refresh */}

                <button
                    onClick={() => window.location.reload()}
                    className="mt-8 rounded-2xl bg-blue-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-600"
                >

                    Refresh Dashboard

                </button>

            </div>

        </div>
    )
}

export default ErrorState