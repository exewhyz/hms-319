import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const appointmentsData = [
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

const prescriptionsData = [
    {
        id: 1,
        doctor: "Dr. Anushka",
        details: "jhefhwokfp"
    },
    {
        id: 2,
        doctor: "Dr. Tarasha",
        details: "jhefhwokfp"
    },
    {
        id: 3,
        doctor: "Dr. Anshuman",
        details: "jhefhwokfp"
    }
];

export const DataProvider = ({ children }) => {
    const [appointments, setAppointments] = useState(appointmentsData);
    const [prescriptions, setPrescriptions] = useState(prescriptionsData);
    const [dataError, setDataError] = useState(null);
    const [dataLoading, setDataLoading] = useState(false);

    const addAppointment = (appt) => {
        try {
            setDataLoading(true);
            setDataError(null);

            //api call with appt obj
            const newAppt = {
                id: Date.now(),
                ...appt
            }
            setAppointments((prev) => {
                return [
                    ...prev,
                    newAppt
                ]
            })
        } catch (error) {
            setDataError("Error booking appointment: " + error.message);
        } finally {
            setDataLoading(false)
        }
    }

    return (
        <DataContext.Provider value={{ appointments, prescriptions, dataError, dataLoading, addAppointment }}>
            {children}
        </DataContext.Provider>
    )
}
export const useData = () => useContext(DataContext);