import { useState } from "react";
import "./Locations.css";

const Countries = [
  {
    id: 1,
    name: "India",
    states: [
      { name: "Delhi", pincode: 123, city: ["New Ashok Nagar", "Rajiv Chawk"] },
      {
        name: "UttarPradesh",
        pincode: 456,
        city: ["Gorakhpur", "Maharajgung"],
      },
      {
        name: "Hariyana",
        pincode: 789,
        city: ["Hisar", "Hanshi"],
      },
    ],
  },
  {
    id: 2,
    name: "Canada",
    states: [
      {
        name: "Toranto",
        pincode: 987,
        city: ["ABC", "EFG"],
      },
    ],
  },
];
const Locations = () => {
  const [storeCountory, setStoreCountory] = useState();
  const [storeState, setStoreState] = useState();
  console.log(Countries);
  return (
    <div className="outer">
      <span>Choose Your Address..</span>
      <div className="mt-4">
        <div className="row mainDIV">
          {/* Country */}
          <div className="col-md-3">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setStoreCountory(e.target.value)}
            >
              {Countries.map((item, key) => (
                <>
                  <option selected disabled hidden key={key}>
                    Select Your Country
                  </option>
                  <option value={item.id}>{item.name}</option>
                </>
              ))}
            </select>
          </div>
          {/* State */}
          <div className="col-md-3">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => setStoreState(e.target.value)}
            >
              {storeCountory ? (
                Countries[storeCountory - 1].states.map((item, key) => (
                  <>
                    <option selected disabled hidden key={key}>
                      Select Your Country
                    </option>
                    <option value={key}>{item.name}</option>
                  </>
                ))
              ) : (
                <option selected disabled hidden>
                  Select Your Country
                </option>
              )}
            </select>
          </div>
          {/* City */}
          <div className="col-md-3">
            <select className="form-select" aria-label="Default select example">
              {storeState ? (
                Countries[storeCountory - 1].states[storeState].city.map(
                  (item, key) => (
                    <>
                      <option selected disabled hidden key={key}>
                        Select Your State
                      </option>
                      <option value="IND">{item}</option>
                    </>
                  )
                )
              ) : (
                <option selected disabled hidden>
                  Select Your State
                </option>
              )}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
