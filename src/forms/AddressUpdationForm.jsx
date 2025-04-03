import React, { useState } from 'react';

const backendUrl = import.meta.env.VITE_BACKEND_PORT;

const AddressUpdationForm = () => {
  const [AddressFrom, setAddressFrom] = useState({
    FlatNo: '', Address: '', PinCode: '', City: '', States: '',
  });

  // Optional clear function if needed
  // const handleClear = () => {
  //   setAddressFrom({
  //     FlatNo: '', Address: '', PinCode: '', City: '', States: '',
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { FlatNo, Address, PinCode, City, States } = AddressFrom;

    const addressData = { FlatNo, Address, PinCode, City, States };

    console.log(addressData);

    try {
   
      let response = await fetch(`${backendUrl}/user/address/add`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
       
        },
        credentials: 'include',
        body: JSON.stringify(addressData),
      });

      if (!response.ok) {
        throw new Error(error.message);
      }

      let result = await response.json();
      console.log(result);

    } catch (error) {
      console.log(error.message);

    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="FlatNo"
          id="FlatNo"
          placeholder="Flat No"
          value={AddressFrom.FlatNo}
          onChange={(e) => setAddressFrom({ ...AddressFrom, FlatNo: e.target.value })}
        />

        <input
          type="text"
          name="Address"
          id="Address"
          placeholder="Address"
          value={AddressFrom.Address}
          onChange={(e) => setAddressFrom({ ...AddressFrom, Address: e.target.value })}
        />

        <input
          type="text"
          name="PinCode"  // Name corrected to match state
          id="PinCode"
          placeholder="Pin Code"
          value={AddressFrom.PinCode}
          onChange={(e) => setAddressFrom({ ...AddressFrom, PinCode: e.target.value })}
        />

        <div>
          <input
            type="text"
            name="City"
            id="City"
            placeholder="City"
            value={AddressFrom.City}
            onChange={(e) => setAddressFrom({ ...AddressFrom, City: e.target.value })}
          />

          <select
            name="States"
            id="States"
            value={AddressFrom.States}
            onChange={(e) => setAddressFrom({ ...AddressFrom, States: e.target.value })}
          >
            <option value="delhi">Delhi</option>
            <option value="bihar">Bihar</option>
            <option value="haryana">Haryana</option>
            <option value="punjab">Punjab</option>
            <option value="noida">Noida</option>
            <option value="mumbai">Mumbai</option>
            <option value="uttarPardesh">Uttar Pradesh</option>
          </select>
        </div>

        <div>
          {/* Optional clear button */}
          {/* <button type="button" onClick={handleClear}>Clear</button> */}
          <button type="submit">Submit</button>
        </div>

        {/* Optional error message display */}
        {/* {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} */}
      </form>
    </div>
  );
};

export default AddressUpdationForm;
