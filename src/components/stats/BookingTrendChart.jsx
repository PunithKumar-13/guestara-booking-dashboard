import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts'

function BookingTrendChart({
  monthlyBookings,
}) {

  return (

    <section className="rounded-[32px] border border-white/40 bg-white/70 p-8 shadow-[0_8px_30px_rgba(59,130,246,0.08)] backdrop-blur-xl">

      {/* Header */}

      <div className="mb-8">

        <p className="text-sm text-slate-500">
          Booking Trends
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Monthly Reservations
        </h2>

      </div>

      {/* Chart Container */}

      <div className="h-[260px] w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={monthlyBookings}
            margin={{
              top: 25,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            {/* Gradient */}

            <defs>

              <linearGradient
                id="bookingGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#4f7cff"
                />

                <stop
                  offset="100%"
                  stopColor="#7ea6ff"
                />

              </linearGradient>

            </defs>

            {/* X Axis */}

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#64748b',
                fontSize: 14,
                fontWeight: 500,
              }}
            />

            {/* Tooltip */}

            <Tooltip
              cursor={{
                fill: 'rgba(79,124,255,0.06)',
              }}
              contentStyle={{
                borderRadius: '18px',
                border: 'none',
                backgroundColor: '#ffffff',
                boxShadow:
                  '0 12px 30px rgba(59,130,246,0.15)',
              }}
            />

            {/* Bars */}

            <Bar
              dataKey="bookings"
              fill="url(#bookingGradient)"
              radius={[14, 14, 0, 0]}
              barSize={48}
            >

              {/* Numbers Above Bars */}

              <LabelList
                dataKey="bookings"
                position="top"
                fill="#1e293b"
                fontSize={13}
                fontWeight={700}
              />

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </section>
  )
}

export default BookingTrendChart