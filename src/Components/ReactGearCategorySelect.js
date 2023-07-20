import Select, { components } from "react-select";
import { useMemo } from "react";

const ReactGearCategorySelect = ({ value, onChange, ...rest }) => {
  const selected = useMemo(() => {
    if (rest.options && Array.isArray(rest.options) && value) {
      return rest.options.find((option) => option.value === value);
    }
    return null;
  }, [value, rest.options]);

  return (
    <Select
      styles={{
        singleValue: (provided) => ({ ...provided, color: "#fff" }),
        menu: (provided) => ({ ...provided }),
        input: (provided) => ({ ...provided, color: "#fff" }),
        control: (provided) => ({
          ...provided,
          border: "1px solid #2B2B2B",
          backgroundColor: "#0F0F0F",
          minHeight: "53px",
          color: "#fff",
        }),
        option: (provided, { isFocused }) => ({
          ...provided,
          backgroundColor: isFocused ? "#3B3B3B" : "#fff",
          color: isFocused ? "#fff" : "#000",
        }),
      }}
      value={selected}
      onChange={(value) => {
        if (typeof onChange === "function") onChange(value.value);
      }}
      components={{ Option, IndicatorSeparator: () => null }}
      {...rest}
    />
  );
};

const Option = (props) => {
  const { data } = props;
  return (
    <components.Option {...props}>
      <div className="player-selection-option py-2 cursor-pointer">
        <div className="d-flex align-items-center">
          <img src={data.imageUrl} alt={data.label} />
          <div className="ms-3">
            <div className="c-name">{data.label}</div>
          </div>
        </div>
      </div>
    </components.Option>
  );
};

export default ReactGearCategorySelect;
