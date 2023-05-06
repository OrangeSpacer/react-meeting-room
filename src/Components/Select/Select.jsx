import { useEffect, useRef, useState } from "react";
import Select from "react-select"
import Error from "../Error/Error";
const SelectComponent = ({value, onChange,options,error,refSelect, placeholder}) => {
    const handleChange = (selectedOption) => {
        console.log(selectedOption)
      onChange(selectedOption?.label)
    };
  

    return (
        <>
        <Select
            placeholder={placeholder}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: error?.message ? "#e63946" : "rgba(0, 0, 0, 0.1)",
                    transition: "all 0.5s ease"
                })
            }}
            filterOption={false}
            onInputChange={false}
            options={options}
            value={value.value}
            onChange={handleChange}
            ref={refSelect}
        />
        {error && <Error errorMessage={error.message}/>}
        </>
    );
}

export default SelectComponent