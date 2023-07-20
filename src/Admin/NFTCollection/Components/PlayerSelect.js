import { AsyncPaginate } from "react-select-async-paginate";
import { components } from "react-select";
import _ from "lodash";
import AxiosRequest from "../../../AxiosRequest";
import { useMemo, useRef } from "react";

const PlayerSelect = ({ value, onChange, ...rest }) => {
  const ref = useRef();
  const loadOptions = async (inputValue, options, additional) => {
    try {
      const { data } = await AxiosRequest.get("admin/player/all", {
        params: { limit: 20, skip: options.length, search: inputValue },
      });

      const merge = _.merge(
        _.cloneDeep(options),
        _.cloneDeep(data.data.records)
      );
      return {
        options: data.data.records,
        hasMore: merge.length >= data.data.total ? false : true,
      };
    } catch (error) {
      return { options: [], hasMore: false };
    }
  };

  const selected = useMemo(() => {
    if (ref.current && value) {
      return ref.current.props.options.find((option) => option.value === value);
    }
    return null;
  }, [value]);

  return (
    <AsyncPaginate
      selectRef={ref}
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
      loadOptions={loadOptions}
      onChange={(value) => onChange(value.value, value)}
      components={{ Option, IndicatorSeparator: () => null }}
      {...rest}
      // menuIsOpen
    />
  );
};

// const SingleValue = ({ data, ...props }) => {
//   console.log("DATA", data);
//   return <components.SingleValue {...props} />;
// };

const Option = (props) => {
  const { data } = props;
  return (
    <components.Option {...props}>
      <div className="player-selection-option py-2 cursor-pointer">
        <div className="d-flex align-items-center">
          <img src={data.PhotoUrl} alt={data.label} />
          <div className="ms-3">
            <div className="c-name">{data.label}</div>
            <div className="player-id">Player ID: {data.PlayerID}</div>
          </div>
        </div>
      </div>
    </components.Option>
  );
};

export default PlayerSelect;
