import Card from "../components/Card";

const Home = () => {

    const appointments = [
        {
            id: 1,
            doctor: "Dr. Anushka",
            date: "2025-05-20",
            time: "10:34 AM"
        },
        {
            id: 2,
            doctor: "Dr. Tarasha",
            date: "2025-06-20",
            time: "10:34 AM"
        },
        {
            id: 3,
            doctor: "Dr. Anshuman",
            date: "2025-07-20",
            time: "01:40 PM"
        }
    ];

    const upcommingAppointments = appointments.filter((appt) => new Date(appt.date) > Date.now())
    const pastAppointments = appointments.filter((appt) => new Date(appt.date) < Date.now())


    return (
        <div className="flex flex-col h-full gap-8">
            <section>
                <h1 className="font-bold text-4xl">Upcomming Appointments</h1>
                <div className="flex gap-4 mt-8">
                    {
                        upcommingAppointments.map((appt) => {
                            return (
                                <Card
                                    key={appt.id}
                                    id={appt.id}
                                    doctor={appt.doctor}
                                    date={appt.date}
                                    time={appt.time}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section>
                <h1 className="font-bold text-4xl">Past Appointments</h1>
                <div className="flex gap-4 mt-8">
                    {
                        pastAppointments.map((appt) => {
                            return (
                                <Card
                                    key={appt.id}
                                    id={appt.id}
                                    doctor={appt.doctor}
                                    date={appt.date}
                                    time={appt.time}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Home;