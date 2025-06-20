import Card from "../components/Card";
import { useData } from "../context/DataContext";

const Home = () => {
    const { appointments } = useData();

    const upcommingAppointments = appointments.filter((appt) => new Date(appt.date) > Date.now())
    const pastAppointments = appointments.filter((appt) => new Date(appt.date) < Date.now())

    return (
        <div className="flex flex-col h-full gap-8">
            <section>
                <h1 className="font-bold text-4xl">Upcomming Appointments</h1>
                <div className="flex flex-wrap gap-4 mt-8">
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
                <div className="flex flex-wrap gap-4 mt-8">
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