import { useState } from "react";
import { useBusySlots } from "../hooks/useBusySlots";
import { useActiveReservation } from "../hooks/useActiveReservations";
import { getOperatingHours } from "../utils/booking/operatingHours";
import { isTableOccupied } from "../utils/booking/tableStatus";
import BookingCalendar from "../components/services/BookingCalendar";
import BookingForm from "../components/services/BookingForm";

export default function Reservation() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const tables = [1, 2, 3, 4, 5, 6, 7, 8];

  const { activeReservations, currentTime } = useActiveReservation();
  const { busySlots } = useBusySlots(selectedTable, selectedDate);

  console.log("Current Calendar Day:", selectedDate.toDateString());
  console.log("Total Busy Slots Found:", busySlots.length);

  return (
    <>
      <div className="table-grid d-flex flex-wrap gap-3">
        {tables.map((num) => {
          const currentBooking = isTableOccupied(
            num,
            activeReservations,
            currentTime,
          );
          const isOccupied = !!currentBooking;
          return (
            <div key={num} className="col-md-3">
              <div
                className={`card text-center p-3 shadow-sm ${isOccupied ? "border-danger bg-light" : "border-primary"}`}
                style={{ transition: "0.3s" }}
              >
                <h5
                  className={`${isOccupied ? "text-danger" : "text-primary"}`}
                >
                  Table {num}
                </h5>
                <div className="my-2">
                  {isOccupied ? (
                    <span className="badge bg-danger">OCCUPIED</span>
                  ) : (
                    <span className="badge bg-success">AVAILABLE</span>
                  )}
                </div>
                <button
                  type="button"
                  className={`btn btn-sm ${isOccupied ? "btn-outline-danger" : "btn-primary"}`}
                  // data-bs-toggle="modal"
                  // data-bs-target="#tableModal"
                  onClick={() => {
                    setSelectedTable(num);
                    setModalOpen(true);
                  }}
                >
                  {isOccupied ? "View/Book Later" : "Book Now"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="modal show d-block" id="tableModal" tabIndex={-1}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Booking Table {selectedTable}</h5>
                <button
                  type="button"
                  className="btn-close"
                  // data-bs-dismiss="modal"
                  onClick={() => setModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <BookingCalendar
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                      />
                      <div className="mt-3">
                        <label
                          htmlFor=""
                          className="form-label fw-bold text-secondary"
                        >
                          Table Schedule for Today:
                        </label>
                        {busySlots.filter((slot) => {
                          const slotDateLocal = new Date(
                            slot.startTime,
                          ).toLocaleDateString();
                          const calendarDateLocal =
                            selectedDate.toLocaleDateString();

                          return slotDateLocal === calendarDateLocal;
                        }).length === 0 ? (
                          <p className="text-success small">
                            No bookings yet-pick any time
                          </p>
                        ) : (
                          <ul className="list-group">
                            {busySlots
                              .filter((slot) => {
                                const s = new Date(
                                  slot.startTime,
                                ).toLocaleDateString();
                                const c = selectedDate.toLocaleDateString();
                                console.log(
                                  `Checking Slot: ${new Date(slot.startTime).toLocaleDateString()} against Calendar: ${selectedDate.toLocaleDateString()}`,
                                );
                                return s === c;
                              })
                              .map((slot, index) => {
                                const start = new Date(slot.startTime);
                                const end = new Date(slot.endTime);

                                return (
                                  <li
                                    key={index}
                                    className="list-group-item list-group-item-light small text-danger"
                                  >
                                    <strong>Occupied: </strong>
                                    {start.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}{" "}
                                    -{" "}
                                    {end.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </li>
                                );
                              })}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-lg-6">
                      <BookingForm
                        selectedDate={selectedDate}
                        tableNumber={selectedTable}
                        getOperatingHours={getOperatingHours}
                        busySlots={busySlots}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
